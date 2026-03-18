import CodeBlock          from '../components/ui/CodeBlock';
import Concept            from '../components/ui/Concept';
import Card               from '../components/ui/Card';
import TaskBox            from '../components/ui/TaskBox';
import PageNav            from '../components/ui/PageNav';
import ChapterTabs        from '../components/ui/ChapterTabs';
import SlideCarousel      from '../components/ui/SlideCarousel';
import MarkdownViewer     from '../components/ui/MarkdownViewer';
import Quiz               from '../components/interactive/Quiz';
import DragDropExercise   from '../components/interactive/DragDropExercise';
import CodeLab            from '../components/interactive/CodeLab';
import { quizData }       from '../data/quizData';
import { dragDropChapter2 } from '../data/exerciseData';
import { labChapter2 }   from '../data/labData';
import ch2Md from '../data/md/uebung-ch2.md?raw';

export default function Chapter2({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">24.2</span>
        <h1>Komponenten &amp; Props</h1>
        <p>Bausteine der UI: Komposition, Containment, Spezialisierung &amp; Datenweitergabe</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={2} total={33} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Komponenten erlauben dir, die Benutzeroberfläche in unabhängige, wiederverwendbare Teile aufzubrechen."
            <cite>— React Dokumentation</cite>
          </blockquote>

          <div className="grid-3" style={{ marginTop: 16 }}>
            <Card icon="🧩" title="Komponente">
              <ul>
                <li>JavaScript-Funktion</li>
                <li>Gibt JSX zurück</li>
                <li>Name beginnt mit <strong>Großbuchstabe</strong></li>
              </ul>
            </Card>
            <Card icon="🗂️" title="Module">
              <ul>
                <li>Jede Komponente → eigene <code>.jsx</code>-Datei</li>
                <li><code>export default</code> macht Import eindeutig</li>
              </ul>
            </Card>
            <Card icon="📦" title="Props">
              <ul>
                <li>Kurz für <em>Properties</em></li>
                <li>Von außen übergeben</li>
                <li>Innerhalb unveränderlich</li>
              </ul>
            </Card>
          </div>

          <CodeBlock filename="Greeting.jsx – Komponente mit Props" lang="JSX">
            <span className="kw">function</span> <span className="fn">Greeting</span>
            {'({ '}<span className="var">name</span>{', '}<span className="var">role</span>{' }) {'}{'\n'}
            {'  '}<span className="kw">return</span>{' ('}{'\n'}
            {'    '}<span className="jsx">{'<div>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<h1>'}</span>Hallo, {'{'}<span className="var">name</span>{'}'}{' !'}<span className="jsx">{'</h1>'}</span>{'\n'}
            {'      '}<span className="jsx">{'<p>'}</span>Rolle: {'{'}<span className="var">role</span>{'}'}<span className="jsx">{'</p>'}</span>{'\n'}
            {'    '}<span className="jsx">{'</div>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}{'\n'}
            <span className="kw">export default</span> <span className="var">Greeting</span>;{'\n'}
            <span className="cmt">{'// Verwendung: <Greeting name="Lisa" role="Teilnehmerin" />'}</span>
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🏗️ Kompositions-Muster</h3>

          <div className="grid-2">
            <div>
              <Concept title="Komposition" color="green">
                <p>Komponenten, die aus anderen bestehen. JSX braucht <em>ein</em> Root-Element → Container oder Fragment.</p>
              </Concept>
              <CodeBlock filename="Fragment" lang="JSX">
                <span className="cmt">{'// <div> = echtes DOM-Element'}</span>{'\n'}
                <span className="kw">return</span>{' '}<span className="jsx">{'<div><Header /><Main /></div>'}</span>{';'}{'\n'}
                <span className="cmt">{'// <> = Fragment, kein DOM-Element'}</span>{'\n'}
                <span className="kw">return</span>{' '}<span className="jsx">{'<><Header /><Main /></>'}</span>{';'}
              </CodeBlock>
            </div>
            <div>
              <Concept title="Containment (children)" color="purple">
                <p>Kinder über die spezielle Prop <code>children</code> einbetten. Inhalt zur Design-Zeit unbekannt.</p>
              </Concept>
              <CodeBlock filename="children-Prop" lang="JSX">
                <span className="kw">function</span>{' '}<span className="fn">Card</span>
                {'({ '}<span className="var">children</span>{' }) {'}{'\n'}
                {'  '}<span className="kw">return</span>{' '}<span className="jsx">{'<div className="card">'}</span>
                {'{'}<span className="var">children</span>{'}'}<span className="jsx">{'</div>'}</span>{';'}{'\n'}
                {'}'}{'\n'}
                <span className="cmt">{'// Verwendung:'}</span>{'\n'}
                <span className="jsx">{'<Card><p>'}</span>Beliebiger Inhalt<span className="jsx">{'</p></Card>'}</span>
              </CodeBlock>
            </div>
          </div>

          <Concept title="Spezialisierung" color="orange">
            <p>
              Eine allgemeine Komponente wird durch Props zu einer spezifischeren Version,
              z.B. <code>HeadingMessage</code> als Spezialisierung von <code>Message</code>.
            </p>
          </Concept>

          <CodeBlock filename="Spread Operator bei Props" lang="JSX">
            <span className="kw">const</span>{' '}<span className="var">user</span>{' = { '}<span className="var">name</span>{': '}<span className="str">'Max'</span>{', '}<span className="var">role</span>{': '}<span className="str">'Admin'</span>{' };'}{'\n'}
            <span className="cmt">{'// Ohne Spread:'}</span>{'\n'}
            <span className="jsx">{'<Greeting'}</span>{' '}<span className="var">name</span>={'{'}<span className="var">user</span>.name{'}'}{' '}<span className="var">role</span>={'{'}<span className="var">user</span>.role{'}'}{' '}<span className="jsx">{'/>'}</span>{'\n'}
            <span className="cmt">{'// Mit Spread – kompakt:'}</span>{'\n'}
            <span className="jsx">{'<Greeting'}</span>{' {...'}<span className="var">user</span>{'}'}{' '}<span className="jsx">{'/>'}</span>
          </CodeBlock>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <Quiz questions={quizData.chapter2} />
          <DragDropExercise data={dragDropChapter2} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter2} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Komposition mit div & Fragment" time="15 Min">
            <ol>
              <li>Erstelle ein <code>hello-world</code>-Projekt mit den gezeigten Komponenten.</li>
              <li>Starte den Server – einmal mit <code>&lt;div&gt;</code>-Wrapper, einmal mit <code>&lt;&gt;</code>-Fragment.</li>
              <li>Vergleiche in den Browser-Entwicklertools das gerenderte HTML.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch2Md} />
        </>}
      />

      <PageNav
        prevLabel="← 24.1 React Setup"
        nextLabel="Weiter: useState & Inputs →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
