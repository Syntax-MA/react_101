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
import BugFinder      from '../components/interactive/BugFinder';
import Quiz           from '../components/interactive/Quiz';
import { labChapter12 } from '../data/labData';
import { bugChapter10 }   from '../data/bugData';
import { quizData }     from '../data/quizData';
import { fillChapter12, dragDropChapter12 } from '../data/exerciseData';
import ch12Md from '../data/md/uebung-ch12.md?raw';

export default function Chapter12({ onPrev, onNext }) {
  return (
    <div className="page-inner">
      <div className="page-header">
        <span className="chapter-tag">22.2</span>
        <h1>HTML: Struktur, Semantik &amp; Formulare</h1>
        <p>HTML5-Grundgerüst, semantische Elemente, Links, Pfade &amp; interaktive Formulare</p>
      </div>

      <ChapterTabs
        /* ── 1. Slides ─────────────────────────────────────── */
        slidesContent={
          <SlideCarousel chapter={12} total={20} />
        }

        /* ── 2. Key Learnings ──────────────────────────────── */
        learningsContent={<>
          <blockquote>
            „HTML ist das Skelett des Webs – ohne Struktur kein Inhalt."
            <cite>— Tag 2, HTML Grundlagen</cite>
          </blockquote>

          <h3 className="section-title">📄 HTML5-Grundgerüst</h3>
          <CodeBlock filename="index.html" lang="html">
            {'<!DOCTYPE html>\n'}
            {'<html lang="de">\n'}
            {'<head>\n'}
            {'  <meta charset="UTF-8">\n'}
            {'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'}
            {'  <title>Meine Seite</title>\n'}
            {'</head>\n'}
            {'<body>\n'}
            {'  <h1>Hallo Welt!</h1>\n'}
            {'</body>\n'}
            {'</html>'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">🏗️ Semantische Elemente</h3>
          <p>
            Semantische Elemente beschreiben die <strong>Bedeutung</strong> des Inhalts –
            nicht nur sein Aussehen. Sie helfen Suchmaschinen, Screen-Readern und Entwicklern.
          </p>
          <div className="grid-3">
            <Card icon="🔝" title="&lt;header&gt;">
              Kopfbereich der Seite oder eines Abschnitts.
              Enthält oft Logo und Navigation.
            </Card>
            <Card icon="🧭" title="&lt;nav&gt;">
              Navigationsbereich mit Links zu anderen Seiten oder Abschnitten.
            </Card>
            <Card icon="📋" title="&lt;main&gt;">
              Hauptinhalt der Seite – nur einmal pro Dokument verwenden.
            </Card>
            <Card icon="📦" title="&lt;section&gt;">
              Thematisch zusammengehörender Abschnitt mit eigenem Kontext.
            </Card>
            <Card icon="📰" title="&lt;article&gt;">
              In sich geschlossener, eigenständiger Inhalt (Blog-Post, News-Artikel).
            </Card>
            <Card icon="🔻" title="&lt;footer&gt;">
              Fußbereich mit Copyright, Impressum, Links.
            </Card>
          </div>

          <hr className="div" />
          <h3 className="section-title">🔗 Links &amp; Pfade</h3>
          <CodeBlock filename="links.html" lang="html">
            {'<!-- Relativer Link (gleicher Ordner) -->\n'}
            {'<a href="about.html">Über mich</a>\n\n'}
            {'<!-- Relativer Link (Unterordner) -->\n'}
            {'<a href="pages/contact.html">Kontakt</a>\n\n'}
            {'<!-- Externer Link (neuer Tab) -->\n'}
            {'<a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN</a>\n\n'}
            {'<!-- Anker-Link (gleiche Seite) -->\n'}
            {'<a href="#about">Zu #about springen</a>'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">📝 Formulare</h3>
          <CodeBlock filename="form.html" lang="html">
            {'<form action="/submit" method="POST">\n'}
            {'  <!-- Text, E-Mail, Passwort -->\n'}
            {'  <input type="text"     name="name"  required minlength="2">\n'}
            {'  <input type="email"    name="email" required>\n'}
            {'  <input type="password" name="pw"    required>\n\n'}
            {'  <!-- Mehrzeiliger Text -->\n'}
            {'  <textarea name="message" rows="4"></textarea>\n\n'}
            {'  <!-- Dropdown -->\n'}
            {'  <select name="topic">\n'}
            {'    <option value="general">Allgemein</option>\n'}
            {'    <option value="support">Support</option>\n'}
            {'  </select>\n\n'}
            {'  <!-- Checkbox & Radio -->\n'}
            {'  <input type="checkbox" name="terms" required>\n'}
            {'  <input type="radio"    name="plan" value="free">\n\n'}
            {'  <button type="submit">Absenden</button>\n'}
            {'</form>'}
          </CodeBlock>

          <hr className="div" />
          <h3 className="section-title">✅ Formular-Validierung</h3>
          <div className="grid-3">
            <Concept color="green" title="required">
              Feld muss ausgefüllt sein.
            </Concept>
            <Concept color="green" title="minlength / maxlength">
              Mindest- und Maximallänge für Text-Eingaben.
            </Concept>
            <Concept color="green" title="pattern">
              Regulärer Ausdruck für erlaubte Eingaben.
              <code>pattern="[A-Za-z]+"</code>
            </Concept>
          </div>
        </>}

        /* ── 3. Knowledge Check ────────────────────────────── */
                checkContent={<>
          <FillExercise data={fillChapter12} />
          <DragDropExercise data={dragDropChapter12} />
          <Quiz questions={quizData.chapter12} />
        </>}

        /* ── 4. Lab ────────────────────────────────────────── */
        labContent={
          <CodeLab data={labChapter12} labId="labChapter12" />
        }

        /* ── 5. Übung ──────────────────────────────────────── */
        uebungContent={<>
          <TaskBox title="Persönliche HTML-Seite bauen" time="45 Min">
            <ol>
              <li>Erstelle eine Datei <code>index.html</code> mit dem korrekten HTML5-Grundgerüst</li>
              <li>Füge semantische Elemente hinzu: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code></li>
              <li>Erstelle mindestens 2 <code>&lt;section&gt;</code>-Bereiche mit Überschriften und Absätzen</li>
              <li>Baue ein Kontaktformular mit: Text, E-Mail, Textarea und Submit-Button</li>
              <li>Füge <code>required</code>-Validierung zu allen Feldern hinzu</li>
              <li>Öffne die Seite im Browser und teste das Formular (DevTools → Network-Tab)</li>
            </ol>
          </TaskBox>
          <MarkdownViewer content={ch12Md} />
        </>}

        bugsContent={<BugFinder data={bugChapter10} />}
      />

      <PageNav
        prevLabel="← Webarchitektur & HTTP"
        nextLabel="Weiter: CSS Grundlagen →"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
