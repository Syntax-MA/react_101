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
import { labChapter18 } from '../data/labData';
import { bugChapter18 } from '../data/bugData';
import { fillChapter18, dragDropChapter18 } from '../data/exerciseData';
import ch18Md from '../data/md/uebung-ch18.md?raw';

export default function Chapter18({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">25.3</span>
        <h1>useEffect &amp; API Calls</h1>
        <p>Lifecycle-Effekte, Dependency-Array, fetch mit async/await &amp; AbortController</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={18} total={23} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="⚡ useEffect – Seiteneffekte in React">
            <p>
              Alles, was außerhalb des Renders passiert – API-Calls, Timer, Event-Listener – gehört in <code>useEffect</code>.
            </p>
          </Card>

          {/* ── Syntax ──────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔧 Grundlegende Syntax</h3>

          <CodeBlock filename="useEffect – Grundsyntax" lang="jsx">
            {'import { useEffect } from "react";\n\n'}
            {'useEffect(\n'}
            {'  () => {           // ← Effekt-Funktion\n'}
            {'    // Seiteneffekt hier\n'}
            {'    return () => {  // ← Cleanup (optional)\n'}
            {'      // Aufräumen\n'}
            {'    };\n'}
            {'  },\n'}
            {'  [dependencies]   // ← Dependency Array\n'}
            {');'}
          </CodeBlock>

          {/* ── Dependency Array ────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">📋 Die drei Dependency-Varianten</h3>

          <div className="grid-2">
            <Concept title="[] – leeres Array">
              Effekt läuft <strong>einmal</strong> nach dem ersten Render (Mount).
              Ideal für einmaligen Datenfetch beim Öffnen einer Seite.
            </Concept>
            <Concept title="[var1, var2] – mit Werten" color="orange">
              Effekt läuft beim Mount <em>und</em> jedes Mal wenn sich eine der
              genannten Variablen ändert. Standard für abhängige Fetches.
            </Concept>
          </div>

          <Concept title="(kein Array) – kein Dependency Array" color="orange">
            Effekt läuft nach <strong>jedem Render</strong>! Fast immer unerwünscht –
            kann zu Endlosschleifen führen wenn der Effekt State ändert.
          </Concept>

          <CodeBlock filename="Drei Varianten im Vergleich" lang="jsx">
            <span className="cmt">{'// 1. Einmal beim Mount:'}</span>{'\n'}
            {'useEffect(() => { fetchUsers(); }, []);\n\n'}
            <span className="cmt">{'// 2. Bei Änderung von userId:'}</span>{'\n'}
            {'useEffect(() => { fetchUser(userId); }, [userId]);\n\n'}
            <span className="cmt">{'// 3. Nach jedem Render (selten gewünscht!):'}</span>{'\n'}
            {'useEffect(() => { console.log("render"); });'}
          </CodeBlock>

          {/* ── async/await Pattern ─────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🌐 async/await im useEffect</h3>

          <Concept title="Warum nicht direkt async?" color="orange">
            <code>useEffect(async () =&gt; {})</code> ist falsch! Eine async-Funktion gibt
            ein Promise zurück – useEffect erwartet aber entweder <code>undefined</code>
            oder eine <strong>Cleanup-Funktion</strong>. Ein Promise ist keine Cleanup-Funktion.
          </Concept>

          <CodeBlock filename="Das korrekte Pattern" lang="jsx">
            {'useEffect(() => {\n'}
            <span className="cmt">{'  // ✅ Innere async-Funktion:'}</span>{'\n'}
            {'  async function fetchData() {\n'}
            {'    try {\n'}
            {'      const res = await fetch(url);\n'}
            {'      if (!res.ok) throw new Error("HTTP " + res.status);\n'}
            {'      const data = await res.json();\n'}
            {'      setData(data);\n'}
            {'    } catch (err) {\n'}
            {'      setError(err.message);\n'}
            {'    } finally {\n'}
            {'      setLoading(false); // immer ausführen\n'}
            {'    }\n'}
            {'  }\n\n'}
            {'  fetchData(); // sofort aufrufen\n'}
            {'}, [url]);     // url als Dependency'}
          </CodeBlock>

          {/* ── Loading/Error State ─────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔄 Loading &amp; Error State</h3>

          <CodeBlock filename="Vollständiges Fetch-Muster" lang="jsx">
            {'function UserList() {\n'}
            {'  const [users, setUsers]     = useState([]);\n'}
            {'  const [loading, setLoading] = useState(true);\n'}
            {'  const [error, setError]     = useState(null);\n\n'}
            {'  useEffect(() => {\n'}
            {'    async function load() {\n'}
            {'      try {\n'}
            {'        const res  = await fetch("/api/users");\n'}
            {'        if (!res.ok) throw new Error(res.status);\n'}
            {'        const data = await res.json();\n'}
            {'        setUsers(data);\n'}
            {'      } catch (e) {\n'}
            {'        setError(e.message);\n'}
            {'      } finally {\n'}
            {'        setLoading(false);\n'}
            {'      }\n'}
            {'    }\n'}
            {'    load();\n'}
            {'  }, []);\n\n'}
            {'  if (loading) return <p>Wird geladen...</p>;\n'}
            {'  if (error)   return <p style={{color:"red"}}>{error}</p>;\n'}
            {'  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n'}
            {'}'}
          </CodeBlock>

          {/* ── AbortController ─────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🛑 AbortController – sauberes Cleanup</h3>

          <div className="grid-2">
            <Concept title="Das Problem">
              Wenn eine Komponente unmountet, während ein Fetch läuft,
              versucht der Callback trotzdem noch <code>setState</code> aufzurufen –
              auf einer nicht mehr existierenden Komponente.
            </Concept>
            <Concept title="Die Lösung" color="purple">
              <code>AbortController</code> bricht den laufenden Request ab.
              In der Cleanup-Funktion: <code>controller.abort()</code>.
              Abgebrochene Requests werfen <code>AbortError</code> – diesen ignorieren.
            </Concept>
          </div>

          <CodeBlock filename="AbortController Muster" lang="jsx">
            {'useEffect(() => {\n'}
            {'  const controller = new AbortController();\n\n'}
            {'  async function fetchUser() {\n'}
            {'    try {\n'}
            {'      const res = await fetch(\n'}
            {'        `/api/users/${userId}`,\n'}
            {'        { signal: controller.signal } // ← signal übergeben\n'}
            {'      );\n'}
            {'      const data = await res.json();\n'}
            {'      setUser(data);\n'}
            {'    } catch (err) {\n'}
            {"      if (err.name === 'AbortError') return; // ignorieren\n"}
            {'      setError(err.message);\n'}
            {'    }\n'}
            {'  }\n'}
            {'  fetchUser();\n\n'}
            {'  return () => controller.abort(); // ← Cleanup!\n'}
            {'}, [userId]);'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📊 Zusammenfassung useEffect</h3>

          <div className="grid-2">
            <Card icon="⚡" title="Wann useEffect?">
              API-Calls, Timer (setInterval), Event-Listener auf window/document,
              externe Library initialisieren, localStorage synchronisieren.
            </Card>
            <Card icon="🧹" title="Cleanup immer?">
              Bei Event-Listenern und Subscriptions immer!
              Bei einfachem fetch mit AbortController empfohlen.
              Timer mit <code>clearInterval</code> aufräumen.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <FillExercise data={fillChapter18} />
          <DragDropExercise data={dragDropChapter18} />
          <Quiz questions={quizData.chapter18} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter18} labId="labChapter18" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="useEffect &amp; API Calls üben" time="45–60 Min">
            <ol>
              <li>Lade Daten beim Mount mit korrektem Dependency Array <code>[]</code></li>
              <li>Füge Loading- und Error-State hinzu</li>
              <li>Implementiere abhängigen Fetch mit <code>[userId]</code></li>
              <li>Füge einen AbortController für sauberes Cleanup hinzu</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch18Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter18} />}
      />

      <PageNav
        prevLabel="← React Hooks"
        nextLabel="Weiter: React Router →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
