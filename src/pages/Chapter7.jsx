import CodeBlock      from '../components/ui/CodeBlock';
import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import SlideCarousel  from '../components/ui/SlideCarousel';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import Quiz            from '../components/interactive/Quiz';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import BugFinder      from '../components/interactive/BugFinder';
import { labChapter7 }   from '../data/labData';
import { bugChapter7 }   from '../data/bugData';
import { quizData }    from '../data/quizData';
import { fillChapter7, dragDropChapter7 } from '../data/exerciseData';
import ch7Md from '../data/md/uebung-ch7.md?raw';

export default function Chapter7({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">23.4</span>
        <h1>Fetch, Async/Await &amp; APIs</h1>
        <p>HTTP-Requests, Promises, async/await, JSON, Error Handling &amp; Loading States</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={7} total={17} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Heute verbinden wir Frontend mit Backend – der Schlüssel für echte Web-Apps!"
            <cite>— Tag 9, Webentwicklung Grundlagen II</cite>
          </blockquote>

          <h3 className="section-title">⏳ Synchron vs. Asynchron</h3>
          <div className="grid-2">
            <Card icon="⏳" title="Synchron">
              Code läuft <strong>Zeile für Zeile</strong>. Jeder Schritt wartet auf den vorherigen.
              Problem: Lange Operationen blockieren den Browser.
            </Card>
            <Card icon="⚡" title="Asynchron">
              Code läuft <strong>nicht-blockierend</strong>. Browser wartet im Hintergrund,
              macht inzwischen andere Dinge. Analogie: Pizza bestellen und weitermachen.
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">🌐 Die Fetch API</h3>
          <CodeBlock filename="fetch-basic.js" lang="js">
            <span className="cmt">// GET-Request (Daten lesen)</span>{'\n'}
            <span className="fn">fetch</span>{'('}<span className="str">'https://api.example.com/users'</span>{')'}{'\n'}
            {'  .'}<span className="fn">then</span>{'(res => res.'}<span className="fn">json</span>{'())'}{'\n'}
            {'  .'}<span className="fn">then</span>{'(data => '}<span className="fn">console</span>{'.log(data))'}{'\n'}
            {'  .'}<span className="fn">catch</span>{'(err => '}<span className="fn">console</span>{'.error(err));'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">✨ Async / Await</h3>
          <p>
            <code>async/await</code> macht asynchronen Code <strong>lesbar wie synchronen</strong> –
            der React-Standard für Data Fetching.
          </p>
          <CodeBlock filename="async-await.js" lang="js">
            <span className="kw">async function</span>{' '}<span className="fn">loadUsers</span>{'() {'}{'\n'}
            {'  '}<span className="kw">try</span>{' {'}{'\n'}
            {'    '}<span className="kw">const</span>{' '}<span className="var">res</span>{' = '}<span className="kw">await</span>{' '}<span className="fn">fetch</span>{'('}<span className="str">'https://api.example.com/users'</span>{');'}{'\n'}
            {'    '}<span className="kw">if</span>{' (!'}<span className="var">res</span>{'.ok) '}<span className="kw">throw new</span>{' Error('}<span className="str">{'`HTTP ${res.status}`'}</span>{');'}{'\n'}
            {'    '}<span className="kw">const</span>{' '}<span className="var">data</span>{' = '}<span className="kw">await</span>{' '}<span className="var">res</span>{'.'}<span className="fn">json</span>{'();'}{'\n'}
            {'    '}<span className="kw">return</span>{' '}<span className="var">data</span>{';'}{'\n'}
            {'  } '}<span className="kw">catch</span>{' (err) {'}{'\n'}
            {'    '}<span className="fn">console</span>{'.error('}<span className="str">'Fehler:'</span>{', err);'}{'\n'}
            {'  }'}{'\n'}
            {'}'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📡 HTTP-Methoden mit Fetch</h3>
          <div className="grid-2">
            <CodeBlock filename="GET / POST" lang="js">
              <span className="cmt">// GET – Daten lesen</span>{'\n'}
              <span className="kw">await</span>{' '}<span className="fn">fetch</span>{'('}<span className="str">'/api/items'</span>{');'}{'\n\n'}
              <span className="cmt">// POST – Daten senden</span>{'\n'}
              <span className="kw">await</span>{' '}<span className="fn">fetch</span>{'('}<span className="str">'/api/items'</span>{', {'}{'\n'}
              {'  method: '}<span className="str">'POST'</span>{','}{'\n'}
              {'  headers: {'}<span className="str">'Content-Type'</span>{': '}<span className="str">'application/json'</span>{'},'}{'\n'}
              {'  body: JSON.'}<span className="fn">stringify</span>{'({ name: '}<span className="str">'Max'</span>{' })'}{'\n'}
              {'});'}
            </CodeBlock>
            <div>
              <p><strong>Weitere Methoden:</strong></p>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="tbl">
                  <tbody>
                    {[
                      ['GET', 'Daten lesen'],
                      ['POST', 'Neuen Datensatz anlegen'],
                      ['PUT', 'Komplett ersetzen'],
                      ['PATCH', 'Teilweise ändern'],
                      ['DELETE', 'Löschen'],
                    ].map(([m, desc]) => (
                      <tr key={m}>
                        <td className="fname">{m}</td>
                        <td>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="div" />
          <h3 className="section-title">⚠️ Error Handling</h3>
          <CodeBlock filename="ErrorHandling.js" lang="js">
            <span className="cmt">// ❌ Achtung: fetch() wirft KEINEN Error bei 404/500!</span>{'\n'}
            <span className="cmt">// Immer response.ok prüfen + try/catch verwenden:</span>{'\n\n'}
            <span className="kw">async function</span>{' '}<span className="fn">fetchData</span>{'(url) {'}{'\n'}
            {'  '}<span className="kw">try</span>{' {'}{'\n'}
            {'    '}<span className="kw">const</span>{' '}<span className="var">res</span>{' = '}<span className="kw">await</span>{' '}<span className="fn">fetch</span>{'(url);'}{'\n'}
            {'    '}<span className="kw">if</span>{' (!'}<span className="var">res</span>{'.ok) '}<span className="kw">throw new</span>{' Error('}<span className="str">{'`${res.status}  ${res.statusText}`'}</span>{');'}{'\n'}
            {'    '}<span className="kw">return await</span>{' '}<span className="var">res</span>{'.'}<span className="fn">json</span>{'();'}{'\n'}
            {'  } '}<span className="kw">catch</span>{' (err) {'}{'\n'}
            {'    '}<span className="cmt">// Nutzer informieren, Logging, ggf. Retry</span>{'\n'}
            {'    setError(err.message);'}{'\n'}
            {'  }'}{'\n'}
            {'}'}
          </CodeBlock>

          <div className="concept concept--react">
            <h4 className="concept-title">React-Vorschau: useEffect + Fetch</h4>
            <div className="concept-body">
              <p>
                In React macht ihr das Gleiche – nur mit Hooks. <code>useState()</code> für
                Loading/Error/Data-States, <code>useEffect()</code> für den initialen Fetch.
                Die Konzepte bleiben exakt gleich, nur die Syntax ändert sich!
              </p>
              <CodeBlock filename="React-Vorschau.jsx" lang="JSX">
                <span className="kw">function</span>{' '}<span className="fn">UserList</span>{'() {'}{'\n'}
                {'  '}<span className="kw">const</span>{' ['}<span className="var">users</span>{', '}<span className="fn">setUsers</span>{'] = '}<span className="fn">useState</span>{'([]);'}{'\n'}
                {'  '}<span className="kw">const</span>{' ['}<span className="var">loading</span>{', '}<span className="fn">setLoading</span>{'] = '}<span className="fn">useState</span>{'('}<span className="kw">true</span>{');'}{'\n\n'}
                {'  '}<span className="fn">useEffect</span>{'(() => {'}{'\n'}
                {'    '}<span className="fn">fetch</span>{'('}<span className="str">'/api/users'</span>{')'}{'\n'}
                {'      .'}<span className="fn">then</span>{'(r => r.'}<span className="fn">json</span>{'())'}{'\n'}
                {'      .'}<span className="fn">then</span>{'('}<span className="fn">setUsers</span>{')'}{'\n'}
                {'      .'}<span className="fn">finally</span>{'(() => '}<span className="fn">setLoading</span>{'('}<span className="kw">false</span>{'));'}{'\n'}
                {'  }, []);'}{'\n'}
                {'  '}<span className="kw">if</span>{' ('}<span className="var">loading</span>{') '}<span className="kw">return</span>{' '}<span className="jsx">{'<p>'}</span>Lädt...<span className="jsx">{'</p>'}</span>{';'}{'\n'}
                {'  '}<span className="kw">return</span>{' '}<span className="jsx">{'<ul>'}</span>{'{'}<span className="var">users</span>{'.map(u => '}<span className="jsx">{'<li'}</span>{' key={"{u.id}"}>{"{u.name}"}'}<span className="jsx">{'</li>'}</span>{')'}<span className="jsx">{'}'}</span><span className="jsx">{'</ul>'}</span>{';'}{'\n'}
                {'}'}
              </CodeBlock>
            </div>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter7} />
          <DragDropExercise data={dragDropChapter7} />
          <Quiz questions={quizData.chapter7} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter7} labId="labChapter7" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Wetter-App mit Fetch" time="30 Min">
            <ol>
              <li>Erstelle ein HTML-Formular mit Input-Feld für einen Städtenamen und einem Lade-Button.</li>
              <li>Nutze die kostenlose API: <code>https://wttr.in/STADT?format=j1</code></li>
              <li>Schreibe eine <code>async</code>-Funktion <code>loadWeather(city)</code> mit <code>try/catch</code>.</li>
              <li>Zeige einen <strong>Loading-State</strong> während der Request läuft.</li>
              <li>Zeige im Fehlerfall eine verständliche Fehlermeldung.</li>
              <li>Stelle mindestens Temperatur und Wetterbeschreibung dar.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch7Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter7} />}
      />

      <PageNav
        prevLabel="← 23.3 DOM, Events & Interaktivität"
        nextLabel="Weiter: JavaScript Mini-App →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
