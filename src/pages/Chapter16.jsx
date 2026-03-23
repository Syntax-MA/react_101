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
import { labChapter16 } from '../data/labData';
import { bugChapter16 } from '../data/bugData';
import { fillChapter16, dragDropChapter16 } from '../data/exerciseData';
import ch16Md from '../data/md/uebung-ch16.md?raw';

export default function Chapter16({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">25.1</span>
        <h1>Styling Patterns &amp; CSS</h1>
        <p>index.css, App.css, CSS Module &amp; Tailwind – vier Wege, React-Komponenten zu stylen</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={16} total={23} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="🎨 Vier Styling-Ansätze in React">
            <p>React gibt dir keine Styling-Lösung vor – du wählst den Ansatz, der am besten passt.</p>
          </Card>

          {/* ── index.css ───────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🌍 index.css – globale Basis</h3>

          <div className="grid-2">
            <Concept title="Wann verwenden?">
              Reset-Styles, Schriften, CSS-Variablen und Basis-Regeln, die für die <em>gesamte App</em> gelten sollen.
            </Concept>
            <Concept title="Achtung" color="orange">
              Alles in <code>index.css</code> ist global – Klassen können sich überschreiben.
              Nur für App-weite Defaults verwenden.
            </Concept>
          </div>

          <CodeBlock filename="src/index.css" lang="css">
            <span className="cmt">{'/* Globale Basis – gilt für die gesamte App */'}</span>{'\n'}
            {':root {\n'}
            {'  --color-primary: #667eea;\n'}
            {'  --font-base: "Inter", sans-serif;\n'}
            {'}\n\n'}
            {'* { box-sizing: border-box; margin: 0; padding: 0; }\n\n'}
            {'body {\n'}
            {'  font-family: var(--font-base);\n'}
            {'  background: #f9fafb;\n'}
            {'}'}
          </CodeBlock>

          {/* ── App.css ─────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">⚠️ App.css – täuschend lokal</h3>

          <Concept title="Die häufigste Verwechslung" color="orange">
            <code>App.css</code> wird in <code>App.jsx</code> importiert – wirkt aber <strong>global</strong>!
            Vite bundelt alle importierten CSS-Dateien ohne Scoping zusammen.
            Klassen wie <code>.card</code> aus App.css gelten für <em>alle</em> Komponenten.
          </Concept>

          <CodeBlock filename="App.jsx" lang="jsx">
            {'import "./App.css";   '}<span className="cmt">{'// ACHTUNG: wirkt global!'}</span>{'\n\n'}
            {'export default function App() {\n'}
            {'  return <div className="app-wrapper">...</div>;\n'}
            {'}'}
          </CodeBlock>

          {/* ── CSS Module ──────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔒 CSS Module – lokaler Scope</h3>

          <div className="grid-2">
            <Concept title="Wie es funktioniert">
              Dateiname endet auf <code>.module.css</code>. Vite generiert automatisch
              eindeutige Klassen-Hashes – z. B. <code>Card_card__xK3a2</code>.
            </Concept>
            <Concept title="Import &amp; Verwendung" color="purple">
              <code>{'import styles from "./Card.module.css"'}</code><br />
              Dann: <code>{'className={styles.card}'}</code> – niemals als String!
            </Concept>
          </div>

          <CodeBlock filename="Card.module.css" lang="css">
            <span className="cmt">{'/* Nur gültig für die importierende Komponente */'}</span>{'\n'}
            {'.card {\n'}
            {'  background: white;\n'}
            {'  border-radius: 8px;\n'}
            {'  box-shadow: 0 2px 8px rgba(0,0,0,.1);\n'}
            {'  padding: 16px;\n'}
            {'}\n\n'}
            {'.title {\n'}
            {'  font-size: 1.2rem;\n'}
            {'  font-weight: 600;\n'}
            {'}'}
          </CodeBlock>

          <CodeBlock filename="Card.jsx" lang="jsx">
            {'import styles from "./Card.module.css";  '}<span className="cmt">{'// Objekt mit Klassen'}</span>{'\n\n'}
            {'function Card({ title, children }) {\n'}
            {'  return (\n'}
            {'    <div className={styles.card}>   '}<span className="cmt">{'// Hash-Klasse wird generiert'}</span>{'\n'}
            {'      <h2 className={styles.title}>{title}</h2>\n'}
            {'      {children}\n'}
            {'    </div>\n'}
            {'  );\n'}
            {'}'}
          </CodeBlock>

          <Concept title="Dynamische Klassen kombinieren" color="purple">
            {'Mehrere Klassen: '}<code>{'className={`${styles.card} ${isActive ? styles.active : ""}`}'}</code>
            {'. Oder mit dem '}<code>clsx</code>{'-Paket für komplexere Fälle.'}
          </Concept>

          {/* ── Tailwind ────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">💨 Tailwind CSS – Utility-First</h3>

          <div className="grid-2">
            <Concept title="Das Prinzip">
              Kein eigenes CSS schreiben – stattdessen vorgefertigte Utility-Klassen
              direkt im JSX kombinieren. Tailwind nimmt nur verwendete Klassen ins Bundle auf.
            </Concept>
            <Concept title="Wichtige Kategorien" color="orange">
              Farben: <code>bg-blue-500</code>, <code>text-white</code><br />
              Abstände: <code>p-4</code>, <code>mt-2</code>, <code>gap-6</code><br />
              Größen: <code>w-full</code>, <code>max-w-md</code><br />
              Ecken: <code>rounded-lg</code>, <code>rounded-full</code>
            </Concept>
          </div>

          <CodeBlock filename="Button.jsx (mit Tailwind)" lang="jsx">
            {'function Button({ label, variant = "primary" }) {\n'}
            {'  const base = "px-4 py-2 rounded-lg font-semibold transition-colors";\n'}
            {'  const variants = {\n'}
            {'    primary: "bg-blue-600 text-white hover:bg-blue-700",\n'}
            {'    danger:  "bg-red-500  text-white hover:bg-red-600",\n'}
            {'  };\n'}
            {'  return (\n'}
            {'    <button className={`${base} ${variants[variant]}`}>\n'}
            {'      {label}\n'}
            {'    </button>\n'}
            {'  );\n'}
            {'}'}
          </CodeBlock>

          <CodeBlock filename="Tailwind Responsive & Hover" lang="jsx">
            <span className="cmt">{'// Responsive: mobile zuerst, dann md: (768px+)'}</span>{'\n'}
            {'<div className="flex flex-col md:flex-row gap-4">\n\n'}
            <span className="cmt">{'// Hover-Effekt:'}</span>{'\n'}
            {'<button className="bg-gray-100 hover:bg-gray-200">\n\n'}
            <span className="cmt">{'// Wichtig: KEINE Klassen-Interpolation!'}</span>{'\n'}
            <span className="cmt">{'// ❌ FALSCH: `bg-${color}-500`'}</span>{'\n'}
            <span className="cmt">{'// ✅ RICHTIG: vollständige Klassen im Objekt:'}</span>{'\n'}
            {'const cls = { red: "bg-red-500", blue: "bg-blue-500" };'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📊 Vergleich auf einen Blick</h3>

          <div className="grid-2">
            <Card icon="🌍" title="Globales CSS (index.css / App.css)">
              + Einfach, überall verfügbar<br />
              – Klassen-Konflikte bei großen Apps<br />
              Ideal für: Reset, Variablen, App-Layout
            </Card>
            <Card icon="🔒" title="CSS Module">
              + Lokaler Scope, keine Konflikte<br />
              + Normale CSS-Syntax<br />
              Ideal für: Komponenten-Styling
            </Card>
          </div>
          <div className="grid-2" style={{ marginTop: 8 }}>
            <Card icon="💨" title="Tailwind CSS">
              + Schnelles Prototyping<br />
              + Kein CSS-File nötig<br />
              – Klassen nicht interpolierbar
            </Card>
            <Card icon="💡" title="In der Praxis">
              Projekte kombinieren oft alle drei:
              index.css für Basis, Tailwind für UI,
              CSS Module für komplexe Komponenten.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <FillExercise data={fillChapter16} />
          <DragDropExercise data={dragDropChapter16} />
          <Quiz questions={quizData.chapter16} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter16} labId="labChapter16" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Styling Patterns ausprobieren" time="45–60 Min">
            <ol>
              <li>Erstelle eine Komponente mit CSS Modul (<code>.module.css</code>)</li>
              <li>Gestalte eine zweite Komponente mit Tailwind-Klassen</li>
              <li>Implementiere dynamisches Styling (Bedingung ändert Klassen)</li>
              <li>Prüfe im DevTools, dass CSS Module gehashte Klassenamen generiert</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch16Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter16} />}
      />

      <PageNav
        prevLabel="← React Listen &amp; Rendering"
        nextLabel="Weiter: React Hooks →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
