import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import Concept        from '../components/ui/Concept';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import CodeBlock      from '../components/ui/CodeBlock';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import BugFinder      from '../components/interactive/BugFinder';
import Quiz           from '../components/interactive/Quiz';
import { quizData }   from '../data/quizData';
import { labChapter20 } from '../data/labData';
import { bugChapter20 } from '../data/bugData';
import { fillChapter20, dragDropChapter20 } from '../data/exerciseData';
import ch20Md from '../data/md/uebung-ch20.md?raw';
import KanbanBoard from '../components/interactive/KanbanBoard';
import { kanbanChapter20 } from '../data/kanbanData';

export default function Chapter20({ onPrev, onFinish }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">25.5</span>
        <h1>React Mini-App ✨</h1>
        <p>Alles zusammenbringen: Styling, Hooks, useEffect, API &amp; Router</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <div className="check-empty">
            <p className="check-note">
              📄 Keine separaten Folien für das Mini-App-Projekt.
              Die vollständige Aufgabenstellung findest du im Tab <strong>Übung</strong>.
            </p>
          </div>
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="🚀 React Grundlagen II – Wochenrückblick">
            <p>Alle Konzepte der Woche kurz zusammengefasst – zum Nachschlagen beim Mini-App-Projekt.</p>
          </Card>

          {/* ── 25.1 Styling ────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🎨 25.1 – Styling Patterns &amp; CSS</h3>

          <div className="grid-2">
            <Concept title="CSS Module (empfohlen)">
              Dateiname: <code>.module.css</code><br />
              Import: <code>import styles from './X.module.css'</code><br />
              Verwendung: <code>{'className={styles.card}'}</code>
            </Concept>
            <Concept title="Tailwind – Utility-First" color="orange">
              Fertige Klassen direkt im JSX: <code>bg-blue-500 text-white p-4</code><br />
              Responsive: <code>md:flex</code><br />
              Hover: <code>hover:bg-blue-600</code><br />
              Keine Klassen-Interpolation!
            </Concept>
          </div>

          <CodeBlock filename="CSS Module vs. Tailwind" lang="jsx">
            <span className="cmt">{'// CSS Module:'}</span>{'\n'}
            {'<div className={styles.card}>...</div>\n\n'}
            <span className="cmt">{'// Tailwind:'}</span>{'\n'}
            {'<div className="bg-white rounded-lg shadow-md p-4">...</div>'}
          </CodeBlock>

          {/* ── 25.2 Hooks ──────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🪝 25.2 – React Hooks</h3>

          <div className="grid-2">
            <Concept title="useCallback &amp; useMemo">
              <code>useCallback</code>: stabile Funktion für memoized Kinder<br />
              <code>useMemo</code>: gecachter Berechnungswert<br />
              Beide brauchen ein <strong>Dependency Array</strong>!
            </Concept>
            <Concept title="useRef &amp; Custom Hooks" color="purple">
              <code>useRef</code>: DOM-Zugriff via <code>.current</code><br />
              Custom Hook: beginnt mit <code>use</code>, kapselt Logik<br />
              Beispiel: <code>useLocalStorage(key, init)</code>
            </Concept>
          </div>

          {/* ── 25.3 useEffect ──────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">⚡ 25.3 – useEffect &amp; API Calls</h3>

          <CodeBlock filename="Vollständiges API-Muster" lang="jsx">
            {'useEffect(() => {\n'}
            {'  const ctrl = new AbortController();\n\n'}
            {'  async function load() {\n'}
            {'    try {\n'}
            {'      setLoading(true);\n'}
            {'      const res = await fetch(url, { signal: ctrl.signal });\n'}
            {'      if (!res.ok) throw new Error(res.status);\n'}
            {'      setData(await res.json());\n'}
            {'    } catch (e) {\n'}
            {"      if (e.name !== 'AbortError') setError(e.message);\n"}
            {'    } finally { setLoading(false); }\n'}
            {'  }\n'}
            {'  load();\n'}
            {'  return () => ctrl.abort(); // Cleanup!\n'}
            {'}, [url]);'}
          </CodeBlock>

          {/* ── 25.4 Router ─────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🗺️ 25.4 – React Router</h3>

          <div className="grid-2">
            <Concept title="Routen definieren">
              <code>BrowserRouter</code> in main.jsx<br />
              <code>Routes + Route</code> in App.jsx<br />
              <code>path="*"</code> für 404-Seite
            </Concept>
            <Concept title="Navigation &amp; Parameter" color="orange">
              <code>Link to="/"</code> – kein Seiten-Reload<br />
              <code>NavLink</code> – aktives Styling<br />
              <code>{'const { id } = useParams()'}</code><br />
              <code>navigate("/ziel")</code> oder <code>navigate(-1)</code>
            </Concept>
          </div>

          {/* ── Mini-App Checkliste ──────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">✅ Mini-App Checkliste</h3>

          <Card title="Was deine Mini-App braucht">
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 6 }}>🏗️ Struktur</p>
                {[
                  'Mindestens 3 Routen (BrowserRouter)',
                  'Komponenten in src/components/',
                  'Custom Hook (useLocalStorage o.ä.)',
                  'CRUD: Erstellen + Löschen',
                ].map(t => (
                  <p key={t} style={{ fontSize: 13, marginBottom: 4 }}>✅ {t}</p>
                ))}
              </div>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 6 }}>⚡ Hooks &amp; API</p>
                {[
                  'useCallback / useMemo eingesetzt',
                  'useEffect mit Dependency Array',
                  'Loading + Error State',
                  'Kein direktes State-Mutieren',
                ].map(t => (
                  <p key={t} style={{ fontSize: 13, marginBottom: 4 }}>✅ {t}</p>
                ))}
              </div>
            </div>
          </Card>

          <hr className="div" />
          <h3 className="section-title">🚀 Zwei Wege</h3>
          <div className="grid-2">
            <Card icon="🆓" title="Weg A – Freies Thema">
              Erstelle eine App zu einem Thema deiner Wahl:
              Rezepte, Bücher, Filme, To-Dos oder eigene Idee.
              Alle technischen Kriterien müssen trotzdem erfüllt sein.
            </Card>
            <Card icon="📋" title="Weg B – Movie Wishlist">
              Folge den Sprint-Karten im Board unten Schritt für Schritt.
              Router, State, API-Fetch, Custom Hook und Styling nach Anleitung.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <FillExercise data={fillChapter20} />
          <DragDropExercise data={dragDropChapter20} />
          <Quiz questions={quizData.chapter20} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter20} labId="labChapter20" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="React Mini-App bauen" time="90–120 Min">
            <ol>
              <li>Tracke deinen Fortschritt im Sprint Board unten.</li>
              <li>Wähle <strong>Weg A</strong> (freies Thema) oder <strong>Weg B</strong> (Movie Wishlist)</li>
              <li>Richte Router ein, definiere mindestens 3 Routen</li>
              <li>Schreibe einen Custom Hook und nutze useEffect für API-Daten</li>
              <li>Schreibe eine kurze <code>README.md</code>: Was hast du gebaut? Welche Hooks verwendest du?</li>
            </ol>
          </TaskBox>
          <KanbanBoard data={kanbanChapter20} />
          <MarkdownViewer content={ch20Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter20} />}
      />

      <PageNav
        prevLabel="← React Router"
        onPrev={onPrev}
        onFinish={onFinish}
      />
    </div>
  );
}
