import type { Question, QuestionSource } from '../types/exam';
import { generatedQuestions } from '../data/generatedQuestions';
import { pdfQuestions } from '../data/pdfQuestions';
import { loadJSON, saveJSON, STORAGE_KEYS } from './storage';
import { shuffle } from './shuffle';

/** Questions the user added manually via the Import page (stored in localStorage). */
export function getUserImportedQuestions(): Question[] {
  return loadJSON<Question[]>(STORAGE_KEYS.importedQuestions, []);
}

/** All "imported" questions: the bundled PDF bank plus anything the user added manually. */
export function getImportedQuestions(): Question[] {
  return [...pdfQuestions, ...getUserImportedQuestions()];
}

export function getAllQuestions(): Question[] {
  return [...generatedQuestions, ...getImportedQuestions()];
}

export function getQuestionsBySource(source: QuestionSource): Question[] {
  if (source === 'generated') return generatedQuestions;
  if (source === 'imported') return getImportedQuestions();
  return getAllQuestions();
}

function isValidQuestion(q: unknown): q is Question {
  if (!q || typeof q !== 'object') return false;
  const r = q as Record<string, unknown>;
  if (typeof r.id !== 'string' || typeof r.text !== 'string') return false;
  if (r.type !== 'single' && r.type !== 'multiple') return false;
  if (!Array.isArray(r.options) || r.options.length < 2) return false;
  if (!Array.isArray(r.correctOptionIds) || r.correctOptionIds.length === 0) return false;
  return r.options.every(
    (o) => o && typeof o === 'object' && typeof (o as { id?: unknown }).id === 'string' && typeof (o as { text?: unknown }).text === 'string',
  );
}

export interface ImportResult {
  added: number;
  skipped: number;
  errors: string[];
}

/** Merges a raw parsed JSON array of questions into the imported bank, deduping by id. */
export function importQuestions(raw: unknown, topicFallback = 'Importado'): ImportResult {
  const result: ImportResult = { added: 0, skipped: 0, errors: [] };
  if (!Array.isArray(raw)) {
    result.errors.push('El archivo debe contener un arreglo JSON de preguntas.');
    return result;
  }

  const existing = getUserImportedQuestions();
  const existingIds = new Set([...generatedQuestions, ...pdfQuestions, ...existing].map((q) => q.id));
  const toAdd: Question[] = [];

  raw.forEach((item, idx) => {
    if (!isValidQuestion(item)) {
      result.errors.push(`Pregunta #${idx + 1} inválida u omitida (formato incorrecto).`);
      result.skipped++;
      return;
    }
    const q = item as Question;
    const id = existingIds.has(q.id) ? `imp-${Date.now()}-${idx}` : q.id;
    const normalized: Question = {
      ...q,
      id,
      topic: q.topic || topicFallback,
      source: 'imported',
      type: q.correctOptionIds.length > 1 ? 'multiple' : q.type,
    };
    existingIds.add(id);
    toAdd.push(normalized);
    result.added++;
  });

  if (toAdd.length > 0) {
    saveJSON(STORAGE_KEYS.importedQuestions, [...existing, ...toAdd]);
  }
  return result;
}

export function clearImportedQuestions(): void {
  saveJSON(STORAGE_KEYS.importedQuestions, []);
}

export function removeImportedQuestion(id: string): void {
  const existing = getUserImportedQuestions().filter((q) => q.id !== id);
  saveJSON(STORAGE_KEYS.importedQuestions, existing);
}

/** Picks `count` questions at random from the chosen source, with each question's
 * options shuffled into a random order (answers are still tracked by option id,
 * so correctness/selection state is unaffected by the display order). */
export function buildExamQuestions(count: number, source: QuestionSource): Question[] {
  const pool = shuffle(getQuestionsBySource(source));
  return pool.slice(0, Math.min(count, pool.length)).map((q) => ({
    ...q,
    options: shuffle(q.options),
  }));
}
