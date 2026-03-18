import { useState, useRef, useEffect } from 'react';
import './CodeLab.css';

/**
 * CodeLab – FreeCodeCamp-artiges Übungslab
 *
 * Props:
 *   data – { title, exercises[] } aus labData.js
 *          exercise: { id, title, description, filename, startCode, hint, tests[] }
 *          test:     { label, check: (code) => boolean }
 */
export default function CodeLab({ data }) {
  const { title, exercises } = data;

  const [exIndex, setExIndex]       = useState(0);
  const [code, setCode]             = useState(exercises[0].startCode);
  const [testResults, setTestResults] = useState(null);   // null | { results[], passed }
  const [showHint, setShowHint]     = useState(false);
  const [finished, setFinished]     = useState(false);
  const textareaRef                 = useRef(null);

  const ex      = exercises[exIndex];
  const total   = exercises.length;
  const allPass = testResults?.passed;

  // Code zurücksetzen wenn Aufgabe wechselt
  useEffect(() => {
    setCode(exercises[exIndex].startCode);
    setTestResults(null);
    setShowHint(false);
    textareaRef.current?.focus();
  }, [exIndex, exercises]);

  /* ── Tab-Taste → 2 Spaces einfügen ── */
  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart: s, selectionEnd: end } = e.target;
      const next = code.slice(0, s) + '  ' + code.slice(end);
      setCode(next);
      // Cursor nach den Spaces setzen
      requestAnimationFrame(() => {
        e.target.selectionStart = s + 2;
        e.target.selectionEnd   = s + 2;
      });
    }
  }

  /* ── Tests ausführen ── */
  function runTests() {
    const results = ex.tests.map(t => ({
      label:  t.label,
      passed: t.check(code),
    }));
    const passed = results.every(r => r.passed);
    setTestResults({ results, passed });
    if (passed) {
      // Kurz warten, dann scrollen damit Erfolg sichtbar wird
      setTimeout(() => {
        document.querySelector('.codelab__success')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }

  /* ── Zur nächsten Aufgabe ── */
  function nextExercise() {
    if (exIndex < total - 1) {
      setExIndex(i => i + 1);
    } else {
      setFinished(true);
    }
  }

  /* ── Code zurücksetzen ── */
  function resetCode() {
    setCode(ex.startCode);
    setTestResults(null);
    setShowHint(false);
  }

  /* ── Lab neu starten ── */
  function restartLab() {
    setExIndex(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="codelab">
        <div className="codelab__header">
          <span className="codelab__badge">🧪 Lab</span>
          <h2 className="codelab__title">{title}</h2>
        </div>
        <div className="codelab__completion">
          <div className="codelab__trophy">🏆</div>
          <h3>Lab abgeschlossen!</h3>
          <p>Du hast alle {total} Aufgaben erfolgreich gelöst. Gut gemacht!</p>
          <button className="codelab__restart" onClick={restartLab}>↺ Nochmal von vorne</button>
        </div>
      </div>
    );
  }

  return (
    <div className="codelab">
      {/* ── Header ── */}
      <div className="codelab__header">
        <span className="codelab__badge">🧪 Lab</span>
        <h2 className="codelab__title">{title}</h2>
        <span className="codelab__counter">{exIndex + 1} / {total}</span>
      </div>

      {/* ── Fortschrittspunkte ── */}
      <div className="codelab__dots">
        {exercises.map((_, i) => (
          <button
            key={i}
            className={[
              'codelab__dot',
              i === exIndex ? 'codelab__dot--active' : '',
              i < exIndex   ? 'codelab__dot--done'   : '',
            ].join(' ')}
            onClick={() => { setExIndex(i); }}
            title={`Aufgabe ${i + 1}: ${exercises[i].title}`}
          />
        ))}
      </div>

      {/* ── Body: zweispaltig auf Desktop ── */}
      <div className="codelab__body">

        {/* LINKE SPALTE – Aufgabe */}
        <div className="codelab__task">
          <h3 className="codelab__ex-title">
            <span className="codelab__ex-num">{exIndex + 1}</span>
            {ex.title}
          </h3>

          <div
            className="codelab__description"
            dangerouslySetInnerHTML={{ __html: ex.description }}
          />

          {/* Test-Checkliste */}
          {testResults && (
            <div className="codelab__tests">
              <p className="codelab__tests-label">Test-Ergebnisse:</p>
              {testResults.results.map((r, i) => (
                <div key={i} className={`codelab__test-row codelab__test-row--${r.passed ? 'pass' : 'fail'}`}>
                  <span className="codelab__test-icon">{r.passed ? '✅' : '❌'}</span>
                  <span className="codelab__test-label">{r.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Erfolg */}
          {allPass && (
            <div className="codelab__success">
              <span>🎉</span>
              <div>
                <strong>Alle Tests bestanden!</strong>
                <p>{exIndex < total - 1 ? 'Weiter zur nächsten Aufgabe.' : 'Lab abgeschlossen!'}</p>
              </div>
              <button className="codelab__next-btn" onClick={nextExercise}>
                {exIndex < total - 1 ? 'Nächste Aufgabe →' : '🏆 Abschließen'}
              </button>
            </div>
          )}

          {/* Tipp */}
          {ex.hint && (
            <div className="codelab__hint-wrap">
              <button className="codelab__hint-toggle" onClick={() => setShowHint(v => !v)}>
                {showHint ? '▲ Tipp ausblenden' : '💡 Tipp anzeigen'}
              </button>
              {showHint && (
                <div className="codelab__hint">{ex.hint}</div>
              )}
            </div>
          )}
        </div>

        {/* RECHTE SPALTE – Editor */}
        <div className="codelab__editor-wrap">
          <div className="codelab__editor-header">
            <span className="codelab__filename">{ex.filename}</span>
            <div className="codelab__editor-actions">
              <button className="codelab__reset-btn" onClick={resetCode} title="Code zurücksetzen">↺</button>
            </div>
          </div>

          {/* Zeilennummern + Textarea */}
          <div className="codelab__editor">
            <LineNumbers code={code} />
            <textarea
              ref={textareaRef}
              className="codelab__textarea"
              value={code}
              onChange={e => { setCode(e.target.value); setTestResults(null); }}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>

          {/* Run-Button */}
          <div className="codelab__run-bar">
            <button className="codelab__run-btn" onClick={runTests}>
              ▶ Tests ausführen
            </button>
            {testResults && !allPass && (
              <span className="codelab__run-hint">
                {testResults.results.filter(r => r.passed).length} / {testResults.results.length} Tests bestanden
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Zeilennummern-Hilfskomponente ── */
function LineNumbers({ code }) {
  const lines = code.split('\n').length;
  return (
    <div className="codelab__linenums" aria-hidden="true">
      {Array.from({ length: lines }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );
}
