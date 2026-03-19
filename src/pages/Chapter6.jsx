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
import { labChapter6 }   from '../data/labData';
import { bugChapter6 }   from '../data/bugData';
import { quizData }    from '../data/quizData';
import { fillChapter6, dragDropChapter6 } from '../data/exerciseData';
import ch6Md from '../data/md/uebung-ch6.md?raw';

export default function Chapter6({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">23.3</span>
        <h1>DOM, Events &amp; Interaktivität</h1>
        <p>DOM-Selektion, Manipulation, Event Listener, Formulare &amp; Event Delegation</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={6} total={20} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Heute machen wir Webseiten interaktiv – das Fundament für React-Komponenten!"
            <cite>— Tag 8, Webentwicklung Grundlagen II</cite>
          </blockquote>

          <h3 className="section-title">🌳 Was ist das DOM?</h3>
          <p>
            DOM = <strong>Document Object Model</strong> – der Browser repräsentiert jedes HTML-Element
            als JavaScript-Objekt in einem Baum. JavaScript kann jeden Knoten lesen und verändern.
          </p>

          <CodeBlock filename="DOM-Struktur" lang="html">
            <span className="cmt">{'<!-- HTML → DOM-Baum im Browser -->'}</span>{'\n'}
            {'document\n'}
            {'  └── html\n'}
            {'        ├── head → title\n'}
            {'        └── body\n'}
            {'              ├── h1\n'}
            {'              ├── p#intro\n'}
            {'              └── button.btn'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🔍 Elemente selektieren</h3>
          <div className="grid-2">
            <Card icon="⭐" title="querySelector()">
              Gibt das <strong>erste</strong> passende Element zurück.
              Nutzt CSS-Selektoren: <code>.class</code>, <code>#id</code>, <code>tag</code>.
            </Card>
            <Card icon="📋" title="querySelectorAll()">
              Gibt eine <strong>NodeList</strong> aller passenden Elemente zurück.
              Mit <code>forEach()</code> iterieren.
            </Card>
          </div>

          <CodeBlock filename="Selektoren.js" lang="js">
            <span className="cmt">// Ein Element</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">btn</span>{' = document.'}<span className="fn">querySelector</span>{'('}<span className="str">'#submit-btn'</span>{');'}{'\n'}
            <span className="kw">const</span>{' '}<span className="var">title</span>{' = document.'}<span className="fn">querySelector</span>{'('}<span className="str">'.page-title'</span>{');'}{'\n\n'}
            <span className="cmt">// Alle passenden Elemente</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">items</span>{' = document.'}<span className="fn">querySelectorAll</span>{'('}<span className="str">'li.item'</span>{');'}{'\n'}
            <span className="var">items</span>{'.'}<span className="fn">forEach</span>{'(el => '}<span className="fn">console</span>{'.log(el.textContent));'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">✏️ DOM manipulieren</h3>
          <CodeBlock filename="DOMManipulation.js" lang="js">
            <span className="kw">const</span>{' '}<span className="var">el</span>{' = document.'}<span className="fn">querySelector</span>{'('}<span className="str">'h1'</span>{');'}{'\n\n'}
            <span className="cmt">// Text ändern (sicher – kein HTML-Parsing)</span>{'\n'}
            <span className="var">el</span>{'.textContent = '}<span className="str">'Neuer Titel'</span>{';'}{'\n\n'}
            <span className="cmt">// CSS-Klassen (sicherer als className =)</span>{'\n'}
            <span className="var">el</span>{'.classList.'}<span className="fn">add</span>{'('}<span className="str">'active'</span>{');'}{'\n'}
            <span className="var">el</span>{'.classList.'}<span className="fn">remove</span>{'('}<span className="str">'hidden'</span>{');'}{'\n'}
            <span className="var">el</span>{'.classList.'}<span className="fn">toggle</span>{'('}<span className="str">'open'</span>{');'}{'\n\n'}
            <span className="cmt">// Attribut setzen</span>{'\n'}
            <span className="var">el</span>{'.'}<span className="fn">setAttribute</span>{'('}<span className="str">'data-id'</span>{', '}<span className="str">'42'</span>{');'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🖱️ Events mit addEventListener</h3>
          <div className="grid-2">
            <div>
              <p><strong>Wichtige Event-Typen:</strong></p>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="tbl">
                  <tbody>
                    {[
                      ['Maus', 'click, dblclick, mouseenter, mouseleave'],
                      ['Tastatur', 'keydown, keyup'],
                      ['Formular', 'submit, input, change, focus, blur'],
                      ['Window', 'load, resize, scroll'],
                    ].map(([type, events]) => (
                      <tr key={type}>
                        <td className="fname">{type}</td>
                        <td><code>{events}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <CodeBlock filename="EventListener.js" lang="js">
              <span className="kw">const</span>{' '}<span className="var">btn</span>{' = document.'}<span className="fn">querySelector</span>{'('}<span className="str">'#btn'</span>{');'}{'\n\n'}
              <span className="var">btn</span>{'.'}<span className="fn">addEventListener</span>{'('}<span className="str">'click'</span>{', (e) => {'}{'\n'}
              {'  '}<span className="fn">console</span>{'.log('}<span className="str">'Klick!'</span>{', e.target);'}{'\n'}
              {'  e.'}<span className="fn">preventDefault</span>{'(); '}<span className="cmt">// kein Reload</span>{'\n'}
              {'});'}
            </CodeBlock>
          </div>

          <hr className="div" />
          <h3 className="section-title">🎯 Event Delegation</h3>
          <p>
            Statt 100 Listener auf 100 Buttons: <strong>EIN Listener auf dem Parent-Element</strong>.
            Besser für Performance und dynamisch hinzugefügte Elemente.
          </p>
          <CodeBlock filename="EventDelegation.js" lang="js">
            <span className="kw">const</span>{' '}<span className="var">list</span>{' = document.'}<span className="fn">querySelector</span>{'('}<span className="str">'#item-list'</span>{');'}{'\n\n'}
            <span className="cmt">// Ein Listener für alle (auch neue!) Buttons:</span>{'\n'}
            <span className="var">list</span>{'.'}<span className="fn">addEventListener</span>{'('}<span className="str">'click'</span>{', (e) => {'}{'\n'}
            {'  '}<span className="kw">const</span>{' '}<span className="var">btn</span>{' = e.target.'}<span className="fn">closest</span>{'('}<span className="str">'[data-action="delete"]'</span>{');'}{'\n'}
            {'  '}<span className="kw">if</span>{' (!btn) '}<span className="kw">return</span>{';'}{'\n'}
            {'  btn.'}<span className="fn">closest</span>{'('}<span className="str">'li'</span>{')?.remove();'}{'\n'}
            {'});'}
          </CodeBlock>

          <div className="concept concept--react">
            <h4 className="concept-title">React-Verbindung</h4>
            <div className="concept-body">
              <p>
                In React übernimmt das Framework das DOM-Management. Statt <code>addEventListener</code>
                schreibt man <code>onClick</code>, <code>onSubmit</code> etc. direkt im JSX.
                Das Event-Objekt verhält sich fast identisch!
              </p>
            </div>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter6} />
          <DragDropExercise data={dragDropChapter6} />
          <Quiz questions={quizData.chapter6} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter6} labId="labChapter6" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Interaktive Todo-Liste (Vanilla JS)" time="25 Min">
            <ol>
              <li>Erstelle eine HTML-Datei mit einem Formular (Input + Button) und einer leeren <code>&lt;ul&gt;</code>.</li>
              <li>Selektiere alle Elemente mit <code>querySelector()</code>.</li>
              <li>Füge einen <code>submit</code>-Event Listener hinzu und verhindere den Standard-Submit.</li>
              <li>Erstelle neue <code>&lt;li&gt;</code>-Elemente mit <code>createElement()</code>.</li>
              <li>Füge Delete-Buttons hinzu und nutze <strong>Event Delegation</strong> für den Klick-Handler.</li>
              <li>Toggle eine CSS-Klasse <code>.done</code> beim Klick auf den Text.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch6Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter6} />}
      />

      <PageNav
        prevLabel="← 23.2 Arrays, Objects & Patterns"
        nextLabel="Weiter: Fetch, Async/Await & APIs →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
