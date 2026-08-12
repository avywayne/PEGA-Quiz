export type QuestionType = 'single' | 'multiple';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  topic: string;
  text: string;
  options: QuestionOption[];
  /** ids of correct options — length 1 for 'single', length >=2 for 'multiple' */
  correctOptionIds: string[];
  explanation?: string;
  /** where this question came from, used when mixing banks */
  source: 'generated' | 'imported';
}

export interface QuestionBank {
  id: string;
  name: string;
  questions: Question[];
}

export type QuestionSource = 'generated' | 'imported' | 'mixed';

export interface ExamConfig {
  totalQuestions: number;
  durationMinutes: number;
  passPercentage: number;
  source: QuestionSource;
}

export type AnswerMap = Record<string, string[]>;

export interface ExamSession {
  config: ExamConfig;
  questions: Question[];
  answers: AnswerMap;
  flagged: string[];
  savedForLater: string[];
  currentIndex: number;
  startedAt: number;
  endsAt: number;
  submitted: boolean;
}

export interface TopicBreakdown {
  topic: string;
  correct: number;
  total: number;
}

export interface ExamResult {
  scorePercentage: number;
  correctCount: number;
  totalCount: number;
  passed: boolean;
  topicBreakdown: TopicBreakdown[];
  submittedAt: number;
  unansweredCount: number;
}

export interface StoredResult {
  result: ExamResult;
  session: ExamSession;
}
