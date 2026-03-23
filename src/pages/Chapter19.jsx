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
import { labChapter19 } from '../data/labData';
import { bugChapter19 } from '../data/bugData';
import { fillChapter19, dragDropChapter19 } from '../data/exerciseData';
import ch19Md from '../data/md/uebung-ch19.md?raw';

export default function Chapter19({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">25.4</span>
        <h1>React Router</h1>
        <p>BrowserRouter, Routes, Route, Link, NavLink, useParams &amp; useNavigate</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={19} total={17} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="🗺️ React Router v6">
            <p>
              React selbst hat kein Routing. <code>react-router-dom</code> ist die
              Standard-Bibliothek für Multi-Page-Feeling in Single-Page-Apps.
            </p>
          </Card>

          {/* ── Setup ───────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">⚙️ Installation &amp; Setup</h3>

          <CodeBlock filename="Installation & main.jsx" lang="bash">
            {'npm install react-router-dom\n\n'}
            {'# In main.jsx BrowserRouter einbinden:'}
          </CodeBlock>

          <CodeBlock filename="main.jsx" lang="jsx">
            {"import { BrowserRouter } from 'react-router-dom';\n\n"}
            {"ReactDOM.createRoot(document.getElementById('root')).render(\n"}
            {'  <BrowserRouter>\n'}
            {'    <App />\n'}
            {'  </BrowserRouter>\n'}
            {');'}
          </CodeBlock>

          {/* ── Routes & Route ──────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🛤️ Routes &amp; Route</h3>

          <div className="grid-2">
            <Concept title="Routes – der Container">
              Wählt immer nur die <em>erste passende</em> Route aus.
              Alle <code>Route</code>-Elemente müssen in einem <code>Routes</code>-Container stehen.
            </Concept>
            <Concept title="Route – einzelne Seite" color="orange">
              <code>path</code> ist das URL-Muster, <code>element</code> ist die Komponente.
              <code>:id</code> ist ein Parameter-Segment.
              <code>*</code> als Wildcard für 404-Seiten.
            </Concept>
          </div>

          <CodeBlock filename="App.jsx – Routen definieren" lang="jsx">
            {"import { Routes, Route } from 'react-router-dom';\n\n"}
            {'function App() {\n'}
            {'  return (\n'}
            {'    <Routes>\n'}
            {'      <Route path="/"           element={<HomePage />} />\n'}
            {'      <Route path="/about"      element={<AboutPage />} />\n'}
            {'      <Route path="/users"      element={<UsersPage />} />\n'}
            {'      <Route path="/users/:id"  element={<UserDetail />} />\n'}
            {'      <Route path="*"           element={<NotFoundPage />} />\n'}
            {'    </Routes>\n'}
            {'  );\n'}
            {'}'}
          </CodeBlock>

          {/* ── Link & NavLink ──────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔗 Link &amp; NavLink</h3>

          <div className="grid-2">
            <Concept title="Link – kein Seiten-Reload">
              Ersetzt normale <code>{'<a href>'}</code>-Tags für interne Links.
              Aktualisiert nur die URL im Browser-History – kein HTTP-Request.
            </Concept>
            <Concept title="NavLink – aktiv-Styling" color="purple">
              Wie <code>Link</code>, aber fügt automatisch eine <code>active</code>-Klasse
              hinzu, wenn die Route aktiv ist. Ideal für Navigationsleisten.
            </Concept>
          </div>

          <CodeBlock filename="Navbar.jsx" lang="jsx">
            {"import { Link, NavLink } from 'react-router-dom';\n\n"}
            {'function Navbar() {\n'}
            {'  return (\n'}
            {'    <nav>\n'}
            {'      {/* Einfacher Link: */}\n'}
            {'      <Link to="/">Home</Link>\n\n'}
            {'      {/* NavLink mit aktivem Styling: */}\n'}
            {'      <NavLink\n'}
            {'        to="/about"\n'}
            {'        className={({ isActive }) => isActive ? "nav-active" : ""}\n'}
            {'      >\n'}
            {'        Über uns\n'}
            {'      </NavLink>\n'}
            {'    </nav>\n'}
            {'  );\n'}
            {'}'}
          </CodeBlock>

          <Concept title="Wichtig: niemals {'<a href>'} für interne Links!" color="orange">
            Ein normales <code>{'<a href="/">'}</code> löst einen vollständigen Seiten-Reload aus –
            React-State geht verloren. Immer <code>{'<Link to="/">'}</code> verwenden.
          </Concept>

          {/* ── useParams ───────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🔑 useParams – URL-Parameter lesen</h3>

          <CodeBlock filename="UserDetail.jsx" lang="jsx">
            {"import { useParams } from 'react-router-dom';\n\n"}
            {'function UserDetail() {\n'}
            {'  const { id } = useParams(); // ← Destructuring!\n'}
            {'  // id entspricht :id in der Route\n\n'}
            {'  const [user, setUser] = useState(null);\n\n'}
            {'  useEffect(() => {\n'}
            {'    async function load() {\n'}
            {'      const res = await fetch(`/api/users/${id}`);\n'}
            {'      setUser(await res.json());\n'}
            {'    }\n'}
            {'    load();\n'}
            {'  }, [id]);\n\n'}
            {'  return <h1>{user?.name}</h1>;\n'}
            {'}'}
          </CodeBlock>

          {/* ── useNavigate ─────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🧭 useNavigate – programmatische Navigation</h3>

          <CodeBlock filename="Programmatische Navigation" lang="jsx">
            {"import { useNavigate } from 'react-router-dom';\n\n"}
            {'function LoginForm() {\n'}
            {'  const navigate = useNavigate();\n\n'}
            {'  async function handleSubmit(e) {\n'}
            {'    e.preventDefault();\n'}
            {'    await loginUser(formData);\n'}
            {'    navigate("/dashboard"); // ← nach Login weiterleiten\n'}
            {'  }\n\n'}
            {'  function handleBack() {\n'}
            {'    navigate(-1); // ← wie Browser-Zurück-Button\n'}
            {'  }\n\n'}
            {'  return <form onSubmit={handleSubmit}>...</form>;\n'}
            {'}'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📊 Router-Komponenten auf einen Blick</h3>

          <div className="grid-2">
            <Card icon="🌐" title="BrowserRouter">
              Einmalig in <code>main.jsx</code> – gibt Router-Kontext für die gesamte App.
            </Card>
            <Card icon="📋" title="Routes + Route">
              <code>Routes</code> = Container, wählt nur eine Route aus.
              <code>Route path element</code> = Seiten-Definition.
            </Card>
          </div>
          <div className="grid-2" style={{ marginTop: 8 }}>
            <Card icon="🔗" title="Link / NavLink">
              Interne Navigation ohne Reload. NavLink hat aktives Styling.
            </Card>
            <Card icon="🔑" title="useParams / useNavigate">
              URL-Parameter lesen vs. programmatisch navigieren.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <FillExercise data={fillChapter19} />
          <DragDropExercise data={dragDropChapter19} />
          <Quiz questions={quizData.chapter19} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter19} labId="labChapter19" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="React Router einbauen" time="45–60 Min">
            <ol>
              <li>Installiere <code>react-router-dom</code> und binde <code>BrowserRouter</code> in main.jsx ein</li>
              <li>Definiere mindestens 3 Routen inkl. einer 404-Route</li>
              <li>Erstelle eine Navbar mit <code>NavLink</code> und aktivem Styling</li>
              <li>Nutze <code>useParams</code> für eine Detail-Seite</li>
              <li>Navigiere programmatisch mit <code>useNavigate</code></li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch19Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter19} />}
      />

      <PageNav
        prevLabel="← useEffect &amp; API"
        nextLabel="Weiter: React Mini-App →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
