import Card           from '../components/ui/Card';
import TaskBox        from '../components/ui/TaskBox';
import PageNav        from '../components/ui/PageNav';
import ChapterTabs    from '../components/ui/ChapterTabs';
import Concept        from '../components/ui/Concept';
import MarkdownViewer from '../components/ui/MarkdownViewer';
import FillExercise    from '../components/interactive/FillExercise';
import DragDropExercise from '../components/interactive/DragDropExercise';
import CodeLab        from '../components/interactive/CodeLab';
import BugFinder      from '../components/interactive/BugFinder';
import Quiz           from '../components/interactive/Quiz';
import { quizData }    from '../data/quizData';
import { labChapter15 } from '../data/labData';
import { bugChapter13 }   from '../data/bugData';
import { fillChapter15, dragDropChapter15 } from '../data/exerciseData';
import ch15Md from '../data/md/uebung-ch15.md?raw';

export default function Chapter15({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">22.5</span>
        <h1>Portfolio-Projekt ✨</h1>
        <p>Alles zusammenbringen: HTML, CSS, Flexbox, Grid &amp; Responsive Design</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <div className="check-empty">
            <p className="check-note">
              📄 Keine separaten Folien für das Portfolio-Projekt.
              Die vollständige Aufgabenstellung findest du im Tab <strong>Übung</strong>.
            </p>
          </div>
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <Card title="📚 Woche 1 – HTML & CSS im Überblick">
            <p>Alle Konzepte der Woche kurz zusammengefasst – zum Nachschlagen beim Portfolio-Projekt.</p>
          </Card>

          {/* ── 22.1 HTTP & WEBARCHITEKTUR ──────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🌐 22.1 – Webarchitektur &amp; HTTP</h3>

          <div className="grid-2">
            <Concept title="HTTP-Methoden (CRUD)">
              <code>GET</code> lesen · <code>POST</code> erstellen · <code>PUT/PATCH</code> ändern · <code>DELETE</code> löschen
            </Concept>
            <Concept title="Status-Codes" color="orange">
              <code>2xx</code> Erfolg · <code>3xx</code> Weiterleitung · <code>4xx</code> Client-Fehler · <code>5xx</code> Server-Fehler
            </Concept>
          </div>

          <CodeBlock filename="URL-Aufbau & REST-Pfade" lang="bash">
            <span className="cmt"># URL-Bestandteile:</span>{'\n'}
            {'https://api.example.com:8080/users?sort=name#top\n'}
            {'│       │               │    │     │         └─ Fragment\n'}
            {'│       │               │    │     └─────────── Query-String\n'}
            {'│       │               │    └─────────────── Pfad (pathname)\n'}
            {'│       │               └──────────────────── Port\n'}
            {'│       └────────────────────────────────────── Host\n'}
            {'└──────────────────────────────────────────────── Protokoll\n\n'}
            <span className="cmt"># REST-Muster:</span>{'\n'}
            {'GET    /users          → alle User\n'}
            {'GET    /users/42       → User 42\n'}
            {'POST   /users          → neuen User anlegen\n'}
            {'DELETE /users/42       → User 42 löschen'}
          </CodeBlock>

          {/* ── 22.2 HTML ───────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">📄 22.2 – HTML: Struktur &amp; Semantik</h3>

          <CodeBlock filename="Semantische Seitenstruktur" lang="html">
            {'<!DOCTYPE html>\n'}
            {'<html lang="de">\n'}
            {'<head>\n'}
            {'  <meta charset="UTF-8">\n'}
            {'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'}
            {'  <title>Mein Portfolio</title>\n'}
            {'  <link rel="stylesheet" href="style.css">\n'}
            {'</head>\n'}
            {'<body>\n'}
            {'  <header>            <!-- Kopfbereich -->\n'}
            {'    <nav>...</nav>    <!-- Navigation -->\n'}
            {'  </header>\n'}
            {'  <main>              <!-- Hauptinhalt -->\n'}
            {'    <section>...</section>\n'}
            {'    <article>...</article>\n'}
            {'    <aside>...</aside>\n'}
            {'  </main>\n'}
            {'  <footer>...</footer>\n'}
            {'</body>\n'}
            {'</html>'}
          </CodeBlock>

          <div className="grid-2">
            <Concept title="Semantische Elemente">
              <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>aside</code>, <code>footer</code> — beschreiben die <em>Bedeutung</em>, nicht nur das Aussehen.
            </Concept>
            <Concept title="Formulare & Validierung" color="orange">
              <code>required</code>, <code>type="email"</code>, <code>pattern="..."</code> — Browser-seitige Validierung ohne JS. <code>label for</code> ↔ <code>input id</code> für Accessibility.
            </Concept>
          </div>

          {/* ── 22.3 CSS ────────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">🎨 22.3 – CSS: Selektoren, Box-Modell &amp; Spezifität</h3>

          <CodeBlock filename="CSS-Grundregeln & Selektoren" lang="css">
            <span className="cmt">{'/* Element → Klasse → ID → inline  (steigende Spezifität) */'}</span>{'\n'}
            {'p           { color: gray; }    '}<span className="cmt">{'/* 0-0-1 */'}</span>{'\n'}
            {'.highlight  { color: blue; }    '}<span className="cmt">{'/* 0-1-0 */'}</span>{'\n'}
            {'#title      { color: red;  }    '}<span className="cmt">{'/* 1-0-0 */'}</span>{'\n\n'}
            <span className="cmt">{'/* Pseudo-Klassen & Pseudo-Elemente */'}</span>{'\n'}
            {'a:hover              { text-decoration: underline; }\n'}
            {'li:nth-child(even)   { background: #f5f5f5; }\n'}
            {'.card::before        { content: "★ "; color: gold; }\n\n'}
            <span className="cmt">{'/* CSS-Variablen */'}</span>{'\n'}
            {':root {\n'}
            {'  --primary: #667eea;\n'}
            {'  --radius:  8px;\n'}
            {'}\n'}
            {'.btn { background: var(--primary); border-radius: var(--radius); }'}
          </CodeBlock>

          <Concept title="Das Box-Modell" color="purple">
            <strong>content</strong> → <strong>padding</strong> → <strong>border</strong> → <strong>margin</strong>. Mit <code>box-sizing: border-box</code> ist <code>width</code> inkl. padding &amp; border — empfohlen für alle Elemente (<code>* {'{'} box-sizing: border-box {'}'}</code>).
          </Concept>

          {/* ── 22.4 LAYOUT ─────────────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">📱 22.4 – CSS Layout &amp; Responsive Design</h3>

          <CodeBlock filename="Flexbox – die wichtigsten Properties" lang="css">
            <span className="cmt">{'/* Container */'}</span>{'\n'}
            {'.nav {\n'}
            {'  display:         flex;\n'}
            {'  flex-direction:  row;             '}<span className="cmt">{'/* row | column */'}</span>{'\n'}
            {'  justify-content: space-between;   '}<span className="cmt">{'/* Haupt-Achse */'}</span>{'\n'}
            {'  align-items:     center;          '}<span className="cmt">{'/* Kreuz-Achse */'}</span>{'\n'}
            {'  flex-wrap:       wrap;            '}<span className="cmt">{'/* Zeilenumbruch */'}</span>{'\n'}
            {'  gap:             16px;\n'}
            {'}\n\n'}
            <span className="cmt">{'/* Kind */'}</span>{'\n'}
            {'.item { flex: 1 1 250px; } '}<span className="cmt">{'/* grow shrink basis */'}</span>
          </CodeBlock>

          <CodeBlock filename="CSS Grid & Media Queries" lang="css">
            <span className="cmt">{'/* Grid */'}</span>{'\n'}
            {'.grid {\n'}
            {'  display: grid;\n'}
            {'  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n'}
            {'  gap: 24px;\n'}
            {'}\n\n'}
            <span className="cmt">{'/* Mobile-First (zuerst kleines Display, dann erweitern) */'}</span>{'\n'}
            {'.container { padding: 16px; }\n\n'}
            {'@media (min-width: 768px) {\n'}
            {'  .container { padding: 32px; }\n'}
            {'  .grid { grid-template-columns: repeat(2, 1fr); }\n'}
            {'}\n\n'}
            {'@media (min-width: 1024px) {\n'}
            {'  .grid { grid-template-columns: repeat(3, 1fr); }\n'}
            {'}'}
          </CodeBlock>

          {/* ── PORTFOLIO CHECKLISTE ────────────────────────── */}
          <hr className="div" />
          <h3 className="section-title">✅ Portfolio-Checkliste</h3>

          <Card title="Was dein Portfolio braucht">
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 6 }}>📄 HTML</p>
                {['Valides HTML5 mit DOCTYPE', 'Semantische Elemente (header, main, footer…)', 'Kontaktformular mit required + type', 'Bilder mit alt-Attribut', 'Meta-Tags (charset, viewport)'].map(t => (
                  <p key={t} style={{ fontSize: 13, marginBottom: 4 }}>✅ {t}</p>
                ))}
              </div>
              <div>
                <p style={{ fontWeight: 600, marginBottom: 6 }}>🎨 CSS</p>
                {['Externes Stylesheet verknüpft', 'Navigation mit Flexbox', 'Cards/Grid-Layout', ':hover-Effekte', 'Mindestens 1 Media Query (responsive)'].map(t => (
                  <p key={t} style={{ fontSize: 13, marginBottom: 4 }}>✅ {t}</p>
                ))}
              </div>
            </div>
          </Card>

          <hr className="div" />
          <h3 className="section-title">🚀 Zwei Wege</h3>
          <div className="grid-2">
            <Card icon="🆓" title="Weg A – Freie Wahl">
              Erstelle eine Website zu einem Thema deiner Wahl:
              Portfolio, Fan-Seite, Produktseite oder Unternehmens-Mock.
              Alle Kriterien müssen trotzdem erfüllt sein.
            </Card>
            <Card icon="📋" title="Weg B – Geführtes Portfolio">
              Folge den Schritten in der Aufgabenstellung (Tab Übung).
              Header + Nav, drei Sektionen, Kontaktformular, CSS-Styling, Responsive.
            </Card>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter15} />
          <DragDropExercise data={dragDropChapter15} />
          <Quiz questions={quizData.chapter15} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter15} labId="labChapter15" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Portfolio-Projekt bauen" time="90–120 Min">
            <ol>
              <li>Wähle <strong>Weg A</strong> (freies Thema) oder <strong>Weg B</strong> (geführtes Portfolio)</li>
              <li>Erstelle die Projektstruktur: <code>portfolio/index.html</code> und <code>portfolio/style.css</code></li>
              <li>Baue das HTML-Gerüst mit allen semantischen Elementen</li>
              <li>Style die Seite mit CSS: Navigation (Flexbox), Inhaltsbereich, Karten (Grid)</li>
              <li>Füge mindestens 2 Media Queries für Responsive Design hinzu</li>
              <li>Schreibe eine kurze <code>README.md</code>: Was hast du gebaut? Was hast du gelernt?</li>
              <li>Mache einen Screenshot und stelle das Projekt vor</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch15Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter13} />}
      />

      <PageNav
        prevLabel="← CSS Layout & Responsive"
        nextLabel="Weiter: JavaScript Fundamentals →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
