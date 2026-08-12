import { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DEFAULT_CONFIG, formatTime } from '../lib/examEngine';
import { getImportedQuestions, getQuestionsBySource } from '../lib/questionBank';
import { clearActiveSession, getActiveSession, startNewExam } from '../lib/sessionStore';
import type { QuestionSource } from '../types/exam';

const SOURCE_OPTIONS: { value: QuestionSource; title: string; description: string }[] = [
  {
    value: 'imported',
    title: 'Solo preguntas del PDF',
    description: 'Usa únicamente las preguntas que importaste desde tu documento.',
  },
  {
    value: 'mixed',
    title: 'Mezcladas',
    description: 'Combina las preguntas del PDF con las de práctica generadas.',
  },
  {
    value: 'generated',
    title: 'Solo preguntas de práctica',
    description: 'Usa únicamente el banco de práctica generado (conceptos generales de Pega).',
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const importedCount = useMemo(() => getImportedQuestions().length, []);
  const [activeSession, setActiveSession] = useState(getActiveSession());
  const [source, setSource] = useState<QuestionSource | null>(null);
  const [totalQuestions, setTotalQuestions] = useState(DEFAULT_CONFIG.totalQuestions);
  const [durationMinutes, setDurationMinutes] = useState(DEFAULT_CONFIG.durationMinutes);
  const [passPercentage, setPassPercentage] = useState(DEFAULT_CONFIG.passPercentage);

  const available = source ? getQuestionsBySource(source).length : 0;

  function handleSelectSource(value: QuestionSource) {
    setSource(value);
    const count = getQuestionsBySource(value).length;
    setTotalQuestions((prev) => Math.max(5, Math.min(prev, count) || Math.min(DEFAULT_CONFIG.totalQuestions, count)));
  }

  function handleStart() {
    if (!source) return;
    startNewExam({ totalQuestions, durationMinutes, passPercentage, source });
    navigate('/exam');
  }

  function handleResume() {
    navigate('/exam');
  }

  function handleDiscard() {
    if (confirm('¿Descartar el examen en progreso? Perderás las respuestas guardadas.')) {
      clearActiveSession();
      setActiveSession(null);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Simulador de Examen — Pega CSA</h1>
          <p className="text-slate-400 text-sm">
            Practica en condiciones similares a un examen de certificación real: tiempo límite,
            navegación entre preguntas, marcar para revisar y guardar para más tarde.
          </p>
        </header>

        {activeSession && !activeSession.submitted && (
          <div className="bg-amber-950/40 border border-amber-800 rounded-xl p-5 space-y-3">
            <p className="text-amber-300 font-medium">Tienes un examen en progreso</p>
            <p className="text-sm text-amber-200/80">
              Tiempo restante aproximado: {formatTime(activeSession.endsAt - Date.now())} ·{' '}
              {Object.keys(activeSession.answers).length} de {activeSession.questions.length} respondidas
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleResume}
                className="rounded-lg bg-amber-600 hover:bg-amber-500 px-4 py-2 text-sm font-medium"
              >
                Continuar examen
              </button>
              <button
                onClick={handleDiscard}
                className="rounded-lg border border-amber-700 hover:bg-amber-900/40 px-4 py-2 text-sm"
              >
                Descartar y empezar de nuevo
              </button>
            </div>
          </div>
        )}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <h2 className="font-semibold text-lg">Configurar nuevo examen</h2>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">¿Con qué preguntas quieres hacer el examen?</label>
            <div className="grid gap-2">
              {SOURCE_OPTIONS.map((opt) => {
                const disabled = opt.value !== 'generated' && importedCount === 0;
                const count = disabled ? 0 : getQuestionsBySource(opt.value).length;
                const selected = source === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleSelectSource(opt.value)}
                    className={`text-left rounded-lg border p-3 transition ${
                      disabled
                        ? 'border-slate-800 opacity-40 cursor-not-allowed'
                        : selected
                          ? 'border-sky-500 bg-sky-950/40'
                          : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-100">{opt.title}</span>
                      <span className="text-xs text-slate-500">
                        {disabled ? 'sin preguntas importadas' : `${count} preguntas`}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{opt.description}</p>
                  </button>
                );
              })}
            </div>
            {importedCount === 0 && (
              <p className="text-xs text-amber-400">
                Aún no has importado preguntas del PDF.{' '}
                <Link to="/import" className="underline hover:text-amber-300">
                  Importar ahora
                </Link>
              </p>
            )}
          </div>

          <div className={`space-y-2 ${!source ? 'opacity-40 pointer-events-none' : ''}`}>
            <label className="flex justify-between text-sm text-slate-300">
              <span>Número de preguntas</span>
              <span className="font-mono">{totalQuestions}</span>
            </label>
            <input
              type="range"
              min={Math.min(5, available || 5)}
              max={Math.max(available, 5)}
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
              className="w-full accent-sky-500"
            />
            <p className="text-xs text-slate-500">Banco disponible: {available} preguntas</p>
          </div>

          <div className="space-y-2">
            <label className="flex justify-between text-sm text-slate-300">
              <span>Duración</span>
              <span className="font-mono">{formatTime(durationMinutes * 60_000)}</span>
            </label>
            <input
              type="range"
              min={10}
              max={180}
              step={5}
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
              className="w-full accent-sky-500"
            />
            <p className="text-xs text-slate-500">Por defecto: 1:30 hr (90 minutos), igual que muchos exámenes de certificación.</p>
          </div>

          <div className="space-y-2">
            <label className="flex justify-between text-sm text-slate-300">
              <span>Porcentaje mínimo para aprobar</span>
              <span className="font-mono">{passPercentage}%</span>
            </label>
            <input
              type="range"
              min={50}
              max={90}
              step={1}
              value={passPercentage}
              onChange={(e) => setPassPercentage(Number(e.target.value))}
              className="w-full accent-sky-500"
            />
          </div>

          <button
            onClick={handleStart}
            disabled={!source || available === 0}
            className="w-full rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed py-3 font-semibold"
          >
            {!source
              ? 'Elige con qué preguntas quieres empezar'
              : activeSession && !activeSession.submitted
                ? 'Comenzar nuevo examen'
                : 'Comenzar examen'}
          </button>
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <Link to="/import" className="text-sky-400 hover:text-sky-300">
            Importar preguntas (PDF → JSON)
          </Link>
          <Link to="/results" className="text-sky-400 hover:text-sky-300">
            Ver último resultado
          </Link>
        </div>
      </div>
    </div>
  );
}
