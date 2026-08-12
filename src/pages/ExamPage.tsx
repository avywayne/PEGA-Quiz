import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionNavigator from '../components/QuestionNavigator';
import { formatTime } from '../lib/examEngine';
import { getActiveSession, saveActiveSession, submitExam } from '../lib/sessionStore';
import type { ExamSession } from '../types/exam';

export default function ExamPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<ExamSession | null>(() => getActiveSession());
  const [now, setNow] = useState(Date.now());
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const submittedRef = useRef(false);

  const doSubmit = useCallback(
    (s: ExamSession) => {
      if (submittedRef.current) return;
      submittedRef.current = true;
      submitExam(s);
      navigate('/results');
    },
    [navigate],
  );

  useEffect(() => {
    if (!session) {
      navigate('/');
      return;
    }
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [session, navigate]);

  useEffect(() => {
    if (session && now >= session.endsAt) {
      doSubmit(session);
    }
  }, [now, session, doSubmit]);

  if (!session) return null;

  const remaining = session.endsAt - now;
  const isLowTime = remaining <= 5 * 60_000;
  const question = session.questions[session.currentIndex];
  const givenAnswers = session.answers[question.id] ?? [];
  const answeredCount = Object.values(session.answers).filter((a) => a.length > 0).length;

  function update(mutator: (s: ExamSession) => ExamSession) {
    setSession((prev) => {
      if (!prev) return prev;
      const next = mutator(prev);
      saveActiveSession(next);
      return next;
    });
  }

  function selectOption(optionId: string) {
    update((s) => {
      const q = s.questions[s.currentIndex];
      const current = s.answers[q.id] ?? [];
      let next: string[];
      if (q.type === 'single') {
        next = [optionId];
      } else {
        next = current.includes(optionId) ? current.filter((id) => id !== optionId) : [...current, optionId];
      }
      return { ...s, answers: { ...s.answers, [q.id]: next } };
    });
  }

  function goTo(index: number) {
    update((s) => ({ ...s, currentIndex: Math.max(0, Math.min(s.questions.length - 1, index)) }));
  }

  function toggleFlag() {
    update((s) => {
      const q = s.questions[s.currentIndex];
      const isFlagged = s.flagged.includes(q.id);
      return {
        ...s,
        flagged: isFlagged ? s.flagged.filter((id) => id !== q.id) : [...s.flagged, q.id],
      };
    });
  }

  function toggleSaveForLater() {
    update((s) => {
      const q = s.questions[s.currentIndex];
      const isSaved = s.savedForLater.includes(q.id);
      return {
        ...s,
        savedForLater: isSaved ? s.savedForLater.filter((id) => id !== q.id) : [...s.savedForLater, q.id],
      };
    });
  }

  const isFlagged = session.flagged.includes(question.id);
  const isSaved = session.savedForLater.includes(question.id);
  const unansweredCount = session.questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">
              Pregunta {session.currentIndex + 1} de {session.questions.length}
            </p>
            <p className="text-xs text-slate-500">{answeredCount} respondidas</p>
          </div>
          <div className={`font-mono text-xl font-semibold ${isLowTime ? 'text-rose-400 animate-pulse' : 'text-slate-100'}`}>
            {formatTime(remaining)}
          </div>
          <button
            onClick={() => setShowSubmitModal(true)}
            className="rounded-lg bg-rose-700 hover:bg-rose-600 px-4 py-2 text-sm font-medium"
          >
            Finalizar examen
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">
        <main className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide text-sky-400 font-semibold">{question.topic}</span>
              {question.type === 'multiple' && (
                <span className="text-xs text-amber-400">
                  Selecciona {question.correctOptionIds.length} opciones
                </span>
              )}
            </div>

            <p className="text-lg leading-relaxed">{question.text}</p>

            <div className="space-y-2">
              {question.options.map((opt) => {
                const checked = givenAnswers.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition ${
                      checked ? 'border-sky-500 bg-sky-950/40' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type={question.type === 'single' ? 'radio' : 'checkbox'}
                      name={question.id}
                      checked={checked}
                      onChange={() => selectOption(opt.id)}
                      className="mt-1 accent-sky-500"
                    />
                    <span className="text-sm text-slate-200">{opt.text}</span>
                  </label>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={toggleFlag}
                className={`rounded-lg px-3 py-2 text-sm border ${
                  isFlagged
                    ? 'border-amber-500 bg-amber-600/20 text-amber-300'
                    : 'border-slate-700 text-slate-300 hover:border-slate-600'
                }`}
              >
                {isFlagged ? '★ Marcada para revisar' : '☆ Marcar para revisar'}
              </button>
              <button
                onClick={toggleSaveForLater}
                className={`rounded-lg px-3 py-2 text-sm border ${
                  isSaved
                    ? 'border-sky-500 bg-sky-600/20 text-sky-300'
                    : 'border-slate-700 text-slate-300 hover:border-slate-600'
                }`}
              >
                {isSaved ? '✓ Guardada para más tarde' : 'Guardar para más tarde'}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => goTo(session.currentIndex - 1)}
              disabled={session.currentIndex === 0}
              className="rounded-lg border border-slate-700 disabled:opacity-30 px-4 py-2 text-sm hover:border-slate-600"
            >
              ← Anterior
            </button>
            <button
              onClick={() => goTo(session.currentIndex + 1)}
              disabled={session.currentIndex === session.questions.length - 1}
              className="rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-30 px-4 py-2 text-sm font-medium"
            >
              Siguiente →
            </button>
          </div>
        </main>

        <aside className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-fit lg:sticky lg:top-20">
          <h2 className="text-sm font-semibold mb-3">Navegador de preguntas</h2>
          <QuestionNavigator
            questions={session.questions}
            currentIndex={session.currentIndex}
            answers={session.answers}
            flagged={session.flagged}
            savedForLater={session.savedForLater}
            onJump={goTo}
          />
        </aside>
      </div>

      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-20">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-md w-full space-y-4">
            <h3 className="text-lg font-semibold">¿Finalizar examen?</h3>
            <p className="text-sm text-slate-300">
              {unansweredCount > 0
                ? `Tienes ${unansweredCount} pregunta(s) sin responder. `
                : 'Has respondido todas las preguntas. '}
              {session.flagged.length > 0 && `${session.flagged.length} marcada(s) para revisar. `}
              Una vez finalizado no podrás modificar tus respuestas.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:border-slate-600"
              >
                Seguir respondiendo
              </button>
              <button
                onClick={() => doSubmit(session)}
                className="rounded-lg bg-rose-700 hover:bg-rose-600 px-4 py-2 text-sm font-medium"
              >
                Finalizar examen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
