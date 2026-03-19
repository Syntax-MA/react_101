import { useState, useRef } from 'react';
import './BugFinder.css';

const CATEGORY_LABEL = {
  react: { icon: '⚛️', label: 'React' },
  js:    { icon: '⚡', label: 'JavaScript' },
  html:  { icon: '🌐', label: 'HTML' },
  css:   { icon: '🎨', label: 'CSS' },
};

/**
 * BugFinder – Fehler-Simulator
 *
 * Props:
 *   data – { title, exercises[] } aus bugData.js
 *          exercise: { id, title, category, description, buggyCode, hint, explanation, tests[] }
 */
export default function BugFinder({ data }) {
  const { title, exercises } = data;
  const [exIndex, setExIndex]       = useState(0);
  const [code, setCode]             = useState(exercises[0].buggyCode);
  const [testResults, setTestResults] = useState(null);
  const [showHint, setShowHint]     = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const textRef = useRef(null);

  const ex    = exercises[exIndex];
  const cat   = CATEGORY_LABEL[ex.category] ?? { icon: '🐛', label: ex.category };
  const total = exercises.length;
  const allPass = testResults?.passed;

  function goTo(i) {
    setExIndex(i);
    setCode(exercises[i].buggyCode);
    setTestResults(null);
    setShowHint(false);
    setShowSolution(false);
  }

  function handleCheck() {
    const results = ex.tests.map(t => ({
      label:  t.label,
      passed: (() => { try { return t.check(code); } catch { return false; } })(),
    }));
    const passed = results.every(r => r.passed);
    setTestResults({ results, passed });
  }

  function handleReset() {
    setCode(ex.buggyCode);
    setTestResults(null);
    setShowHint(false);
    setShowSolution(false);
  }

  /* ── Tab-Einzug im Textarea ── */
  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = textRef.current;
      const start = ta.selectionStart;
      const end   = ta.selectionEnd;
      const next  = code.slice(0, start) + '  ' + code.slice(end);
      setCode(next);
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = start + 2; });
    }
  }

  return (
    <div className="bugfinder">
      {/* ── Header ── */}
      <div className="bugfinder__header">
        <span className="bugfinder__badge">🐛 Fehler-Simulator</span>
        <h2 className="bugfinder__title">{title}</h2>
        <span className="bugfinder__counter">{exIndex + 1} / {total}</span>
      </div>

      {/* ── Dots ── */}
      <div className="bugfinder__dots">
        {exercises.map((_, i) => (
          <button
            key={i}
            className={[
              'bugfinder__dot',
              i === exIndex ? 'bugfinder__dot--active' : '',
            ].join(' ')}
            onClick={() => goTo(i)}
            title={exercises[i].title}
          />
        ))}
      </div>

      {/* ── Body ── */}
      <div className="bugfinder__body">

        {/* ── Left: Aufgabe ── */}
        <div className="bugfinder__left">
          <div className="bugfinder__meta">
            <span className="bugfinder__cat">{cat.icon} {cat.label}</span>
            <span className="bugfinder__ex-title">{ex.title}</span>
          </div>
          <p className="bugfinder__desc">{ex.description}</p>

          {/* ── Aktions-Buttons ── */}
          <div className="bugfinder__actions">
            <button className="bugfinder__btn bugfinder__btn--check" onClick={handleCheck}>
              🔍 Prüfen
            </button>
            <button
              className={`bugfinder__btn bugfinder__btn--hint${showHint ? ' active' : ''}`}
              onClick={() => setShowHint(v => !v)}
            >
              💡 Hinweis
            </button>
            <button className="bugfinder__btn bugfinder__btn--reset" onClick={handleReset}>
              ↺ Reset
            </button>
          </div>

          {/* ── Hinweis ── */}
          {showHint && (
            <div className="bugfinder__hint">
              <span className="bugfinder__hint-icon">💡</span>
              {ex.hint}
            </div>
          )}

          {/* ── Test-Ergebnisse ── */}
          {testResults && (
            <div className="bugfinder__results">
              {testResults.results.map((r, i) => (
                <div
                  key={i}
                  className={`bugfinder__result bugfinder__result--${r.passed ? 'pass' : 'fail'}`}
                >
                  <span className="bugfinder__result-icon">{r.passed ? '✅' : '❌'}</span>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* ── Erfolg ── */}
          {allPass && (
            <div className="bugfinder__success">
              <div className="bugfinder__success-title">🎉 Bug gefunden und behoben!</div>
              <div className="bugfinder__explanation">{ex.explanation}</div>
              {exIndex < total - 1 ? (
                <button className="bugfinder__btn bugfinder__btn--next" onClick={() => goTo(exIndex + 1)}>
                  Nächster Bug →
                </button>
              ) : (
                <div className="bugfinder__complete">🏆 Alle Bugs dieser Einheit behoben!</div>
              )}
            </div>
          )}

          {/* ── Lösung anzeigen ── */}
          {!allPass && testResults && !testResults.passed && (
            <button
              className="bugfinder__btn bugfinder__btn--solution"
              onClick={() => setShowSolution(v => !v)}
            >
              {showSolution ? '🙈 Lösung verbergen' : '👁 Lösung anzeigen'}
            </button>
          )}
          {showSolution && ex.solution && (
            <div className="bugfinder__solution-block">
              <div className="bugfinder__solution-label">✅ Musterlösung</div>
              <pre className="bugfinder__solution-code"><code>{ex.solution}</code></pre>
              <div className="bugfinder__explanation">{ex.explanation}</div>
            </div>
          )}
        </div>

        {/* ── Right: Editor ── */}
        <div className="bugfinder__right">
          <div className="bugfinder__editor-header">
            <span className="bugfinder__filename">
              {ex.category === 'js' || ex.category === 'react' ? 'script.js' : `fix.${ex.category}`}
            </span>
            <span className="bugfinder__editor-hint">✏️ Bearbeite den Code und klicke "Prüfen"</span>
          </div>
          <div className="bugfinder__editor-wrap">
            {/* Zeilennummern */}
            <div className="bugfinder__linenos" aria-hidden="true">
              {code.split('\n').map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <textarea
              ref={textRef}
              className="bugfinder__textarea"
              value={code}
              onChange={e => { setCode(e.target.value); setTestResults(null); }}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
