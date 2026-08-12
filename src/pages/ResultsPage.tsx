import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLastResult } from '../lib/sessionStore';
import { isCorrect } from '../lib/examEngine';

type Filter = 'all' | 'incorrect' | 'saved' | 'flagged';

export default function ResultsPage() {
  const navigate = useNavigate();
  const stored = useMemo(() => getLastResult(), []);
  const [filter, setFilter] = useState<Filter>('all');

  if (!stored) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <p className="text-slate-400">Todavía no hay resultados de ningún examen.</p>
          <button onClick={() => navigate('/')} className="rounded-lg bg-sky-600 hover:bg-sky-500 px-4 py-2 text-sm">
            Ir al inicio
          </button>
        </div>
      </div>
    );
  }

  const { result, session } = stored;

  const filteredQuestions = session.questions.filter((q) => {
    const given = session.answers[q.id];
    const correct = isCorrect(q, given);
    if (filter === 'incorrect') return !correct;
    if (filter === 'saved') return session.savedForLater.includes(q.id);
    if (filter === 'flagged') return session.flagged.includes(q.id);
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Resultados del examen</h1>
          <Link to="/" className="text-sm text-sky-400 hover:text-sky-300">
            ← Nuevo examen
          </Link>
        </div>

        <div
          className={`rounded-xl border p-6 text-center space-y-2 ${
            result.passed ? 'border-emerald-700 bg-emerald-950/30' : 'border-rose-700 bg-rose-950/30'
          }`}
        >
          <p className={`text-4xl font-bold ${result.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
            {result.scorePercentage}%
          </p>
          <p className="text-lg font-medium">{result.passed ? 'Aprobado' : 'No aprobado'}</p>
          <p className="text-sm text-slate-400">
            {result.correctCount} de {result.totalCount} correctas · {result.unansweredCount} sin responder · umbral{' '}
            {session.config.passPercentage}%
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h2 className="font-semibold">Desglose por tema</h2>
          <div className="space-y-2">
            {result.topicBreakdown.map((t) => {
              const pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
              return (
                <div key={t.topic} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{t.topic}</span>
                    <span>
                      {t.correct}/{t.total} ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full ${pct >= session.config.passPercentage ? 'bg-emerald-500' : 'bg-amber-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ['all', 'Todas'],
                ['incorrect', 'Incorrectas'],
                ['saved', 'Guardadas para después'],
                ['flagged', 'Marcadas para revisar'],
              ] as [Filter, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-3 py-1.5 text-xs border ${
                  filter === key
                    ? 'border-sky-500 bg-sky-600/20 text-sky-300'
                    : 'border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <p className="text-sm text-slate-500 py-6 text-center">No hay preguntas en esta categoría.</p>
          )}

          {filteredQuestions.map((q) => {
            const given = session.answers[q.id] ?? [];
            const correct = isCorrect(q, given);
            return (
              <div
                key={q.id}
                className={`rounded-xl border p-5 space-y-3 ${
                  correct ? 'border-emerald-900 bg-emerald-950/10' : 'border-rose-900 bg-rose-950/10'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wide text-sky-400 font-semibold">{q.topic}</span>
                  <span className={correct ? 'text-emerald-400' : 'text-rose-400'}>
                    {correct ? 'Correcta' : 'Incorrecta'}
                  </span>
                </div>
                <p className="text-sm text-slate-100">{q.text}</p>
                <ul className="space-y-1">
                  {q.options.map((opt) => {
                    const wasGiven = given.includes(opt.id);
                    const isRight = q.correctOptionIds.includes(opt.id);
                    let style = 'text-slate-400';
                    if (isRight) style = 'text-emerald-400 font-medium';
                    else if (wasGiven) style = 'text-rose-400 line-through';
                    return (
                      <li key={opt.id} className={`text-sm ${style}`}>
                        {isRight ? '✓ ' : wasGiven ? '✗ ' : '· '}
                        {opt.text}
                      </li>
                    );
                  })}
                </ul>
                {q.explanation && <p className="text-xs text-slate-500 pt-1 border-t border-slate-800">{q.explanation}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
