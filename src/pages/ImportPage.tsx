import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  clearImportedQuestions,
  getUserImportedQuestions,
  importQuestions,
  removeImportedQuestion,
} from '../lib/questionBank';
import { pdfQuestions } from '../data/pdfQuestions';
import type { ImportResult } from '../lib/questionBank';

const EXAMPLE = `[
  {
    "id": "pdf-001",
    "type": "single",
    "topic": "Tema del PDF",
    "text": "Texto de la pregunta...",
    "options": [
      { "id": "a", "text": "Opción A" },
      { "id": "b", "text": "Opción B" },
      { "id": "c", "text": "Opción C" },
      { "id": "d", "text": "Opción D" }
    ],
    "correctOptionIds": ["b"],
    "explanation": "Por qué B es correcta (opcional)"
  }
]`;

export default function ImportPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<ImportResult | null>(null);
  const [imported, setImported] = useState(getUserImportedQuestions());
  const fileRef = useRef<HTMLInputElement>(null);

  function refresh() {
    setImported(getUserImportedQuestions());
  }

  function handleImport(jsonText: string) {
    try {
      const parsed = JSON.parse(jsonText);
      const r = importQuestions(parsed);
      setResult(r);
      refresh();
    } catch {
      setResult({ added: 0, skipped: 0, errors: ['El texto no es JSON válido. Revisa el formato.'] });
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    file.text().then(handleImport);
    e.target.value = '';
  }

  function handleClear() {
    if (confirm('¿Eliminar todas las preguntas importadas? Esta acción no se puede deshacer.')) {
      clearImportedQuestions();
      refresh();
      setResult(null);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Importar preguntas</h1>
          <Link to="/" className="text-sm text-sky-400 hover:text-sky-300">
            ← Volver al inicio
          </Link>
        </div>

        <div className="bg-emerald-950/30 border border-emerald-800 rounded-xl p-5 space-y-2">
          <p className="text-sm text-emerald-300 font-medium">
            Banco del PDF cargado: {pdfQuestions.length} preguntas reales disponibles
          </p>
          <p className="text-xs text-emerald-200/70">
            Ya puedes elegir "Solo preguntas del PDF" o "Mezcladas" al iniciar un examen desde el
            inicio. Si tienes preguntas adicionales, puedes añadirlas abajo.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <p className="text-sm text-slate-300">
            ¿Tienes más preguntas y respuestas (otro PDF o documento)? Convierte el contenido a
            este formato JSON (pídeme ayuda para hacer la conversión) e impórtalo aquí. Se
            <strong> añadirá</strong> al banco del PDF ya cargado para futuros exámenes.
          </p>
          <details className="text-sm text-slate-400">
            <summary className="cursor-pointer text-sky-400">Ver formato de ejemplo</summary>
            <pre className="mt-2 bg-slate-950 border border-slate-800 rounded-lg p-3 overflow-x-auto text-xs">
              {EXAMPLE}
            </pre>
          </details>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <label className="block text-sm font-medium text-slate-200">Subir archivo .json</label>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            onChange={handleFile}
            className="block w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-sky-600 file:text-white hover:file:bg-sky-500 file:cursor-pointer"
          />

          <div className="text-center text-xs text-slate-500">— o pega el JSON aquí —</div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Pega el arreglo JSON de preguntas..."
            rows={8}
            className="w-full rounded-lg bg-slate-950 border border-slate-800 p-3 text-sm font-mono text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <button
            onClick={() => handleImport(text)}
            disabled={!text.trim()}
            className="rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium"
          >
            Importar preguntas
          </button>

          {result && (
            <div className="text-sm space-y-1 rounded-lg border border-slate-800 bg-slate-950 p-3">
              <p className="text-emerald-400">{result.added} pregunta(s) importada(s) correctamente.</p>
              {result.skipped > 0 && <p className="text-amber-400">{result.skipped} pregunta(s) omitida(s).</p>}
              {result.errors.map((e, i) => (
                <p key={i} className="text-rose-400 text-xs">
                  {e}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Preguntas adicionales importadas ({imported.length})</h2>
            {imported.length > 0 && (
              <button onClick={handleClear} className="text-xs text-rose-400 hover:text-rose-300">
                Eliminar todas
              </button>
            )}
          </div>
          {imported.length === 0 ? (
            <p className="text-sm text-slate-500">Aún no has importado preguntas.</p>
          ) : (
            <ul className="divide-y divide-slate-800 max-h-80 overflow-y-auto">
              {imported.map((q) => (
                <li key={q.id} className="py-2 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-200">{q.text}</p>
                    <p className="text-xs text-slate-500">{q.topic}</p>
                  </div>
                  <button
                    onClick={() => {
                      removeImportedQuestion(q.id);
                      refresh();
                    }}
                    className="text-xs text-rose-400 hover:text-rose-300 shrink-0"
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
