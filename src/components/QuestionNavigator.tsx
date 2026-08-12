import type { Question } from '../types/exam';

interface Props {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string[]>;
  flagged: string[];
  savedForLater: string[];
  onJump: (index: number) => void;
}

export default function QuestionNavigator({
  questions,
  currentIndex,
  answers,
  flagged,
  savedForLater,
  onJump,
}: Props) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-5 gap-2">
        {questions.map((q, i) => {
          const isAnswered = (answers[q.id]?.length ?? 0) > 0;
          const isFlagged = flagged.includes(q.id);
          const isSaved = savedForLater.includes(q.id);
          const isCurrent = i === currentIndex;

          let base = 'bg-slate-800 text-slate-400';
          if (isAnswered) base = 'bg-emerald-700/70 text-emerald-50';
          if (isFlagged) base = 'bg-amber-600/80 text-amber-50';

          return (
            <button
              key={q.id}
              onClick={() => onJump(i)}
              className={`relative h-9 w-9 rounded-md text-xs font-medium transition ${base} ${
                isCurrent ? 'ring-2 ring-sky-400' : ''
              }`}
              title={`Pregunta ${i + 1}${isSaved ? ' · Guardada para después' : ''}`}
            >
              {i + 1}
              {isSaved && (
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-sky-400 border border-slate-950" />
              )}
            </button>
          );
        })}
      </div>

      <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
        <Legend swatch="bg-emerald-700/70" label="Respondida" />
        <Legend swatch="bg-amber-600/80" label="Marcada para revisar" />
        <Legend swatch="bg-slate-800" label="Sin responder" />
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-400 inline-block" />
          <span>Guardada para más tarde</span>
        </div>
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded ${swatch} inline-block`} />
      <span>{label}</span>
    </div>
  );
}
