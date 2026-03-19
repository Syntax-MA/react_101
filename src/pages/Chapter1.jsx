import CodeBlock      from '../components/ui/CodeBlock';
import Card           from '../components/ui/Card';
import GlossarTerm   from '../components/ui/GlossarTerm';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import SlideCarousel  from '../components/ui/SlideCarousel';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import BugFinder      from '../components/interactive/BugFinder';
import Quiz           from '../components/interactive/Quiz';
import { quizData }    from '../data/quizData';
import { labChapter1 }   from '../data/labData';
import { bugChapter1 }   from '../data/bugData';
import { fillChapter1, dragDropChapter1 } from '../data/exerciseData';
import ch1Md from '../data/md/uebung-ch1.md?raw';

export default function Chapter1({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">24.1</span>
        <h1>React Setup &amp; JSX</h1>
        <p>Projekterstellung mit Vite, Dateistruktur, NPM-Scripts und erste JSX-Grundlagen</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={1} total={50} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <div className="concept concept--react">
            <h4 className="concept-title">Vite – das Build-Tool</h4>
            <div className="concept-body">
              <p>
                Wir nutzen <GlossarTerm term="Vite"><strong>Vite</strong></GlossarTerm> (frz. „schnell"), um <GlossarTerm term="React">React</GlossarTerm>-Projekte zu generieren und
                zu entwickeln. Es ersetzt das ältere <code>create-react-app</code> und ist erheblich
                schneller.
              </p>
            </div>
          </div>

          <CodeBlock filename="Terminal – Projekt erstellen" lang="bash">
            <span className="cmt"># 1. Im Ordner ~/Git ausführen:</span>{'\n'}
            <span className="fn">npm</span> create vite@latest mein-projekt{'\n'}
            <span className="cmt">#   → Framework: React | Variant: JavaScript</span>{'\n\n'}
            <span className="cmt"># 2. Abhängigkeiten installieren &amp; starten:</span>{'\n'}
            <span className="kw">cd</span> mein-projekt{'\n'}
            <span className="fn">npm</span> install{'\n'}
            <span className="fn">npm</span> run dev
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📂 Projektstruktur</h3>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="tbl">
              <thead>
                <tr><th>Datei / Ordner</th><th>Zweck</th></tr>
              </thead>
              <tbody>
                {[
                  ['index.html',     'Grundgerüst – enthält <div id="root">'],
                  ['src/main.jsx',   'Einstiegspunkt – verbindet React mit #root'],
                  ['src/App.jsx',    'Hauptkomponente – liefert JSX zurück'],
                  ['src/App.css',    'CSS für die App-Komponente'],
                  ['src/index.css',  'Globales Styling'],
                  ['src/assets/',    'Bilder, SVGs (Kern der App)'],
                  ['public/',        'Öffentliche Dateien, nicht gebündelt'],
                  ['package.json',   'Metadaten, Scripts & Abhängigkeiten'],
                  ['node_modules/',  'Pakete – nie manuell anfassen!'],
                  ['vite.config.js', 'Build-Konfiguration'],
                  ['.gitignore',     'Git-Ausschlüsse (u.a. node_modules)'],
                ].map(([file, desc]) => (
                  <tr key={file}>
                    <td className="fname">{file}</td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="div" />
          <h3 className="section-title">⚡ NPM Scripts</h3>
          <div className="grid-2">
            <Card icon="🔧" title="npm run dev">
              Entwicklungs-Server auf <code>localhost:5173</code>. Mit Hot Module Replacement.
            </Card>
            <Card icon="🏗️" title="npm run build">
              Optimierter Production-Build in <code>/dist</code>. Alle JSX-Dateien → HTML/CSS/JS.
            </Card>
            <Card icon="👁️" title="npm run preview">
              Den letzten Production-Build lokal vorschauen.
            </Card>
            <Card icon="🔍" title="npm run lint">
              ESLint prüft Code auf Syntax- &amp; Stilfehler.
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">🧩 <GlossarTerm term="JSX">JSX</GlossarTerm>-Grundregeln</h3>
          <div className="grid-2">
            <Card icon="1️⃣" title="Ein Wurzelelement">
              JSX braucht immer ein einziges Root-Tag. Nutze <code>&lt;div&gt;</code> oder ein Fragment <code>&lt;&gt;&lt;/&gt;</code>.
            </Card>
            <Card icon="🎨" title="className statt class">
              HTML-Attribut <code>class</code> heißt in JSX <code>className</code>, da <code>class</code> ein JS-Schlüsselwort ist.
            </Card>
            <Card icon="🔧" title="Selbstschließende Tags">
              <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code> usw. müssen in JSX selbstschließend sein.
            </Card>
            <Card icon="🐪" title="camelCase Events">
              <code>onclick</code> → <code>onClick</code>, <code>onsubmit</code> → <code>onSubmit</code> usw.
            </Card>
          </div>

          <CodeBlock filename="JSX – Ausdrücke mit {}" lang="JSX">
            <span className="kw">function</span>{' '}<span className="fn">Greeting</span>{'() {'}{'\n'}
            {'  '}<span className="kw">const</span>{' '}<span className="var">name</span>{' = '}<span className="str">'Max'</span>{';'}{'\n'}
            {'  '}<span className="kw">const</span>{' '}<span className="var">age</span>{' = '}<span className="num">25</span>{';'}{'\n'}
            {'  '}<span className="kw">return</span>{' ('}{'\n'}
            {'    '}<span className="jsx">{'<div>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<h1>'}</span>Hallo {'{'}<span className="var">name</span>{'}'}<span className="jsx">{'</h1>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<p>'}</span>Nächstes Jahr: {'{'}<span className="var">age</span>{' + 1}'}<span className="jsx">{'</p>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</div>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter1} />
          <DragDropExercise data={dragDropChapter1} />
          <Quiz questions={quizData.chapter1} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter1} labId="labChapter1" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Dein erstes React-Projekt" time="15 Min">
            <ol>
              <li>Node.js installieren, Ordner <code>~/Git</code> anlegen, hinein navigieren.</li>
              <li><code>npm create vite@latest dein-name-website</code> ausführen.</li>
              <li>Framework: <strong>React → JavaScript → no rolldown</strong>, dann installieren &amp; starten.</li>
              <li>Browser unter der angezeigten URL öffnen (⌘-Klick).</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch1Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter1} />}
      />

      <PageNav
        prevLabel="← 23.5 JavaScript Mini-App"
        nextLabel="Weiter: Komponenten & Props →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
