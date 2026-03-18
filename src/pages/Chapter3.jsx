import CodeBlock        from '../components/ui/CodeBlock';
import Concept          from '../components/ui/Concept';
import TaskBox          from '../components/ui/TaskBox';
import PageNav          from '../components/ui/PageNav';
import ChapterTabs      from '../components/ui/ChapterTabs';
import SlideCarousel    from '../components/ui/SlideCarousel';
import MarkdownViewer   from '../components/ui/MarkdownViewer';
import Quiz             from '../components/interactive/Quiz';
import FillExercise     from '../components/interactive/FillExercise';
import CodeLab          from '../components/interactive/CodeLab';
import { quizData }     from '../data/quizData';
import { fillChapter3 } from '../data/exerciseData';
import { labChapter3 }  from '../data/labData';
import ch3Md from '../data/md/uebung-ch3.md?raw';

export default function Chapter3({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">24.3</span>
        <h1>useState &amp; Controlled Inputs</h1>
        <p>Events, Zustandsverwaltung und Formulare in React</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={3} total={15} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <div className="grid-2">
            <Concept title="Synthetische Events">
              <p>
                React nutzt <em>Synthetic Events</em>, die über DOM-Events gelegt werden.
                Verhalten sich ähnlich wie native Events, harmonieren aber mit Reacts virtuellem DOM.
              </p>
            </Concept>
            <Concept title="State – Zustand" color="yellow">
              <p>
                Veränderlicher Zustand innerhalb einer Komponente. Ermöglicht dynamisches Verhalten.
                Wird mit dem Hook <code>useState()</code> verwaltet.
              </p>
            </Concept>
          </div>

          <CodeBlock filename="Event-Handler" lang="JSX">
            <span className="cmt">{'// Button-Click'}</span>{'\n'}
            <span className="kw">function</span>{' '}<span className="fn">MyButton</span>{'() {'}{'\n'}
            {'  '}<span className="kw">function</span>{' '}<span className="fn">handleClick</span>{'() { console.'}<span className="fn">log</span>{'('}<span className="str">'Klick!'</span>{'); }'}{'\n'}
            {'  '}<span className="kw">return</span>{' '}<span className="jsx">{'<button'}</span>{' '}<span className="var">onClick</span>={'{'}<span className="fn">handleClick</span>{'}'}<span className="jsx">{'>'}</span>Klick mich<span className="jsx">{'</button>'}</span>{';'}{'\n'}
            {'}'}{'\n\n'}
            <span className="cmt">{'// Formular – Seitenneuladen verhindern'}</span>{'\n'}
            <span className="kw">function</span>{' '}<span className="fn">handleSubmit</span>{'('}<span className="var">e</span>{') { '}<span className="var">e</span>.<span className="fn">preventDefault</span>{'(); }'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔄 useState – der Zustand-Hook</h3>

          <CodeBlock filename="Counter mit useState" lang="JSX">
            <span className="kw">import</span>{' { '}<span className="fn">useState</span>{' } '}<span className="kw">from</span>{' '}<span className="str">'react'</span>{';'}{'\n\n'}
            <span className="kw">function</span>{' '}<span className="fn">Counter</span>{'() {'}{'\n'}
            {'  '}<span className="cmt">{'// [aktueller Wert, Setter] = useState(Startwert)'}</span>{'\n'}
            {'  '}<span className="kw">const</span>{' ['}<span className="var">count</span>{', '}<span className="fn">setCount</span>{'] = '}<span className="fn">useState</span>{'('}<span className="num">0</span>{');'}{'\n\n'}
            {'  '}<span className="kw">return</span>{' ('}{'\n'}
            {'    '}<span className="jsx">{'<>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<p>'}</span>Zähler: {'{'}<span className="var">count</span>{'}'}<span className="jsx">{'</p>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<button'}</span>{' '}<span className="var">onClick</span>{'={() => '}<span className="fn">setCount</span>{'('}<span className="var">count</span>{' + '}<span className="num">1</span>{')'}<span className="jsx">{'>'}</span>+1<span className="jsx">{'</button>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <CodeBlock filename="Controlled Input – Login-Formular" lang="JSX">
            <span className="kw">function</span>{' '}<span className="fn">LoginForm</span>{'() {'}{'\n'}
            {'  '}<span className="kw">const</span>{' ['}<span className="var">email</span>{', '}<span className="fn">setEmail</span>{'] = '}<span className="fn">useState</span>{'('}<span className="str">''</span>{');'}{'\n'}
            {'  '}<span className="kw">const</span>{' ['}<span className="var">password</span>{', '}<span className="fn">setPassword</span>{'] = '}<span className="fn">useState</span>{'('}<span className="str">''</span>{');'}{'\n\n'}
            {'  '}<span className="kw">function</span>{' '}<span className="fn">handleSubmit</span>{'('}<span className="var">e</span>{') {'}{'\n'}
            {'    '}<span className="var">e</span>.<span className="fn">preventDefault</span>{'();'}{'\n'}
            {'    console.'}<span className="fn">log</span>{'({ '}<span className="var">email</span>{', '}<span className="var">password</span>{' });'}{'\n'}
            {'    '}<span className="fn">setEmail</span>{'('}<span className="str">''</span>{'); '}<span className="fn">setPassword</span>{'('}<span className="str">''</span>{'); '}<span className="cmt">{'// Reset'}</span>{'\n'}
            {'  }'}{'\n\n'}
            {'  '}<span className="kw">return</span>{' ('}{'\n'}
            {'    '}<span className="jsx">{'<form'}</span>{' '}<span className="var">onSubmit</span>={'{'}<span className="fn">handleSubmit</span>{'}'}<span className="jsx">{'>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<input'}</span>{' '}<span className="var">value</span>={'{'}<span className="var">email</span>{'}'}{' '}<span className="var">onChange</span>={'{'}<span className="var">e</span>{' => '}<span className="fn">setEmail</span>{'('}<span className="var">e</span>.target.value{')'}<span className="jsx">{'} />'}</span>{'\n'}
            {'      '}<span className="jsx">{'<input'}</span>{' '}<span className="var">type</span>='<span className="str">password</span>'{' '}<span className="var">value</span>={'{'}<span className="var">password</span>{'}'}{'\n'}
            {'             '}<span className="var">onChange</span>={'{'}<span className="var">e</span>{' => '}<span className="fn">setPassword</span>{'('}<span className="var">e</span>.target.value{')'}<span className="jsx">{'} />'}</span>{'\n'}
            {'      '}<span className="jsx">{'<button>'}</span>Anmelden<span className="jsx">{'</button>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</form>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="Stateful vs. Stateless" color="green">
              <p>Mit <code>useState()</code> → <strong>stateful</strong>. Ohne → <strong>stateless</strong>. Zusammengehöriger State an einer Stelle sammeln.</p>
            </Concept>
            <Concept title="Lokalität von State" color="purple">
              <p>State lebt lokal in seiner Komponente. Mehrere Instanzen = unabhängige States, unabhängige Lifecyclen.</p>
            </Concept>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <Quiz questions={quizData.chapter3} />
          <FillExercise data={fillChapter3} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter3} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Login-Formular mit Validierung" time="15 Min">
            <ol>
              <li>Kopiere den Login-Formular-Code in dein Projekt.</li>
              <li>Nach Absenden: E-Mail und Passwort zurücksetzen.</li>
              <li>Validierung: E-Mail gegen deine eigene, Passwort gegen <code>'123456'</code>.</li>
              <li>Bei Erfolg: State <code>isLoggedIn</code> → „User ist angemeldet" anzeigen.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch3Md} />
        </>}
      />

      <PageNav
        prevLabel="← 24.2 Komponenten"
        nextLabel="Weiter: Rendering & Listen →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
