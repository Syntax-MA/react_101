import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import CodeBlock      from '../components/ui/CodeBlock';
import Concept        from '../components/ui/Concept';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import SlideCarousel  from '../components/ui/SlideCarousel';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import Quiz           from '../components/interactive/Quiz';
import { labChapter14 } from '../data/labData';
import { quizData }     from '../data/quizData';
import { fillChapter14, dragDropChapter14 } from '../data/exerciseData';
import ch14Md from '../data/md/uebung-ch14.md?raw';

export default function Chapter14({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">22.4</span>
        <h1>CSS Layout &amp; Responsive Design</h1>
        <p>Flexbox, CSS Grid, Media Queries &amp; Mobile-First-Ansatz</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={14} total={18} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „Flexbox für eine Achse, Grid für zwei – lern beide, wähle situationsbedingt."
            <cite>— Tag 4, CSS Layout</cite>
          </blockquote>

          <h3 className="section-title">📐 Flexbox vs. CSS Grid</h3>
          <div className="grid-2">
            <Card icon="↔️" title="Flexbox – 1D">
              Für Layouts <strong>entlang einer Achse</strong> (Zeile oder Spalte).
              Ideal für Navigationsleisten, Button-Gruppen, zentrierte Inhalte.
            </Card>
            <Card icon="⊞" title="CSS Grid – 2D">
              Für Layouts mit <strong>Zeilen und Spalten gleichzeitig</strong>.
              Ideal für Seitenstruktur, Karten-Raster, komplexe Layouts.
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">↔️ Flexbox</h3>
          <CodeBlock filename="flexbox.css" lang="css">
            {'.container {\n'}
            {'  display: flex;\n'}
            {'  flex-direction: row;          /* row | column */\n'}
            {'  justify-content: space-between; /* Hauptachse */\n'}
            {'  align-items: center;          /* Querachse */\n'}
            {'  gap: 1rem;                    /* Abstand zwischen Items */\n'}
            {'  flex-wrap: wrap;              /* Umbruch erlauben */\n'}
            {'}\n\n'}
            {'/* Flex-Items */\n'}
            {'.item       { flex: 1; }        /* Gleich verteilt */\n'}
            {'.main       { flex: 2; }        /* Doppelt so breit */\n'}
            {'.sidebar    { flex: 1; }'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">⊞ CSS Grid</h3>
          <CodeBlock filename="grid.css" lang="css">
            {'.grid {\n'}
            {'  display: grid;\n'}
            {'  grid-template-columns: repeat(3, 1fr);  /* 3 gleiche Spalten */\n'}
            {'  gap: 1.5rem;\n'}
            {'}\n\n'}
            {'/* Responsives Grid – passt sich automatisch an */\n'}
            {'.card-grid {\n'}
            {'  display: grid;\n'}
            {'  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n'}
            {'  gap: 1rem;\n'}
            {'}'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📱 Responsive Design</h3>
          <p>
            <strong>Mobile-First</strong>: Erst für kleine Bildschirme stylen,
            dann mit Media Queries für größere erweitern.
          </p>
          <CodeBlock filename="responsive.css" lang="css">
            {'/* Viewport-Meta ist Pflicht! (im <head>) */\n'}
            {'/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */\n\n'}
            {'/* Mobile (Basis – kein Media Query nötig) */\n'}
            {'.grid { grid-template-columns: 1fr; }\n\n'}
            {'/* Tablet */\n'}
            {'@media (min-width: 768px) {\n'}
            {'  .grid { grid-template-columns: repeat(2, 1fr); }\n'}
            {'}\n\n'}
            {'/* Desktop */\n'}
            {'@media (min-width: 1024px) {\n'}
            {'  .grid { grid-template-columns: repeat(3, 1fr); }\n'}
            {'}'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">⚠️ Häufige Layout-Fehler</h3>
          <div className="grid-3">
            <Concept color="orange" title="Horizontales Scrollen">
              Ursache: feste Breiten die über 100vw gehen.
              Fix: <code>box-sizing: border-box</code> + <code>max-width: 100%</code>
            </Concept>
            <Concept color="orange" title="Kein flex-wrap">
              Flex-Items quetschen sich statt umzubrechen.
              Fix: <code>flex-wrap: wrap</code> setzen.
            </Concept>
            <Concept color="orange" title="Bilder zu groß">
              Bilder springen aus dem Layout.
              Fix: <code>img {'{ max-width: 100%; height: auto; }'}</code>
            </Concept>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter14} />
          <DragDropExercise data={dragDropChapter14} />
          <Quiz questions={quizData.chapter14} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter14} />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Responsive Layout mit Flexbox &amp; Grid" time="45 Min">
            <ol>
              <li>Erstelle eine Navigation mit <strong>Flexbox</strong>: Logo links, Links rechts</li>
              <li>Baue ein <strong>Karten-Grid</strong> mit 6 Karten (3 Spalten auf Desktop)</li>
              <li>Füge Media Queries hinzu: 2 Spalten ab 768px, 1 Spalte auf Mobil</li>
              <li>Teste im DevTools → <strong>Toggle Device Toolbar</strong> (Strg+Shift+M)</li>
              <li>Aktiviere die <strong>Grid/Flex-Overlays</strong> im Elements-Tab (orangefarbene Icons)</li>
              <li>Beobachte wie sich das Layout bei unterschiedlichen Fensterbreiten ändert</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch14Md} />
        </>}
      />

      <PageNav
        prevLabel="← CSS Grundlagen"
        nextLabel="Weiter: Portfolio-Projekt →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
