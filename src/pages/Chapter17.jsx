import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import Concept        from '../components/ui/Concept';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import CodeBlock      from '../components/ui/CodeBlock';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import SlideCarousel  from '../components/ui/SlideCarousel';
import CodeLab        from '../components/interactive/CodeLab';
import BugFinder      from '../components/interactive/BugFinder';
import Quiz           from '../components/interactive/Quiz';
import { quizData }   from '../data/quizData';
import { labChapter17 } from '../data/labData';
import { bugChapter17 } from '../data/bugData';
import { fillChapter17, dragDropChapter17 } from '../data/exerciseData';
import ch17Md from '../data/md/uebung-ch17.md?raw';

export default function Chapter17({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">25.2</span>
        <h1>React Hooks</h1>
        <p>useCallback, useMemo, useRef &amp; Custom Hooks – Performance und Wiederverwendbarkeit</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={17} total={17} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="🪝 Erweiterte React Hooks">
            <p>Über <code>useState</code> hinaus gibt es Hooks für Performance-Optimierung,
            DOM-Zugriff und wiederverwendbare Logik.</p>
          </Card>

          {/* ── useCallback ─────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔁 useCallback – stabile Funktionen</h3>

          <div className="grid-2">
            <Concept title="Das Problem ohne useCallback">
              Bei jedem Re-Render wird eine <em>neue</em> Funktionsreferenz erstellt.
              Child-Komponenten mit <code>React.memo</code> rendern trotzdem neu, weil
              die Prop sich geändert hat (andere Referenz).
            </Concept>
            <Concept title="Die Lösung" color="purple">
              <code>useCallback</code> gibt immer dieselbe Funktionsreferenz zurück –
              solange sich die Abhängigkeiten nicht ändern.
            </Concept>
          </div>

          <CodeBlock filename="useCallback – Syntax" lang="jsx">
            <span className="cmt">{'// ❌ Ohne useCallback: neue Referenz bei jedem Render'}</span>{'\n'}
            {'const handleClick = () => setCount(c => c + 1);\n\n'}
            <span className="cmt">{'// ✅ Mit useCallback: stabile Referenz'}</span>{'\n'}
            {'const handleClick = useCallback(\n'}
            {'  () => setCount(c => c + 1),\n'}
            {'  []  // Deps: leer = nie neu erstellen\n'}
            {');\n\n'}
            <span className="cmt">{'// Mit Abhängigkeit:'}</span>{'\n'}
            {'const fetchUser = useCallback(\n'}
            {'  () => fetch(`/api/users/${userId}`),\n'}
            {'  [userId]  // Neu wenn userId sich ändert\n'}
            {');'}
          </CodeBlock>

          {/* ── useMemo ─────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">💾 useMemo – Berechnungen cachen</h3>

          <div className="grid-2">
            <Concept title="Wann sinnvoll?">
              Bei teuren Berechnungen (z. B. großes Array filtern/sortieren),
              die sich nur ändern sollen, wenn bestimmte Daten sich ändern.
            </Concept>
            <Concept title="Rückgabewert" color="orange">
              <code>useMemo</code> gibt den <em>berechneten Wert</em> zurück – nicht die Funktion!
              Das ist der Unterschied zu <code>useCallback</code>.
            </Concept>
          </div>

          <CodeBlock filename="useMemo – Syntax" lang="jsx">
            <span className="cmt">{'// ❌ Ohne useMemo: filtert bei JEDEM Render'}</span>{'\n'}
            {'const filtered = todos.filter(t => t.done);\n\n'}
            <span className="cmt">{'// ✅ Mit useMemo: nur neu wenn todos oder showDone sich ändern'}</span>{'\n'}
            {'const filtered = useMemo(\n'}
            {'  () => todos.filter(t => t.done === showDone),\n'}
            {'  [todos, showDone]\n'}
            {'  // ↑ Dependency Array: Wann neu berechnen?\n'}
            {');\n\n'}
            <span className="cmt">{'// WICHTIG: return nicht vergessen!'}</span>{'\n'}
            {'const sum = useMemo(() => {\n'}
            {'  const result = numbers.reduce((a, b) => a + b, 0);\n'}
            {'  return result;  // explizites return nötig!\n'}
            {'}, [numbers]);'}
          </CodeBlock>

          {/* ── useRef ──────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">📌 useRef – DOM &amp; Instanzvariablen</h3>

          <div className="grid-2">
            <Concept title="Zwei Anwendungsfälle">
              1. <strong>DOM-Zugriff</strong>: Ref an ein JSX-Element heften, dann per
              <code>.current</code> das DOM-Objekt ansprechen.<br />
              2. <strong>Instanzvariable</strong>: Wert speichern, ohne Re-Render auszulösen.
            </Concept>
            <Concept title="Der Schlüssel: .current" color="purple">
              Refs haben immer eine <code>.current</code>-Eigenschaft.
              Das ist das DOM-Element oder der gespeicherte Wert.
              Kein <code>.value</code>, kein direkter Zugriff!
            </Concept>
          </div>

          <CodeBlock filename="useRef – Syntax" lang="jsx">
            {'import { useRef } from "react";\n\n'}
            {'function FocusInput() {\n'}
            {'  const inputRef = useRef(null); // null = kein initialer Wert\n\n'}
            {'  function handleClick() {\n'}
            {'    inputRef.current.focus(); // ✅ DOM-Methode aufrufen\n'}
            {'    // inputRef.value.focus() ❌ FALSCH!\n'}
            {'  }\n\n'}
            {'  return (\n'}
            {'    <>\n'}
            {'      <input ref={inputRef} type="text" />\n'}
            {'      <button onClick={handleClick}>Fokus</button>\n'}
            {'    </>\n'}
            {'  );\n'}
            {'}'}
          </CodeBlock>

          <CodeBlock filename="useRef als Instanzvariable" lang="jsx">
            {'function Timer() {\n'}
            {'  const renderCount = useRef(0); // kein useState!\n\n'}
            {'  renderCount.current += 1; // kein Re-Render!\n\n'}
            {'  return <p>Renders: {renderCount.current}</p>;\n'}
            {'  // ABER: dieser Wert wird im JSX nicht aktualisiert\n'}
            {'  // useRef löst KEIN Re-Render aus\n'}
            {'}'}
          </CodeBlock>

          {/* ── Custom Hooks ────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔧 Custom Hooks – Logik kapseln</h3>

          <div className="grid-2">
            <Concept title="Was ist ein Custom Hook?">
              Eine normale JavaScript-Funktion, die mit <strong>use</strong> beginnt und
              andere Hooks aufruft. Damit lässt sich Logik aus Komponenten extrahieren
              und wiederverwenden.
            </Concept>
            <Concept title="Namens-Konvention" color="orange">
              Custom Hooks <strong>müssen</strong> mit <code>use</code> beginnen –
              z. B. <code>useLocalStorage</code>, <code>useFetch</code>, <code>useDebounce</code>.
              Nur so prüft ESLint die Hook-Regeln korrekt.
            </Concept>
          </div>

          <CodeBlock filename="useLocalStorage.js" lang="jsx">
            {'import { useState } from "react";\n\n'}
            {'function useLocalStorage(key, initialValue) {\n'}
            {'  const stored = localStorage.getItem(key);\n'}
            {'  const [value, setValue] = useState(\n'}
            {'    stored ? JSON.parse(stored) : initialValue\n'}
            {'  );\n\n'}
            {'  function setAndStore(newValue) {\n'}
            {'    setValue(newValue);\n'}
            {'    localStorage.setItem(key, JSON.stringify(newValue));\n'}
            {'  }\n\n'}
            {'  return [value, setAndStore]; // wie useState!\n'}
            {'}\n\n'}
            {'// Verwendung:\n'}
            {'const [theme, setTheme] = useLocalStorage("theme", "light");'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📊 Hook-Vergleich</h3>

          <div className="grid-2">
            <Card icon="🔁" title="useCallback">
              Cached <em>Funktion</em><br />
              Gibt die <strong>Funktion</strong> zurück<br />
              Nutzen: stabile Prop-Callbacks
            </Card>
            <Card icon="💾" title="useMemo">
              Cached <em>Wert</em><br />
              Gibt den <strong>berechneten Wert</strong> zurück<br />
              Nutzen: teure Berechnungen
            </Card>
          </div>
          <div className="grid-2" style={{ marginTop: 8 }}>
            <Card icon="📌" title="useRef">
              Speichert Wert <em>ohne Re-Render</em><br />
              Zugriff immer über <code>.current</code><br />
              Nutzen: DOM, Timers, Counter
            </Card>
            <Card icon="🔧" title="Custom Hook">
              Extrahiert wiederverwendbare Logik<br />
              Beginnt mit <code>use</code><br />
              Nutzen: localStorage, fetch, debounce
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <FillExercise data={fillChapter17} />
          <DragDropExercise data={dragDropChapter17} />
          <Quiz questions={quizData.chapter17} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter17} labId="labChapter17" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="React Hooks implementieren" time="45–60 Min">
            <ol>
              <li>Wrape eine Handler-Funktion mit <code>useCallback</code></li>
              <li>Cache eine gefilterte Liste mit <code>useMemo</code></li>
              <li>Setze DOM-Fokus mit <code>useRef</code></li>
              <li>Schreibe deinen ersten Custom Hook <code>useLocalStorage</code></li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch17Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter17} />}
      />

      <PageNav
        prevLabel="← Styling &amp; CSS"
        nextLabel="Weiter: useEffect &amp; API →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
