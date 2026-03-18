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
import CodeLab         from '../components/interactive/CodeLab';
import { labChapter5 } from '../data/labData';
import { quizData }    from '../data/quizData';
import { fillChapter5, dragDropChapter5 } from '../data/exerciseData';
import ch5Md from '../data/md/uebung-ch5.md?raw';

export default function Chapter5({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">23.1</span>
        <h1>JavaScript Fundamentals</h1>
        <p>Variablen, Arrow Functions, Operatoren, Template Literals &amp; Callbacks – die JS-Syntax für React</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={5} total={23} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Ihr könnt programmieren – heute lernt ihr die JavaScript-Syntax für React."
            <cite>— Tag 6, Webentwicklung Grundlagen II</cite>
          </blockquote>

          <h3 className="section-title">📦 Variablen: const &amp; let</h3>
          <div className="grid-2">
            <Card icon="🔒" title="const">
              Konstante – Wert kann <strong>nicht</strong> neu zugewiesen werden.
              Faustregel: <em>immer zuerst const versuchen</em>.
            </Card>
            <Card icon="🔄" title="let">
              Variable – Wert kann neu zugewiesen werden.
              Nur nutzen, wenn der Wert sich wirklich ändert.
            </Card>
          </div>

          <CodeBlock filename="Variablen.js" lang="js">
            <span className="kw">const</span>{' '}<span className="var">name</span>{' = '}<span className="str">'Lisa'</span>{';'}{'     '}<span className="cmt">// ✅ nie neu zugewiesen</span>{'\n'}
            <span className="kw">let</span>{' '}<span className="var">count</span>{' = '}<span className="num">0</span>{';'}{'      '}<span className="cmt">// ✅ wird inkrementiert</span>{'\n'}
            <span className="cmt">// var – nie verwenden! (kein Block-Scope, Hoisting-Bugs)</span>
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">➡️ Arrow Functions</h3>
          <p>Arrow Functions sind der Standard in modernem JavaScript und React:</p>

          <CodeBlock filename="ArrowFunctions.js" lang="js">
            <span className="cmt">// Klassische Funktion</span>{'\n'}
            <span className="kw">function</span>{' '}<span className="fn">add</span>{'(a, b) { '}<span className="kw">return</span>{' a + b; }'}{'\n\n'}
            <span className="cmt">// Arrow Function (ausführlich)</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="fn">add</span>{' = (a, b) => { '}<span className="kw">return</span>{' a + b; };'}{'\n\n'}
            <span className="cmt">// Arrow Function (Kurzform – implicit return)</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="fn">add</span>{' = (a, b) => a + b;'}{'\n\n'}
            <span className="cmt">// In React überall: Komponenten, Events, Array-Methoden</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="fn">App</span>{' = () => '}<span className="jsx">{'<h1>'}</span>Hallo<span className="jsx">{'</h1>'}</span>{';'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">❓ Operatoren für JSX</h3>
          <div className="grid-3">
            <Card icon="❔" title="Ternary ? :">
              Kurzform für if/else: <code>bedingung ? a : b</code>.
              Direkt in JSX verwendbar.
            </Card>
            <Card icon="&&" title="Logical &&">
              Rendert nur, wenn die Bedingung <strong>truthy</strong> ist:
              <code>{'isLoggedIn && <Nav />'}</code>
            </Card>
            <Card icon="??" title="Nullish ??">
              Fallback nur bei <code>null</code> oder <code>undefined</code>:
              <code>{'name ?? "Gast"'}</code>
            </Card>
          </div>

          <CodeBlock filename="Operatoren.jsx" lang="JSX">
            <span className="cmt">{'// Ternary – age >= 18 ? "adult" : "minor"'}</span>{'\n'}
            <span className="jsx">{'<p>'}</span>{'Status: {'}<span className="var">age</span>{' >= '}<span className="num">18</span>{' ? '}<span className="str">'Erwachsen'</span>{' : '}<span className="str">'Minderjährig'</span>{'}'}<span className="jsx">{'</p>'}</span>{'\n\n'}
            <span className="cmt">// Logical && – nur rendern wenn truthy</span>{'\n'}
            {'{'}<span className="var">isLoggedIn</span>{' && '}<span className="jsx">{'<UserMenu />'}</span>{'}'}{'\n\n'}
            <span className="cmt">// Nullish ?? – Fallback bei null/undefined</span>{'\n'}
            <span className="jsx">{'<span>'}</span>{'{'}<span className="var">username</span>{' ?? '}<span className="str">'Gast'</span>{'}'}<span className="jsx">{'</span>'}</span>
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔤 Template Literals</h3>
          <CodeBlock filename="TemplateLiterals.js" lang="js">
            <span className="kw">const</span>{' '}<span className="var">name</span>{' = '}<span className="str">'Max'</span>{';'}{'\n'}
            <span className="kw">const</span>{' '}<span className="var">age</span>{' = '}<span className="num">25</span>{';'}{'\n\n'}
            <span className="cmt">{'// Python: f"Hallo {name}, du bist {age} Jahre alt"'}</span>{'\n'}
            <span className="cmt">{'// JS mit Backticks und ${...} statt {}:'}</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">msg</span>{' = `Hallo '}<span className="str">{'${name}'}</span>{', du bist '}<span className="str">{'${age}'}</span>{' Jahre alt`;'}{'\n\n'}
            <span className="cmt">{'// Mehrzeilig ohne \\n:'}</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">html</span>{' = `'}{'\n'}
            {'  <h1>'}<span className="str">{'${name}'}</span>{'</h1>'}{'\n'}
            {'`;'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔁 Callbacks</h3>
          <p>
            Eine Callback-Funktion wird als Argument übergeben – unverzichtbar für Events und React-Hooks.
          </p>
          <CodeBlock filename="Callbacks.js" lang="js">
            <span className="cmt">// setTimeout mit Callback</span>{'\n'}
            <span className="fn">setTimeout</span>{'(() => '}<span className="fn">console</span>{'.log('}<span className="str">'3 Sek vorbei!'</span>{'), '}<span className="num">3000</span>{');'}{'\n\n'}
            <span className="cmt">// Array.forEach mit Callback</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">names</span>{' = ['}<span className="str">'Ana'</span>{', '}<span className="str">'Ben'</span>{', '}<span className="str">'Cleo'</span>{'];'}{'\n'}
            <span className="var">names</span>{'.'}<span className="fn">forEach</span>{'(name => '}<span className="fn">console</span>{'.log(name));'}{'\n\n'}
            <span className="cmt">// In React – onClick Callback:</span>{'\n'}
            <span className="jsx">{'<button'}</span>{' onClick={'}<span className="fn">{'() => setCount'}</span>{'(count + 1)}>'}<span className="jsx">{'</button>'}</span>
          </CodeBlock>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter5} />
          <DragDropExercise data={dragDropChapter5} />
          <Quiz questions={quizData.chapter5} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter5} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="JS Basics in der Browser Console" time="20 Min">
            <ol>
              <li>Öffne die Browser-DevTools mit <code>F12</code> und gehe zum <strong>Console</strong>-Tab.</li>
              <li>Erstelle Variablen mit <code>const</code> und <code>let</code> – versuche, eine <code>const</code> neu zuzuweisen.</li>
              <li>Schreibe eine Arrow Function, die zwei Zahlen addiert: <code>const add = (a, b) =&gt; a + b;</code></li>
              <li>Nutze den Ternary Operator: <code>const status = age &gt;= 18 ? "adult" : "minor"</code></li>
              <li>Erstelle einen String mit Template Literals und mehreren Variablen.</li>
              <li>Teste <code>console.log</code>, <code>console.table</code> und <code>console.warn</code>.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch5Md} />
        </>}
      />

      <PageNav
        prevLabel="← 24.5 React Mini-App"
        nextLabel="Weiter: Arrays, Objects & Patterns →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
