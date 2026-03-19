import CodeBlock      from '../components/ui/CodeBlock';
import Concept        from '../components/ui/Concept';
import Card           from '../components/ui/Card';
import DragDropExercise from '../components/interactive/DragDropExercise';
import FillExercise    from '../components/interactive/FillExercise';
import Quiz            from '../components/interactive/Quiz';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import { quizData }    from '../data/quizData';
import { fillChapter9, dragDropChapter9 } from '../data/exerciseData';
import ch9Md from '../data/md/uebung-ch9.md?raw';

export default function Chapter9({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">23.5</span>
        <h1>JavaScript Mini-App</h1>
        <p>Optionales Abschluss-Assignment – Woche 2: Webentwicklung Grundlagen II</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <div className="check-empty">
            <p className="check-note">📋 Für dieses Kapitel gibt es keine Slide-Präsentation.</p>
          </div>
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="📚 Woche 2 – JavaScript im Überblick">
            <p>Alle Konzepte der Woche kurz zusammengefasst – zum Nachschlagen beim Assignment.</p>
          </Card>

          {/* ── 23.1 JS FUNDAMENTALS ────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">⚡ 23.1 – JavaScript Fundamentals</h3>

          <CodeBlock filename="const, let, Arrow Functions, Template Literals" lang="JS">
            <span className="cmt">{'// Variablen'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">name</span> = <span className="str">'Anna'</span>{';  '}<span className="cmt">{'// unveränderlich'}</span>{'\n'}
            <span className="kw">let</span>   <span className="var">age</span>  = <span className="num">25</span>{';    '}<span className="cmt">{'// veränderlich'}</span>{'\n\n'}
            <span className="cmt">{'// Arrow Function (Kurzform = implicit return)'}</span>{'\n'}
            <span className="kw">const</span> <span className="fn">double</span> = <span className="var">n</span>{' => '}<span className="var">n</span> * <span className="num">2</span>{';'}{'\n'}
            <span className="kw">const</span> <span className="fn">add</span>    = (<span className="var">a</span>, <span className="var">b</span>){' => '}<span className="var">a</span> + <span className="var">b</span>{';'}{'\n\n'}
            <span className="cmt">{'// Template Literal'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">msg</span> = {"`"}Hallo {'{'}<span className="var">name</span>{'}'}, du bist {'{'}<span className="var">age</span>{'}'} Jahre alt!{"`"}{';'}{'\n\n'}
            <span className="cmt">{'// Default-Parameter'}</span>{'\n'}
            <span className="kw">const</span> <span className="fn">greet</span> = (<span className="var">n</span> = <span className="str">'Gast'</span>) {' => '} {"`"}Hallo, {'{'}<span className="var">n</span>{'}'}!{"`"}{';'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="?? – Nullish Coalescing">
              Fallback nur bei <code>null</code>/<code>undefined</code>: <code>{'user.name ?? "Gast"'}</code>
            </Concept>
            <Concept title="?. – Optional Chaining" color="orange">
              Sicherer Zugriff auf tief verschachtelte Werte: <code>user?.address?.city</code>
            </Concept>
          </div>

          {/* ── 23.2 ARRAYS & OBJECTS ───────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">📋 23.2 – Arrays, Objects &amp; Moderne Patterns</h3>

          <CodeBlock filename="Array-Methoden: map, filter, find" lang="JS">
            <span className="kw">const</span> <span className="var">nums</span> = [<span className="num">1</span>, <span className="num">2</span>, <span className="num">3</span>, <span className="num">4</span>, <span className="num">5</span>]{';'}{'\n\n'}
            <span className="var">nums</span>.<span className="fn">map</span>(<span className="var">n</span>{' => '}<span className="var">n</span> * <span className="num">2</span>){'        '}<span className="cmt">{'// [2,4,6,8,10]  – transformieren'}</span>{'\n'}
            <span className="var">nums</span>.<span className="fn">filter</span>(<span className="var">n</span>{' => '}<span className="var">n</span>{' > '}<span className="num">2</span>){'     '}<span className="cmt">{'// [3,4,5]  – filtern'}</span>{'\n'}
            <span className="var">nums</span>.<span className="fn">find</span>(<span className="var">n</span>{' => '}<span className="var">n</span>{' > '}<span className="num">3</span>){'       '}<span className="cmt">{'// 4  – erstes Treffer'}</span>{'\n'}
            <span className="var">nums</span>.<span className="fn">filter</span>(...)<span className="fn">.map</span>(...){' '}<span className="cmt">{'// Ketten möglich!'}</span>
          </CodeBlock>

          <CodeBlock filename="Spread & Destructuring" lang="JS">
            <span className="cmt">{'// Spread – Arrays zusammenführen'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">all</span> = [...<span className="var">a</span>, ...<span className="var">b</span>]{';'}{'\n\n'}
            <span className="cmt">{'// Spread – Objekt kopieren & ändern (immutable!)'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">updated</span> = {'{ ...'}<span className="var">user</span>{', '}<span className="var">age</span>: <span className="num">30</span>{' };'}{'\n\n'}
            <span className="cmt">{'// Array-Destructuring'}</span>{'\n'}
            <span className="kw">const</span> [<span className="var">first</span>, <span className="var">second</span>] = <span className="var">colors</span>{';'}{'\n\n'}
            <span className="cmt">{'// Objekt-Destructuring'}</span>{'\n'}
            <span className="kw">const</span> {'{'} <span className="var">name</span>, <span className="var">age</span> {'}'} = <span className="var">user</span>{';'}
          </CodeBlock>

          <Concept title="⚠️ Arrays NIEMALS direkt mutieren" color="orange">
            <code>arr.push()</code> / <code>arr[0] = x</code> ❌ — immer <code>[...arr, neu]</code>, <code>filter()</code> oder <code>map()</code> ✅
          </Concept>

          {/* ── 23.3 DOM & EVENTS ───────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🌳 23.3 – DOM, Events &amp; Interaktivität</h3>

          <CodeBlock filename="DOM manipulieren & Events" lang="JS">
            <span className="cmt">{'// Selektieren'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">el</span>  = <span className="var">document</span>.<span className="fn">getElementById</span>(<span className="str">'id'</span>){';'}{'\n'}
            <span className="kw">const</span> <span className="var">els</span> = <span className="var">document</span>.<span className="fn">querySelectorAll</span>(<span className="str">'.class'</span>){';'}{'\n\n'}
            <span className="cmt">{'// Inhalte setzen'}</span>{'\n'}
            <span className="var">el</span>.<span className="var">textContent</span> = <span className="str">'Text'</span>{';'}{'\n'}
            <span className="var">el</span>.<span className="var">innerHTML</span>   = <span className="str">'<b>Bold</b>'</span>{';'}{'\n\n'}
            <span className="cmt">{'// Events'}</span>{'\n'}
            <span className="var">el</span>.<span className="fn">addEventListener</span>(<span className="str">'click'</span>, (<span className="var">e</span>) {' => '} {'{'}{'\n'}
            {'  '}<span className="var">e</span>.<span className="fn">preventDefault</span>(){';'}<span className="cmt">{'  // kein Reload'}</span>{'\n'}
            {'  '}<span className="var">el</span>.<span className="var">classList</span>.<span className="fn">toggle</span>(<span className="str">'active'</span>){';'}{'\n'}
            {'});'}{'\n\n'}
            <span className="cmt">{'// Element erstellen & einhängen'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">li</span> = <span className="var">document</span>.<span className="fn">createElement</span>(<span className="str">'li'</span>){';'}{'\n'}
            <span className="var">li</span>.<span className="var">textContent</span> = <span className="str">'Neu'</span>{';'}{'\n'}
            <span className="var">ul</span>.<span className="fn">appendChild</span>(<span className="var">li</span>){';'}
          </CodeBlock>

          {/* ── 23.4 FETCH & ASYNC ──────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🌐 23.4 – Fetch, Async/Await &amp; APIs</h3>

          <CodeBlock filename="GET-Request mit async/await" lang="JS">
            <span className="kw">async function</span> <span className="fn">loadData</span>{'() {'}{'\n'}
            {'  '}<span className="var">output</span>.<span className="var">textContent</span> = <span className="str">'Lädt...'</span>{';'}{'\n\n'}
            {'  '}<span className="kw">try</span>{' {'}{'\n'}
            {'    '}<span className="kw">const</span> <span className="var">res</span>  = <span className="kw">await</span> <span className="fn">fetch</span>(<span className="str">'https://api.example.com/data'</span>){';'}{'\n'}
            {'    '}<span className="kw">if</span> (!<span className="var">res</span>.<span className="var">ok</span>) <span className="kw">throw new</span> <span className="fn">Error</span>(<span className="var">res</span>.<span className="var">status</span>){';'}{'\n'}
            {'    '}<span className="kw">const</span> <span className="var">data</span> = <span className="kw">await</span> <span className="var">res</span>.<span className="fn">json</span>(){';'}{'\n'}
            {'    '}<span className="var">output</span>.<span className="var">textContent</span> = <span className="var">data</span>.<span className="var">title</span>{';'}{'\n'}
            {'  } '}<span className="kw">catch</span>{'('}<span className="var">e</span>{') {'}{'\n'}
            {'    '}<span className="var">console</span>.<span className="fn">error</span>(<span className="str">'Fehler:'</span>, <span className="var">e</span>){';'}{'\n'}
            {'  }'}{'\n'}
            {'}'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="POST-Request senden">
              <code>{'fetch(url, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) })'}</code>
            </Concept>
            <Concept title="Promise.all – parallel" color="purple">
              <code>{'await Promise.all([fetch(url1).then(r=>r.json()), fetch(url2).then(r=>r.json())])'}</code>
            </Concept>
          </div>

          {/* ── ALLES ZUSAMMEN ──────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🏗️ Alles zusammen – Mini-App Muster</h3>

          <CodeBlock filename="app.js – vollständiges Muster" lang="JS">
            <span className="cmt">{'// 1. Elemente selektieren'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">btn</span>   = <span className="var">document</span>.<span className="fn">getElementById</span>(<span className="str">'loadBtn'</span>){';'}{'\n'}
            <span className="kw">const</span> <span className="var">list</span>  = <span className="var">document</span>.<span className="fn">getElementById</span>(<span className="str">'list'</span>){';'}{'\n\n'}
            <span className="cmt">{'// 2. State (einfaches Array)'}</span>{'\n'}
            <span className="kw">let</span> <span className="var">items</span> = [{'\n'}
            {'  '}{'{  '}<span className="var">id</span>: <span className="num">1</span>, <span className="var">name</span>: <span className="str">'Apfel'</span>{' }'},{'\n'}
            {'  '}{'{  '}<span className="var">id</span>: <span className="num">2</span>, <span className="var">name</span>: <span className="str">'Banane'</span>{' },'}{'\n'}
            {'];'}{'\n\n'}
            <span className="cmt">{'// 3. Render-Funktion'}</span>{'\n'}
            <span className="kw">const</span> <span className="fn">render</span> = () {' => '} {'{'}{'\n'}
            {'  '}<span className="var">list</span>.<span className="var">innerHTML</span> = <span className="var">items</span>.<span className="fn">map</span>(<span className="var">i</span> {' => '} {'\n'}
            {'    '}{"`"}<span className="jsx">{'<li'}</span> <span className="var">data-id</span>="{'{'}i.id{'}'}"<span className="jsx">{'>'}</span>{'{'}<span className="var">i</span>.name{'}'}<span className="jsx">{'</li>'}</span>{"`"}{'\n'}
            {'  ).join('}<span className="str">''</span>{');'}{'\n'}
            {'};'}{'\n\n'}
            <span className="cmt">{'// 4. Event + Fetch'}</span>{'\n'}
            <span className="var">btn</span>.<span className="fn">addEventListener</span>(<span className="str">'click'</span>, <span className="kw">async</span> () {' => '} {'{'}{'\n'}
            {'  '}<span className="kw">const</span> <span className="var">res</span>  = <span className="kw">await</span> <span className="fn">fetch</span>(<span className="str">'https://api.example.com/items'</span>){';'}{'\n'}
            {'  '}<span className="kw">const</span> <span className="var">data</span> = <span className="kw">await</span> <span className="var">res</span>.<span className="fn">json</span>(){';'}{'\n'}
            {'  '}<span className="var">items</span> = <span className="var">data</span>.<span className="fn">map</span>(<span className="var">d</span> {' => '} {'({'} <span className="var">id</span>: <span className="var">d</span>.<span className="var">id</span>, <span className="var">name</span>: <span className="var">d</span>.<span className="var">name</span> {'}))'}{';'}{'\n'}
            {'  '}<span className="fn">render</span>(){';'}{'\n'}
            {'});'}{'\n\n'}
            <span className="fn">render</span>(){';  '}<span className="cmt">{'// Initial rendern'}</span>
          </CodeBlock>

          <Card title="⚠️ Häufige Fehler – Checkliste">
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div>
                {[
                  ['❌ await vergessen',           '✅ async + await paarweise nutzen'],
                  ['❌ .json() nicht awaitet',     '✅ const data = await res.json()'],
                  ['❌ Kein Error Handling',       '✅ try { } catch(e) { } immer einbauen'],
                ].map(([w, r]) => (
                  <p key={w} style={{ marginBottom: 8, fontSize: 13 }}>
                    <span style={{ display: 'block' }}>{w}</span>
                    <span style={{ color: 'var(--green)' }}>{r}</span>
                  </p>
                ))}
              </div>
              <div>
                {[
                  ['❌ Array direkt mutiert',      '✅ [...arr, neu] oder filter/map'],
                  ['❌ querySelector("id")',       '✅ querySelector("#id") mit #'],
                  ['❌ innerHTML für User-Input',  '✅ textContent für unsichere Daten'],
                ].map(([w, r]) => (
                  <p key={w} style={{ marginBottom: 8, fontSize: 13 }}>
                    <span style={{ display: 'block' }}>{w}</span>
                    <span style={{ color: 'var(--green)' }}>{r}</span>
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter9} />
          <DragDropExercise data={dragDropChapter9} />
          <Quiz questions={quizData.chapter9} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <div className="check-empty">
            <p className="check-note">📋 Kein Code-Lab für dieses Bonus-Kapitel.</p>
          </div>
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="JavaScript Mini-App (freiwillig)" time="Flex">
            <ol>
              <li>Lies die vollständige Aufgabenstellung unten durch.</li>
              <li>Wähle einen der beiden Ansätze (geführt oder frei).</li>
              <li>Erstelle <code>index.html</code>, <code>style.css</code> und <code>app.js</code>.</li>
              <li>Optionale Abgabe: bis Montag 23:59 Uhr als ZIP hochladen.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch9Md} />
        </>}
      />

      <PageNav
        prevLabel="← 23.4 Fetch & Async/Await"
        nextLabel="Weiter: React Setup & JSX →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
