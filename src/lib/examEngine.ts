import type { AnswerMap, ExamConfig, ExamResult, Question, TopicBreakdown } from '../types/exam';

export const DEFAULT_CONFIG: ExamConfig = {
  totalQuestions: 40,
  durationMinutes: 90,
  passPercentage: 70,
  source: 'mixed',
};

export function isCorrect(question: Question, given: string[] | undefined): boolean {
  if (!given || given.length === 0) return false;
  const correct = new Set(question.correctOptionIds);
  const givenSet = new Set(given);
  if (correct.size !== givenSet.size) return false;
  for (const id of correct) {
    if (!givenSet.has(id)) return false;
  }
  return true;
}

export function scoreExam(questions: Question[], answers: AnswerMap, config: ExamConfig): ExamResult {
  let correctCount = 0;
  let unansweredCount = 0;
  const byTopic = new Map<string, TopicBreakdown>();

  for (const q of questions) {
    const given = answers[q.id];
    if (!given || given.length === 0) unansweredCount++;
    const correct = isCorrect(q, given);
    if (correct) correctCount++;

    const entry = byTopic.get(q.topic) ?? { topic: q.topic, correct: 0, total: 0 };
    entry.total++;
    if (correct) entry.correct++;
    byTopic.set(q.topic, entry);
  }

  const totalCount = questions.length;
  const scorePercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 1000) / 10 : 0;

  return {
    scorePercentage,
    correctCount,
    totalCount,
    passed: scorePercentage >= config.passPercentage,
    topicBreakdown: Array.from(byTopic.values()).sort((a, b) => a.topic.localeCompare(b.topic)),
    submittedAt: Date.now(),
    unansweredCount,
  };
}

export function formatTime(msRemaining: number): string {
  const totalSeconds = Math.max(0, Math.floor(msRemaining / 1000));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
