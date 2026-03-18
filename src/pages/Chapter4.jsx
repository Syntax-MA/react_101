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
import { dragDropChapter4 } from '../data/exerciseData';
import { labChapter4 }   from '../data/labData';
import ch4Md from '../data/md/uebung-ch4.md?raw';

export default function Chapter4({ onPrev, onFinish }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">24.4</span>
        <h1>Rendering, Listen &amp; Keys</h1>
        <p>map(), Arrow-Funktionen, Listen in JSX und bedingtes Rendering</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={4} total={21} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <h3 className="section-title">🔁 map() &amp; Arrow-Funktionen</h3>

          <CodeBlock filename="Array transformieren" lang="JS">
            <span className="kw">const</span>{' '}<span className="var">names</span>{' = ['}<span className="str">'Anna'</span>{', '}<span className="str">'Ben'</span>{', '}<span className="str">'Clara'</span>{'];'}{'\n\n'}
            <span className="cmt">{'// Klassisch'}</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">upper</span>{' = '}<span className="var">names</span>.<span className="fn">map</span>{'('}<span className="kw">function</span>{'('}<span className="var">n</span>{') { '}<span className="kw">return</span>{' '}<span className="var">n</span>.<span className="fn">toUpperCase</span>{'(); });'}{'\n\n'}
            <span className="cmt">{'// Arrow-Syntax'}</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">upper2</span>{' = '}<span className="var">names</span>.<span className="fn">map</span>{'('}<span className="var">n</span>{' => '}<span className="var">n</span>.<span className="fn">toUpperCase</span>{'());'}{'\n\n'}
            <span className="cmt">{'// Mit Index'}</span>{'\n'}
            <span className="kw">const</span>{' '}<span className="var">numbered</span>{' = '}<span className="var">names</span>.<span className="fn">map</span>{'(('}<span className="var">n</span>{', '}<span className="var">i</span>{') => `${i+1}. ${n}`);'}
          </CodeBlock>

          <CodeBlock filename="Liste mit key in React" lang="JSX">
            <span className="kw">const</span>{' '}<span className="var">users</span>{' = [{ '}<span className="var">id</span>{':'}<span className="num">1</span>{', '}<span className="var">name</span>{':'}<span className="str">'Anna'</span>{' }, { '}<span className="var">id</span>{':'}<span className="num">2</span>{', '}<span className="var">name</span>{':'}<span className="str">'Ben'</span>{' }];'}{'\n\n'}
            <span className="kw">function</span>{' '}<span className="fn">UserList</span>{'() {'}{'\n'}
            {'  '}<span className="kw">return</span>{' ('}{'\n'}
            {'    '}<span className="jsx">{'<ul>'}</span>{'\n'}
            {'      {'}<span className="var">users</span>.<span className="fn">map</span>{'('}<span className="var">u</span>{' => ('}{'\n'}
            {'        '}<span className="jsx">{'<li'}</span>{' '}<span className="var">key</span>={'{'}<span className="var">u</span>.id{'}'}<span className="jsx">{'>'}</span>{'{'}<span className="var">u</span>.name{'}'}<span className="jsx">{'</li>'}</span>{'\n'}
            {'      ))}'}{'\n'}
            {'    '}<span className="jsx">{'</ul>'}</span>{'\n'}
            {'  );'}{'\n'}
            {'}'}{'\n'}
            <span className="cmt">{'// ✅ id ist ideal als key, ❌ Array-Index nur als Notlösung'}</span>
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🎛️ Bedingtes Rendering</h3>

          <div className="grid-2">
            <div>
              <Concept title="&& – Logisches UND">
                <p>Rendert rechts, <em>nur wenn</em> links <code>truthy</code> ist.</p>
              </Concept>
              <CodeBlock filename="&&" lang="JSX">
                {'{'}<span className="var">isLoggedIn</span>{' && '}<span className="jsx">{'<p>'}</span>Willkommen!<span className="jsx">{'</p>'}</span>{'}'}
              </CodeBlock>
              <Concept title="|| – Fallback" color="orange">
                <p>Zeigt rechte Seite wenn links <code>falsy</code>.</p>
              </Concept>
              <CodeBlock filename="||" lang="JSX">
                {'{'}<span className="var">username</span>{' || '}<span className="str">'Gast'</span>{'}'}
              </CodeBlock>
            </div>
            <div>
              <Concept title="? : – Ternär" color="purple">
                <p>if-else Ersatz: truthy → zweiter Teil; falsy → dritter Teil.</p>
              </Concept>
              <CodeBlock filename="Ternär" lang="JSX">
                {'{'}<span className="var">isLoading</span>{' ? '}<span className="jsx">{'<Spinner />'}</span>{' : '}<span className="jsx">{'<Content />'}</span>{'}'}
              </CodeBlock>
              <Concept title="Early Return" color="green">
                <p>Fehler-Fälle zuerst abfangen. Macht Code lesbarer, vermeidet Verschachtelung.</p>
              </Concept>
              <CodeBlock filename="Early Return" lang="JSX">
                <span className="kw">if</span>{' (!'}<span className="var">data</span>{') '}<span className="kw">return</span>{' '}<span className="jsx">{'<p>'}</span>Lädt…<span className="jsx">{'</p>'}</span>{';'}{'\n'}
                <span className="kw">return</span>{' '}<span className="jsx">{'<Main'}</span>{' '}<span className="var">data</span>={'{'}<span className="var">data</span>{'}'}{' '}<span className="jsx">{'/>'}</span>{';'}
              </CodeBlock>
            </div>
          </div>

          <Card title="⚠️ Was JSX rendert (und was nicht)">
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div>
                <p style={{ color: 'var(--green)', fontWeight: 600, marginBottom: 6 }}>✅ Wird gerendert:</p>
                <div className="tag-list">
                  {['0', '"" (leerer String)', 'Zahlen', 'Strings', 'JSX-Elemente'].map(t => (
                    <span key={t} className="tpill">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ color: 'var(--muted)', fontWeight: 600, marginBottom: 6 }}>❌ Wird NICHT gerendert:</p>
                <div className="tag-list">
                  {['null', 'false', 'undefined', '[] (leerer Array)', '<></> (leeres Fragment)'].map(t => (
                    <span key={t} className="tpill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
        checkContent={<>
          <Quiz questions={quizData.chapter4} />
          <DragDropExercise data={dragDropChapter4} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter4} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="map() & Arrow-Funktionen üben" time="15 Min">
            <ol>
              <li>Lege eine <code>.js</code>-Datei in deinem Projekt an.</li>
              <li><strong>Lieblingstiere:</strong> Array als Strings, Großbuchstaben per <code>map()</code>, ausgeben.</li>
              <li><strong>Preise:</strong> Mit <code>Math.ceil()</code> runden, <code>"€"</code> anhängen, ausgeben.</li>
              <li>Tiere als <code>&lt;ul&gt;</code>-Liste in React rendern – mit korrekten <code>key</code>-Attributen.</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch4Md} />
        </>}
      />

      <PageNav
        prevLabel="← 24.3 useState"
        nextLabel="🎉 Kurs abschließen"
        onPrev={onPrev}
        onNext={onFinish}
      />
    </div>
  );
}
