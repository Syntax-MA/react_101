import CodeBlock       from '../components/ui/CodeBlock';
import Card            from '../components/ui/Card';
import TaskBox         from '../components/ui/TaskBox';
import PageNav         from '../components/ui/PageNav';
import ChapterTabs     from '../components/ui/ChapterTabs';
import MarkdownViewer  from '../components/ui/MarkdownViewer';
import Quiz            from '../components/interactive/Quiz';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import { quizData }   from '../data/quizData';
import { fillChapter8, dragDropChapter8 } from '../data/exerciseData';
import ch8Md from '../data/md/uebung-ch8.md?raw';

export default function Chapter8({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">23.2</span>
        <h1>Arrays, Objects &amp; Moderne Patterns</h1>
        <p>map(), filter(), Spread, Destructuring, Immutability &amp; ES6 Modules – die JS-Patterns für React</p>
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
          <blockquote>
            „Listen und Dictionaries kennst du aus Python – heute lernst du die JavaScript-Varianten
            und die wichtigsten Patterns für React!"
            <cite>— Tag 7, Webentwicklung Grundlagen II</cite>
          </blockquote>

          <h3 className="section-title">📋 Arrays & Array-Methoden</h3>
          <div className="grid-3">
            <Card icon="🔄" title="map()">
              Transformiert jedes Element und gibt ein <strong>neues Array</strong> zurück.
              React-Standard für Listen-Rendering.
            </Card>
            <Card icon="🔍" title="filter()">
              Behält nur Elemente, für die die Bedingung <strong>true</strong> zurückgibt.
              Gibt immer ein Array zurück.
            </Card>
            <Card icon="🎯" title="find()">
              Gibt das <strong>erste</strong> passende Element zurück (oder <code>undefined</code>).
              Mit <code>findIndex()</code> für den Index.
            </Card>
          </div>

          <CodeBlock filename="ArrayMethoden.js" lang="js">
            <span className="kw">const</span>{' '}<span className="var">users</span>{' = ['}{'\n'}
            {'  { id: 1, name: '}<span className="str">'Ana'</span>{', active: '}<span className="kw">true</span>{' },'}{'\n'}
            {'  { id: 2, name: '}<span className="str">'Ben'</span>{', active: '}<span className="kw">false</span>{' },'}{'\n'}
            {'  { id: 3, name: '}<span className="str">'Cleo'</span>{', active: '}<span className="kw">true</span>{' },'}{'\n'}
            {'];'}{'\n\n'}
            <span className="cmt">// map() – Namen extrahieren</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">names</span>{' = '}<span className="var">users</span>{'.'}<span className="fn">map</span>{'(u => u.name);'}{'\n'}
            <span className="cmt">// → ["Ana", "Ben", "Cleo"]</span>{'\n\n'}
            <span className="cmt">// filter() – nur aktive User</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">active</span>{' = '}<span className="var">users</span>{'.'}<span className="fn">filter</span>{'(u => u.active);'}{'\n'}
            <span className="cmt">// → [Ana, Cleo]</span>{'\n\n'}
            <span className="cmt">// find() – bestimmten User suchen</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">ben</span>{' = '}<span className="var">users</span>{'.'}<span className="fn">find</span>{'(u => u.id === '}<span className="num">2</span>{');'}{'\n'}
            <span className="cmt">{'// → { id: 2, name: "Ben", ... }'}</span>
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🌊 Spread Operator (...)</h3>
          <div className="grid-2">
            <CodeBlock filename="SpreadArrays.js" lang="js">
              <span className="cmt">// Arrays zusammenführen</span>{'\n'}
              <span className="kw">const</span>{' '}<span className="var">a</span>{' = ['}<span className="num">1</span>{', '}<span className="num">2</span>{', '}<span className="num">3</span>{'];'}{'\n'}
              <span className="kw">const</span>{' '}<span className="var">b</span>{' = ['}<span className="num">4</span>{', '}<span className="num">5</span>{'];'}{'\n'}
              <span className="kw">const</span>{' '}<span className="var">c</span>{' = [...'}<span className="var">a</span>{', ...'}<span className="var">b</span>{'];'}{'\n'}
              <span className="cmt">// → [1, 2, 3, 4, 5]</span>{'\n\n'}
              <span className="cmt">// Element hinzufügen (immutable!)</span>{'\n'}
              <span className="kw">const</span>{' '}<span className="var">newList</span>{' = [...'}<span className="var">a</span>{', '}<span className="num">99</span>{'];'}{'\n'}
              <span className="cmt">// → [1, 2, 3, 99]  – a unverändert</span>
            </CodeBlock>
            <CodeBlock filename="SpreadObjects.js" lang="js">
              <span className="cmt">// Object kopieren & erweitern</span>{'\n'}
              <span className="kw">const</span>{' '}<span className="var">user</span>{' = { name: '}<span className="str">'Ana'</span>{', age: '}<span className="num">28</span>{' };'}{'\n'}
              <span className="kw">const</span>{' '}<span className="var">updated</span>{' = { ...'}<span className="var">user</span>{', age: '}<span className="num">29</span>{' };'}{'\n'}
              <span className="cmt">{'// → { name: "Ana", age: 29 }'}</span>{'\n'}
              <span className="cmt">// user bleibt unverändert!</span>{'\n\n'}
              <span className="cmt">// React State Update:</span>{'\n'}
              <span className="fn">setUser</span>{'(prev => ({ ...prev, age: '}<span className="num">29</span>{' }));'}
            </CodeBlock>
          </div>

          <hr className="div" />
          <h3 className="section-title">📦 Destructuring</h3>
          <CodeBlock filename="Destructuring.js" lang="js">
            <span className="cmt">// Array Destructuring (wie Tuple Unpacking in Python)</span>{'\n'}
            <span className="kw">const</span>{' ['}<span className="var">count</span>{', '}<span className="fn">setCount</span>{'] = '}<span className="fn">useState</span>{'('}<span className="num">0</span>{');'}{'\n\n'}
            <span className="cmt">// Object Destructuring – Props in React</span>{'\n'}
            <span className="kw">function</span>{' '}<span className="fn">UserCard</span>{'({ name, age, active }) {'}{'\n'}
            {'  '}<span className="kw">return</span>{' '}<span className="jsx">{'<p>'}</span>{'{'}<span className="var">name</span>{'}, {'}<span className="var">age</span>{'}'}<span className="jsx">{'</p>'}</span>{';'}{'\n'}
            {'}'}{'\n\n'}
            <span className="cmt">// Rename beim Destructuring</span>{'\n'}
            <span className="kw">const</span>{' { name: '}<span className="var">userName</span>{', age: '}<span className="var">userAge</span>{' } = '}<span className="var">user</span>{';'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔒 Immutability – warum React neue Objekte braucht</h3>
          <div className="grid-2">
            <div>
              <p><strong>❌ Direkte Mutation (React erkennt keine Änderung!):</strong></p>
              <CodeBlock filename="Mutation.js" lang="js">
                <span className="var">user</span>{'.age = '}<span className="num">29</span>{'; '}<span className="cmt">// ❌</span>{'\n'}
                <span className="var">list</span>{'.'}<span className="fn">push</span>{'('}<span className="var">newItem</span>{'); '}<span className="cmt">// ❌</span>
              </CodeBlock>
            </div>
            <div>
              <p><strong>✅ Neue Kopie erstellen (React re-rendert):</strong></p>
              <CodeBlock filename="Immutable.js" lang="js">
                {'{ ...'}<span className="var">user</span>{', age: '}<span className="num">29</span>{' } '}<span className="cmt">// ✅</span>{'\n'}
                {'[...'}<span className="var">list</span>{', '}<span className="var">newItem</span>{'] '}<span className="cmt">// ✅</span>
              </CodeBlock>
            </div>
          </div>

          <hr className="div" />
          <h3 className="section-title">📤 ES6 Modules – import / export</h3>
          <CodeBlock filename="modules.js" lang="js">
            <span className="cmt">// utils.js – Named Exports</span>{'\n'}
            <span className="kw">export const</span>{' '}<span className="fn">add</span>{' = (a, b) => a + b;'}{'\n'}
            <span className="kw">export const</span>{' '}<span className="fn">multiply</span>{' = (a, b) => a * b;'}{'\n\n'}
            <span className="cmt">// api.js – Default Export</span>{'\n'}
            <span className="kw">export default function</span>{' '}<span className="fn">fetchData</span>{'(url) { ... }'}{'\n\n'}
            <span className="cmt">// main.js – Importieren</span>{'\n'}
            <span className="kw">import</span>{' '}<span className="fn">fetchData</span>{' '}<span className="kw">from</span>{' '}<span className="str">'./api'</span>{'; '}<span className="cmt">// default</span>{'\n'}
            <span className="kw">import</span>{' { '}<span className="fn">add</span>{', '}<span className="fn">multiply</span>{' } '}<span className="kw">from</span>{' '}<span className="str">'./utils'</span>{'; '}<span className="cmt">// named</span>
          </CodeBlock>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter8} />
          <DragDropExercise data={dragDropChapter8} />
          <Quiz questions={quizData.chapter8} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <div className="check-empty">
            <p className="check-note">
              💻 Code-Lab für <strong>23.2</strong> folgt bald.
            </p>
          </div>
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Arrays & Objects in der Console" time="20 Min">
            <ol>
              <li>Öffne die Browser-DevTools mit <code>F12</code> → <strong>Console</strong>.</li>
              <li>Erstelle ein Array von User-Objekten und wende <code>map()</code>, <code>filter()</code> und <code>find()</code> an.</li>
              <li>Kopiere ein Object mit dem Spread-Operator und ändere eine Property.</li>
              <li>Destructure ein Object und nutze den Alias (<code>{'{ name: userName }'}</code>).</li>
              <li>Chaine <code>filter().map()</code> für eine kombinierte Transformation.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch8Md} />
        </>}
      />

      <PageNav
        prevLabel="← 23.1 JavaScript Fundamentals"
        nextLabel="Weiter: DOM, Events & Interaktivität →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
