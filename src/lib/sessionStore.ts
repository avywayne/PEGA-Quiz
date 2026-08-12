import type { ExamConfig, ExamSession, StoredResult } from '../types/exam';
import { buildExamQuestions } from './questionBank';
import { scoreExam } from './examEngine';
import { loadJSON, removeKey, saveJSON, STORAGE_KEYS } from './storage';

export function getActiveSession(): ExamSession | null {
  return loadJSON<ExamSession | null>(STORAGE_KEYS.activeSession, null);
}

export function saveActiveSession(session: ExamSession): void {
  saveJSON(STORAGE_KEYS.activeSession, session);
}

export function clearActiveSession(): void {
  removeKey(STORAGE_KEYS.activeSession);
}

export function startNewExam(config: ExamConfig): ExamSession {
  const questions = buildExamQuestions(config.totalQuestions, config.source);
  const now = Date.now();
  const session: ExamSession = {
    config: { ...config, totalQuestions: questions.length },
    questions,
    answers: {},
    flagged: [],
    savedForLater: [],
    currentIndex: 0,
    startedAt: now,
    endsAt: now + config.durationMinutes * 60_000,
    submitted: false,
  };
  saveActiveSession(session);
  return session;
}

export function submitExam(session: ExamSession): StoredResult {
  const result = scoreExam(session.questions, session.answers, session.config);
  const stored: StoredResult = { result, session: { ...session, submitted: true } };
  saveJSON(STORAGE_KEYS.lastResult, stored);
  clearActiveSession();
  return stored;
}

export function getLastResult(): StoredResult | null {
  return loadJSON<StoredResult | null>(STORAGE_KEYS.lastResult, null);
}
