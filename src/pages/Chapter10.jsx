import CodeBlock      from '../components/ui/CodeBlock';
import Concept        from '../components/ui/Concept';
import Card           from '../components/ui/Card';
import DragDropExercise from '../components/interactive/DragDropExercise';
import FillExercise    from '../components/interactive/FillExercise';
import Quiz            from '../components/interactive/Quiz';
import CodeLab        from '../components/interactive/CodeLab';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import { quizData }    from '../data/quizData';
import { fillChapter10, dragDropChapter10 } from '../data/exerciseData';
import { labChapter10 } from '../data/labData';
import ch10Md from '../data/md/uebung-ch10.md?raw';

export default function Chapter10({ onPrev, onFinish }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">24.5</span>
        <h1>React Mini-App</h1>
        <p>Optionales Abschluss-Assignment – Woche 3: React Grundlagen</p>
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
          <Card title="📚 Woche 3 – React Grundlagen im Überblick">
            <p>Alle Konzepte der Woche kurz zusammengefasst – zum Nachschlagen beim Assignment.</p>
          </Card>

          {/* ── 24.1 SETUP & JSX ────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🚀 24.1 – React Setup &amp; JSX</h3>

          <CodeBlock filename="Neues Vite-Projekt anlegen" lang="bash">
            <span className="fn">npm</span> create vite@latest mein-projekt {'-- --template react'}{'\n'}
            <span className="kw">cd</span> mein-projekt{'\n'}
            <span className="fn">npm</span> install{'\n'}
            <span className="fn">npm</span> run dev
          </CodeBlock>

          <CodeBlock filename="JSX – Grundregeln" lang="JSX">
            <span className="kw">function</span> <span className="fn">App</span>{'() {'}{'\n'}
            {'  '}<span className="kw">const</span> <span className="var">name</span> = <span className="str">'React'</span>{';'}{'\n'}
            {'  '}<span className="kw">const</span> <span className="var">count</span> = <span className="num">42</span>{';'}{'\n'}
            {'  '}<span className="kw">return</span> {'('}{'\n'}
            {'    '}<span className="jsx">{'<div'}</span> <span className="var">className</span>=<span className="str">"app"</span><span className="jsx">{'>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<h1>'}</span>{'{'}<span className="var">name</span>{'}'}<span className="jsx">{'</h1>'}</span>
            {'   '}<span className="cmt">{'/* Ausdruck in {} */'}</span>{'\n'}
            {'      '}<span className="jsx">{'<p>'}</span>{'{'}<span className="var">count</span>{' * 2}'}<span className="jsx">{'</p>'}</span>
            {'      '}<span className="cmt">{'/* Berechnung */'}</span>{'\n'}
            {'      '}<span className="jsx">{'<img'}</span> <span className="var">src</span>=<span className="str">"logo.png"</span> <span className="jsx">{'/>'}</span>
            {'  '}<span className="cmt">{'/* selbstschließend */'}</span>{'\n'}
            {'    '}<span className="jsx">{'</div>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="className statt class">
              <code>class</code> ist ein JS-Schlüsselwort → in JSX immer <code>className</code> verwenden.
            </Concept>
            <Concept title="Fragment &lt;&gt;&lt;/&gt;" color="purple">
              Kein Extra-<code>div</code> im DOM: <code>{'<>'}</code>…<code>{'</>'}</code> fasst mehrere Elemente zusammen.
            </Concept>
            <Concept title="Ausdrücke in {}" color="orange">
              Alles in <code>{'{}'}</code> wird als JS ausgewertet: Variablen, Berechnungen, Funktionsaufrufe.
            </Concept>
            <Concept title="Selbstschließende Tags" color="green">
              <code>{'<input />'}</code>, <code>{'<br />'}</code>, <code>{'<img />'}</code> – JSX verlangt den abschließenden <code>/</code>.
            </Concept>
          </div>

          {/* ── 24.2 KOMPONENTEN & PROPS ────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🧩 24.2 – Komponenten &amp; Props</h3>

          <CodeBlock filename="Komponente definieren & verwenden" lang="JSX">
            <span className="cmt">{'// Komponente (eigene Datei: UserCard.jsx)'}</span>{'\n'}
            <span className="kw">function</span> <span className="fn">UserCard</span>{'({'} <span className="var">name</span>, <span className="var">age</span>, <span className="var">isAdmin</span> {'= false }) {'}{'\n'}
            {'  '}<span className="kw">return</span> {'('}{'\n'}
            {'    '}<span className="jsx">{'<div'}</span> <span className="var">className</span>=<span className="str">"card"</span><span className="jsx">{'>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<h2>'}</span>{'{'}<span className="var">name</span>{'}'}<span className="jsx">{'</h2>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<p>'}</span>Alter: {'{'}<span className="var">age</span>{'}'}<span className="jsx">{'</p>'}</span>{'\n'}
            {'      '}{'{'}  <span className="var">isAdmin</span> {'&& '}<span className="jsx">{'<span>'}</span>👑 Admin<span className="jsx">{'</span>'}</span>{' }'}{'\n'}
            {'    '}<span className="jsx">{'</div>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}{'\n'}
            <span className="kw">export default</span> <span className="fn">UserCard</span>{';'}{'\n\n'}
            <span className="cmt">{'// Verwendung in App.jsx'}</span>{'\n'}
            <span className="jsx">{'<UserCard'}</span> <span className="var">name</span>=<span className="str">"Anna"</span> <span className="var">age</span>={'{'}25{'}'} <span className="var">isAdmin</span> <span className="jsx">{'/>'}</span>
          </CodeBlock>

          <CodeBlock filename="children-Prop" lang="JSX">
            <span className="kw">function</span> <span className="fn">Box</span>{'({'} <span className="var">children</span> {'}) {'}{'\n'}
            {'  '}<span className="kw">return</span> <span className="jsx">{'<div'}</span> <span className="var">className</span>=<span className="str">"box"</span><span className="jsx">{'>'}</span>{'{'}<span className="var">children</span>{'}'}<span className="jsx">{'</div>'}</span>{';'}{'\n'}
            {'}'}{'\n\n'}
            <span className="cmt">{'// Verwendung:'}</span>{'\n'}
            <span className="jsx">{'<Box>'}</span>{'\n'}
            {'  '}<span className="jsx">{'<p>'}</span>Irgendein Inhalt<span className="jsx">{'</p>'}</span>{'\n'}
            <span className="jsx">{'</Box>'}  </span>
          </CodeBlock>

          <div className="grid-2">
            <Concept title="Props sind read-only">
              Eine Komponente darf ihre Props <em>niemals</em> direkt verändern – sie fließen nur von oben nach unten.
            </Concept>
            <Concept title="Callback als Prop" color="orange">
              Funktionen können als Props übergeben werden: <code>{'<Btn onClick={handleClick} />'}</code> – so kommunizieren Kinder mit dem Elternteil.
            </Concept>
            <Concept title="export default" color="purple">
              Jede Komponenten-Datei exportiert mit <code>export default</code> und wird per <code>import X from './X'</code> geladen.
            </Concept>
            <Concept title="Default-Werte" color="green">
              Direkt in der Destrukturierung: <code>{'function Card({ title = "Kein Titel" })'}</code>
            </Concept>
          </div>

          {/* ── 24.3 STATE & CONTROLLED INPUTS ─────────────── */}
          <hr className="div" />
          <h3 className="section-title">⚡ 24.3 – useState &amp; Controlled Inputs</h3>

          <CodeBlock filename="useState – Counter" lang="JSX">
            <span className="kw">import</span> {'{ '}<span className="fn">useState</span>{' } from '}<span className="str">'react'</span>{';'}{'\n\n'}
            <span className="kw">function</span> <span className="fn">Counter</span>{'() {'}{'\n'}
            {'  '}<span className="kw">const</span> [<span className="var">count</span>, <span className="fn">setCount</span>] = <span className="fn">useState</span>(<span className="num">0</span>){';'}{'\n\n'}
            {'  '}<span className="kw">return</span> {'('}{'\n'}
            {'    '}<span className="jsx">{'<div>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<p>'}</span>{'{'}<span className="var">count</span>{'}'}<span className="jsx">{'</p>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<button'}</span> <span className="var">onClick</span>={'{'}{' () => '}<span className="fn">setCount</span>(<span className="var">count</span> + <span className="num">1</span>){'}'}<span className="jsx">{'>'}</span>+1<span className="jsx">{'</button>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</div>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <CodeBlock filename="Controlled Input – Formular" lang="JSX">
            <span className="kw">function</span> <span className="fn">MyForm</span>{'() {'}{'\n'}
            {'  '}<span className="kw">const</span> [<span className="var">value</span>, <span className="fn">setValue</span>] = <span className="fn">useState</span>(<span className="str">''</span>){';'}{'\n\n'}
            {'  '}<span className="kw">const</span> <span className="fn">handleSubmit</span> = (<span className="var">e</span>){' => '}{'{'}{'\n'}
            {'    '}<span className="var">e</span>.<span className="fn">preventDefault</span>(){';'}{'\n'}
            {'    '}<span className="var">console</span>.<span className="fn">log</span>(<span className="var">value</span>){';'}{'\n'}
            {'    '}<span className="fn">setValue</span>(<span className="str">''</span>){';'}{'\n'}
            {'  };'}{'\n\n'}
            {'  '}<span className="kw">return</span> {'('}{'\n'}
            {'    '}<span className="jsx">{'<form'}</span> <span className="var">onSubmit</span>={'{'}<span className="fn">handleSubmit</span>{'}'}<span className="jsx">{'>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<input'}</span>{'\n'}
            {'        '}<span className="var">value</span>={'{'}<span className="var">value</span>{'}'}{'\n'}
            {'        '}<span className="var">onChange</span>={'{'}<span className="var">e</span>{' => '}<span className="fn">setValue</span>(<span className="var">e</span>.target.<span className="var">value</span>){'}'}{'\n'}
            {'      '}<span className="jsx">{'/>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<button>'}</span>Absenden<span className="jsx">{'</button>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</form>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="State nie direkt mutieren">
              <code>count++</code> ❌ — immer <code>setCount(count + 1)</code> ✅. React erkennt Änderungen nur über den Setter.
            </Concept>
            <Concept title="Re-Render" color="orange">
              Jeder <code>setState</code>-Aufruf löst ein Re-Render aus — React vergleicht (diffed) und aktualisiert nur die Differenz im DOM.
            </Concept>
            <Concept title="Mehrere States" color="purple">
              <code>useState</code> kann beliebig oft aufgerufen werden: je ein State pro logischem Wert.
            </Concept>
            <Concept title="Boolean Toggle" color="green">
              <code>{'setOpen(prev => !prev)'}</code> – Functional Update ist sicher bei Abhängigkeit vom alten Wert.
            </Concept>
          </div>

          {/* ── 24.4 LISTEN & KONDITIONALES RENDERING ───────── */}
          <hr className="div" />
          <h3 className="section-title">📋 24.4 – Listen, Keys &amp; Bedingtes Rendering</h3>

          <CodeBlock filename="Liste rendern mit map()" lang="JSX">
            <span className="kw">const</span> <span className="var">tasks</span> = [{'\n'}
            {'  '}{'{  '}<span className="var">id</span>: <span className="num">1</span>, <span className="var">text</span>: <span className="str">'React lernen'</span>, <span className="var">done</span>: <span className="kw">true</span>{'  },'}{'\n'}
            {'  '}{'{  '}<span className="var">id</span>: <span className="num">2</span>, <span className="var">text</span>: <span className="str">'App bauen'</span>,    <span className="var">done</span>: <span className="kw">false</span>{' },'}{'\n'}
            {'];'}{'\n\n'}
            <span className="kw">function</span> <span className="fn">TaskList</span>{'() {'}{'\n'}
            {'  '}<span className="kw">return</span> {'('}{'\n'}
            {'    '}<span className="jsx">{'<ul>'}</span>{'\n'}
            {'      {'}<span className="var">tasks</span>.<span className="fn">map</span>(<span className="var">t</span> {' => '} {'('}{'\n'}
            {'        '}<span className="jsx">{'<li'}</span> <span className="var">key</span>={'{'}<span className="var">t</span>.id{'}'}<span className="jsx">{'>'}</span>{'{'}<span className="var">t</span>.text{'}'}<span className="jsx">{'</li>'}</span>{'\n'}
            {'      ))}'}{'\n'}
            {'    '}<span className="jsx">{'</ul>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <CodeBlock filename="filter() + map() + Konditionales Rendering" lang="JSX">
            <span className="cmt">{'// Nur offene Tasks anzeigen:'}</span>{'\n'}
            <span className="kw">const</span> <span className="var">open</span> = <span className="var">tasks</span>.<span className="fn">filter</span>(<span className="var">t</span> {' => '} !<span className="var">t</span>.done);{'\n\n'}
            <span className="cmt">{'// Bedingte Anzeige – drei Varianten:'}</span>{'\n'}
            <span className="var">isLoading</span> {'&& '}<span className="jsx">{'<Spinner />'}</span>{'           '}<span className="cmt">{'// &&  → nur wenn truthy'}</span>{'\n'}
            <span className="var">done</span> ? <span className="jsx">{'<span>'}</span>✅<span className="jsx">{'</span>'}</span> : <span className="jsx">{'<span>'}</span>⏳<span className="jsx">{'</span>'}</span>{'  '}<span className="cmt">{'// ?:  → entweder / oder'}</span>{'\n'}
            <span className="kw">if</span> (!<span className="var">data</span>) <span className="kw">return</span> <span className="jsx">{'<p>'}</span>Lädt…<span className="jsx">{'</p>'}</span>{';       '}<span className="cmt">{'// Early Return'}</span>
          </CodeBlock>

          <CodeBlock filename="Array-State: immutable updaten" lang="JSX">
            <span className="cmt">{'// ✅ Hinzufügen (neues Array):'}</span>{'\n'}
            <span className="fn">setTasks</span>([...<span className="var">tasks</span>, {'{'} <span className="var">id</span>: <span className="fn">Date</span>.now(), <span className="var">text</span>: <span className="str">'neu'</span>, <span className="var">done</span>: <span className="kw">false</span> {'}])'}{';'}{'\n\n'}
            <span className="cmt">{'// ✅ Ändern (map → neues Objekt):'}</span>{'\n'}
            <span className="fn">setTasks</span>(<span className="var">tasks</span>.<span className="fn">map</span>(<span className="var">t</span> {' => '}{'\n'}
            {'  '}<span className="var">t</span>.id === <span className="var">id</span> ? {'{'} ...<span className="var">t</span>, <span className="var">done</span>: !<span className="var">t</span>.done {'} : t'}{'\n'}
            {')'}); {'\n\n'}
            <span className="cmt">{'// ✅ Löschen (filter):'}</span>{'\n'}
            <span className="fn">setTasks</span>(<span className="var">tasks</span>.<span className="fn">filter</span>(<span className="var">t</span>{' => '}<span className="var">t</span>.id !== <span className="var">id</span>)){';'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="key ist Pflicht bei map()">
              React nutzt den <code>key</code> intern für das Reconciling. Stabile, eindeutige ID bevorzugen – Array-Index nur als Notlösung.
            </Concept>
            <Concept title="Arrays nie direkt mutieren" color="orange">
              <code>tasks.push()</code> ❌ — immer ein neues Array erzeugen (<code>[...tasks, neu]</code> oder <code>filter/map</code>).
            </Concept>
          </div>

          {/* ── ALLES ZUSAMMEN ──────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🏗️ Alles zusammen – Mini-App Muster</h3>

          <CodeBlock filename="App.jsx – vollständiges Muster" lang="JSX">
            <span className="kw">import</span> {'{ '}<span className="fn">useState</span>{' } from '}<span className="str">'react'</span>{';'}{'\n'}
            <span className="kw">import</span> <span className="fn">TaskForm</span> <span className="kw">from</span> <span className="str">'./components/TaskForm'</span>{';'}{'\n'}
            <span className="kw">import</span> <span className="fn">TaskList</span> <span className="kw">from</span> <span className="str">'./components/TaskList'</span>{';'}{'\n\n'}
            <span className="kw">function</span> <span className="fn">App</span>{'() {'}{'\n'}
            {'  '}<span className="cmt">{'// 1. State'}</span>{'\n'}
            {'  '}<span className="kw">const</span> [<span className="var">tasks</span>, <span className="fn">setTasks</span>] = <span className="fn">useState</span>([]);{'\n'}
            {'  '}<span className="kw">const</span> [<span className="var">filter</span>, <span className="fn">setFilter</span>] = <span className="fn">useState</span>(<span className="str">'all'</span>){';'}{'\n\n'}
            {'  '}<span className="cmt">{'// 2. Handler'}</span>{'\n'}
            {'  '}<span className="kw">const</span> <span className="fn">addTask</span>   = <span className="var">text</span>{' => '}<span className="fn">setTasks</span>([...<span className="var">tasks</span>, {'{'}<span className="var">id</span>: <span className="fn">Date</span>.now(), <span className="var">text</span>, <span className="var">done</span>: <span className="kw">false</span>{'}])'}{';'}{'\n'}
            {'  '}<span className="kw">const</span> <span className="fn">toggle</span>     = <span className="var">id</span>{' => '}<span className="fn">setTasks</span>(<span className="var">tasks</span>.<span className="fn">map</span>(<span className="var">t</span>{' => '}<span className="var">t</span>.id===<span className="var">id</span> ? {'{'} ...<span className="var">t</span>, <span className="var">done</span>: !<span className="var">t</span>.done {'} : t))'}{';'}{'\n'}
            {'  '}<span className="kw">const</span> <span className="fn">remove</span>     = <span className="var">id</span>{' => '}<span className="fn">setTasks</span>(<span className="var">tasks</span>.<span className="fn">filter</span>(<span className="var">t</span>{' => '}<span className="var">t</span>.id !== <span className="var">id</span>)){';'}{'\n\n'}
            {'  '}<span className="cmt">{'// 3. Derived State'}</span>{'\n'}
            {'  '}<span className="kw">const</span> <span className="var">visible</span> = <span className="var">tasks</span>.<span className="fn">filter</span>(<span className="var">t</span> {' => '}{'\n'}
            {'    '}<span className="var">filter</span> === <span className="str">'open'</span> ? !<span className="var">t</span>.done : <span className="var">filter</span> === <span className="str">'done'</span> ? <span className="var">t</span>.done : <span className="kw">true</span>{'\n'}
            {'  );'}{'\n\n'}
            {'  '}<span className="kw">return</span> {'('}{'\n'}
            {'    '}<span className="jsx">{'<div>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<TaskForm'}</span> <span className="var">onAdd</span>={'{'}<span className="fn">addTask</span>{'}'} <span className="jsx">{'/>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<TaskList'}</span> <span className="var">tasks</span>={'{'}<span className="var">visible</span>{'}'} <span className="var">onToggle</span>={'{'}<span className="fn">toggle</span>{'}'} <span className="var">onDelete</span>={'{'}<span className="fn">remove</span>{'}'} <span className="jsx">{'/>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</div>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <Card title="🗺️ Datenfluss in React">
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 6 }}>⬇️ Props – von oben nach unten</p>
                <p>Daten und Funktionen werden als Props von der Eltern- zur Kindkomponente übergeben.</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 6 }}>⬆️ Callbacks – von unten nach oben</p>
                <p>Kinder rufen <em>Callback-Props</em> auf (<code>onAdd</code>, <code>onDelete</code>), um den Eltern-State zu verändern.</p>
              </div>
            </div>
          </Card>

          <Card title="⚠️ Häufige Fehler – Checkliste">
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div>
                {[
                  ['❌ Arrays direkt mutiert', '✅ [...arr, neu] / filter / map'],
                  ['❌ key fehlt bei map()', '✅ key={item.id} am äußersten Element'],
                  ['❌ className vergessen', '✅ className statt class'],
                ].map(([wrong, right]) => (
                  <p key={wrong} style={{ marginBottom: 8, fontSize: 13 }}>
                    <span style={{ display: 'block' }}>{wrong}</span>
                    <span style={{ color: 'var(--green)' }}>{right}</span>
                  </p>
                ))}
              </div>
              <div>
                {[
                  ['❌ Input unkontrolliert', '✅ value + onChange (Controlled Input)'],
                  ['❌ State direkt gesetzt', '✅ immer den Setter nutzen (setX(...))'],
                  ['❌ Fragment vergessen', '✅ <></> wenn kein wrapper-div gewünscht'],
                ].map(([wrong, right]) => (
                  <p key={wrong} style={{ marginBottom: 8, fontSize: 13 }}>
                    <span style={{ display: 'block' }}>{wrong}</span>
                    <span style={{ color: 'var(--green)' }}>{right}</span>
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter10} />
          <DragDropExercise data={dragDropChapter10} />
          <Quiz questions={quizData.chapter10} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={<CodeLab data={labChapter10} labId="labChapter10" />}

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="React Mini-App (freiwillig)" time="Flex">
            <ol>
              <li>Lies die vollständige Aufgabenstellung unten durch.</li>
              <li>Wähle einen der vorgeschlagenen App-Ideen oder eine eigene.</li>
              <li>Erstelle dein Vite-React-Projekt und entwickle deine Komponenten.</li>
              <li>Optionale Abgabe: bis Montag 23:59 Uhr als ZIP (ohne node_modules) hochladen.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch10Md} />
        </>}
      />

      <PageNav
        prevLabel="← 24.4 Rendering & Listen"
        nextLabel="🎉 Kurs abschließen"
        onPrev={onPrev}
        onNext={onFinish}
      />
    </div>
  );
}
