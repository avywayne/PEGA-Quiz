const PREFIX = 'pega-quiz:';

export function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode / quota) — ignore silently
  }
}

export function removeKey(key: string): void {
  localStorage.removeItem(PREFIX + key);
}

export const STORAGE_KEYS = {
  importedQuestions: 'imported-questions',
  activeSession: 'active-session',
  lastResult: 'last-result',
  savedQuestionsLibrary: 'saved-questions-library',
} as const;
