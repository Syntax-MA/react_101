/**
 * Quiz-Daten für alle Kapitel
 * Jedes Quiz hat 3 Fragen mit je 4 Antwortmöglichkeiten.
 *
 * Felder:
 *   question  – Fragetext
 *   choices   – Array von { id, text }
 *   correct   – id der richtigen Antwort
 *   feedback  – { ok, nok } Erklärungstexte (HTML-String erlaubt)
 */

export const quizData = {
  // ── 22.1 Webarchitektur & HTTP ────────────────────────────
  chapter11: [
    {
      question: 'Welche HTTP-Methode wird verwendet, um neue Daten auf einem Server zu erstellen?',
      choices: [
        { id: 'a', text: 'GET' },
        { id: 'b', text: 'POST' },
        { id: 'c', text: 'PUT' },
        { id: 'd', text: 'DELETE' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>POST</strong> wird zum Erstellen neuer Ressourcen verwendet.',
        nok: 'Falsch. <strong>POST</strong> ist die korrekte Methode zum Erstellen neuer Daten.',
      },
    },
    {
      question: 'Was bedeutet der HTTP-Status-Code 404?',
      choices: [
        { id: 'a', text: 'Die Anfrage war erfolgreich' },
        { id: 'b', text: 'Der Server hat einen internen Fehler' },
        { id: 'c', text: 'Die angeforderte Ressource wurde nicht gefunden' },
        { id: 'd', text: 'Die Anfrage wird weitergeleitet' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>404 Not Found</strong> bedeutet, die Ressource existiert nicht.',
        nok: 'Falsch. <strong>404 Not Found</strong> = Ressource nicht gefunden (Client-Fehler).',
      },
    },
    {
      question: 'Was ist der Unterschied zwischen Internet und World Wide Web?',
      choices: [
        { id: 'a', text: 'Es gibt keinen Unterschied – beide Begriffe bedeuten dasselbe' },
        { id: 'b', text: 'Das Internet ist die globale Infrastruktur; das WWW ist ein Dienst, der darüber läuft' },
        { id: 'c', text: 'Das WWW ist die Hardware, das Internet die Software' },
        { id: 'd', text: 'Das Internet ist nur für E-Mails, das WWW nur für Webseiten' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Das Internet ist die globale Infrastruktur. Das WWW ist <strong>ein Dienst</strong>, der über das Internet läuft.',
        nok: 'Falsch. Das Internet ist die Infrastruktur (Kabel, Router). Das WWW ist ein Dienst darüber – neben E-Mail, FTP etc.',
      },
    },
  ],

  // ── 22.2 HTML: Struktur, Semantik & Formulare ─────────────
  chapter12: [
    {
      question: 'Welches HTML-Element beschreibt den Hauptinhalt einer Seite (darf nur einmal vorkommen)?',
      choices: [
        { id: 'a', text: '<section>' },
        { id: 'b', text: '<div>' },
        { id: 'c', text: '<main>' },
        { id: 'd', text: '<article>' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>&lt;main&gt;</strong> enthält den Hauptinhalt und darf nur einmal pro Dokument erscheinen.',
        nok: 'Falsch. <strong>&lt;main&gt;</strong> ist das semantische Element für den Hauptinhalt der Seite.',
      },
    },
    {
      question: 'Welches Attribut verhindert, dass ein Formularfeld leer abgesendet werden kann?',
      choices: [
        { id: 'a', text: 'validate' },
        { id: 'b', text: 'mandatory' },
        { id: 'c', text: 'required' },
        { id: 'd', text: 'notempty' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Das <strong>required</strong>-Attribut macht ein Formularfeld zur Pflichtangabe.',
        nok: 'Falsch. Das korrekte Attribut ist <strong>required</strong>.',
      },
    },
    {
      question: 'Was ist der Unterschied zwischen GET und POST bei Formularen?',
      choices: [
        { id: 'a', text: 'GET ist schneller, POST ist langsamer' },
        { id: 'b', text: 'GET hängt Daten an die URL, POST sendet sie im Request-Body' },
        { id: 'c', text: 'POST verschlüsselt Daten, GET nicht' },
        { id: 'd', text: 'Es gibt keinen praktischen Unterschied' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>GET</strong> übergibt Formulardaten als URL-Parameter, <strong>POST</strong> sendet sie im Body (sicherer für sensible Daten).',
        nok: 'Falsch. GET hängt Daten an die URL (sichtbar), POST sendet sie im Request-Body (nicht in der URL sichtbar).',
      },
    },
  ],

  // ── 22.3 CSS Grundlagen ───────────────────────────────────
  chapter13: [
    {
      question: 'Welcher CSS-Selektor hat die höchste Spezifität?',
      choices: [
        { id: 'a', text: 'Element-Selektor (p)' },
        { id: 'b', text: 'Klassen-Selektor (.card)' },
        { id: 'c', text: 'ID-Selektor (#header)' },
        { id: 'd', text: 'Pseudo-Klasse (:hover)' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>ID-Selektoren</strong> haben die höchste Spezifität: (1,0,0) vs. Klasse (0,1,0) vs. Element (0,0,1).',
        nok: 'Falsch. Der <strong>ID-Selektor (#id)</strong> hat die höchste Spezifität.',
      },
    },
    {
      question: 'Was bewirkt "box-sizing: border-box"?',
      choices: [
        { id: 'a', text: 'Das Element bekommt einen sichtbaren Rahmen' },
        { id: 'b', text: 'Padding und Border werden in die angegebene Breite eingerechnet' },
        { id: 'c', text: 'Das Box-Modell wird deaktiviert' },
        { id: 'd', text: 'Margin wird auf 0 gesetzt' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Mit <strong>border-box</strong> sind Padding und Border in der width enthalten – das erleichtert Layout-Berechnungen.',
        nok: 'Falsch. <strong>box-sizing: border-box</strong> rechnet Padding und Border in die angegebene width ein.',
      },
    },
    {
      question: 'Warum sollten Klassen gegenüber IDs in CSS bevorzugt werden?',
      choices: [
        { id: 'a', text: 'Klassen laden schneller als IDs' },
        { id: 'b', text: 'IDs sind in CSS nicht gültig' },
        { id: 'c', text: 'Klassen sind wiederverwendbar und haben niedrigere Spezifität – besser für Teams' },
        { id: 'd', text: 'IDs können keine Stile enthalten' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Klassen sind <strong>wiederverwendbar</strong> und niedrige Spezifität macht den Code wartbarer.',
        nok: 'Falsch. Klassen bevorzugen weil sie wiederverwendbar sind und niedrige Spezifität haben.',
      },
    },
  ],

  // ── 22.4 CSS Layout & Responsive ─────────────────────────
  chapter14: [
    {
      question: 'Wann sollte Flexbox statt CSS Grid verwendet werden?',
      choices: [
        { id: 'a', text: 'Für komplexe 2-dimensionale Layouts mit Zeilen und Spalten' },
        { id: 'b', text: 'Für 1-dimensionale Layouts entlang einer Achse (z. B. Navigationsleiste)' },
        { id: 'c', text: 'Nur für mobile Layouts' },
        { id: 'd', text: 'Flexbox und Grid sind identisch' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>Flexbox</strong> ist ideal für 1-dimensionale Layouts (Zeile oder Spalte). Grid für 2D.',
        nok: 'Falsch. Flexbox eignet sich für <strong>1-dimensionale</strong> Layouts (eine Achse). Grid für Zeilen + Spalten gleichzeitig.',
      },
    },
    {
      question: 'Was bewirkt "flex-wrap: wrap" bei einem Flex-Container?',
      choices: [
        { id: 'a', text: 'Alle Items werden auf gleiche Größe gebracht' },
        { id: 'b', text: 'Items werden in eine neue Zeile umgebrochen, wenn kein Platz mehr vorhanden ist' },
        { id: 'c', text: 'Der Container bekommt einen automatischen Rahmen' },
        { id: 'd', text: 'Items werden vertikal gestapelt' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>flex-wrap: wrap</strong> erlaubt das Umbrechen von Flex-Items in die nächste Zeile.',
        nok: 'Falsch. <strong>flex-wrap: wrap</strong> lässt Flex-Items bei Platzmangel in eine neue Zeile umbrechen.',
      },
    },
    {
      question: 'Was ist der "Mobile-First"-Ansatz beim Responsive Design?',
      choices: [
        { id: 'a', text: 'Die Website wird zuerst für Desktop entwickelt und dann für Mobile angepasst' },
        { id: 'b', text: 'Die Basis-Styles gelten für kleine Bildschirme; Media Queries erweitern für größere' },
        { id: 'c', text: 'Mobile Geräte bekommen eine separate Website' },
        { id: 'd', text: 'Es wird eine Mobile-App statt einer Website gebaut' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>Mobile-First</strong>: Basis-CSS für kleine Screens, dann min-width Media Queries für größere.',
        nok: 'Falsch. Mobile-First bedeutet: Basis-Styles für Mobil schreiben, dann mit min-width Media Queries für Desktop erweitern.',
      },
    },
  ],

  // ── 22.2 Komponenten & Props ──────────────────────────────
  chapter2: [
    {
      question: 'Wie heißt die spezielle Prop, über die eine Komponente eingebettete Kinderkomponenten erhält?',
      choices: [
        { id: 'a', text: 'content' },
        { id: 'b', text: 'slot' },
        { id: 'c', text: 'children' },
        { id: 'd', text: 'inner' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>children</strong> ist die spezielle Prop für eingebettete Kinderkomponenten.',
        nok: 'Falsch. Die richtige Antwort ist <strong>children</strong>.',
      },
    },
    {
      question: 'Welches Keyword exportiert eine Komponente so, dass der Importname frei gewählt werden kann?',
      choices: [
        { id: 'a', text: 'export named' },
        { id: 'b', text: 'export default' },
        { id: 'c', text: 'module.exports' },
        { id: 'd', text: 'export const' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>export default</strong> erlaubt einen frei wählbaren Importnamen.',
        nok: 'Falsch. Die richtige Antwort ist <strong>export default</strong>.',
      },
    },
    {
      question: 'Was ist ein Fragment (<>...</>) in React?',
      choices: [
        { id: 'a', text: 'Ein CSS-Klassen-Selektor für React-Komponenten' },
        { id: 'b', text: 'Ein JSX-Container, der kein echtes DOM-Element erzeugt' },
        { id: 'c', text: 'Eine spezielle Methode zum Laden von Daten' },
        { id: 'd', text: 'Ein unsichtbares <div>-Element' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Ein Fragment erzeugt im DOM kein echtes Element – nur seine Kinder werden gerendert.',
        nok: 'Falsch. Ein Fragment (<>…</>) erzeugt <strong>kein</strong> echtes DOM-Element.',
      },
    },
  ],

  // ── 24.3 useState & Controlled Inputs ────────────────────
  chapter3: [
    {
      question: 'Wie importiert man useState in einer React-Datei?',
      choices: [
        { id: 'a', text: "import useState from 'react'" },
        { id: 'b', text: "import { useState } from 'react'" },
        { id: 'c', text: "require('react').useState" },
        { id: 'd', text: "import useState from 'react-hooks'" },
      ],
      correct: 'b',
      feedback: {
        ok: "Richtig! <strong>import { useState } from 'react'</strong> – mit geschweiften Klammern, da useState kein Default-Export ist.",
        nok: "Falsch. Korrekt: <strong>import { useState } from 'react'</strong> (mit {}).",
      },
    },
    {
      question: 'Was verhindert das Neuladen der Seite beim Absenden eines Formulars?',
      choices: [
        { id: 'a', text: 'e.stopPropagation()' },
        { id: 'b', text: 'return false' },
        { id: 'c', text: 'e.preventDefault()' },
        { id: 'd', text: 'e.cancelDefault()' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>e.preventDefault()</strong> verhindert das Standard-Verhalten des Browsers beim Absenden.',
        nok: 'Falsch. Die korrekte Methode ist <strong>e.preventDefault()</strong>.',
      },
    },
    {
      question: 'Was ist ein „Controlled Input" in React?',
      choices: [
        { id: 'a', text: 'Ein Input mit einem festen, unveränderlichen Wert' },
        { id: 'b', text: 'Ein Input, dessen Wert durch React-State gesteuert und über onChange synchronisiert wird' },
        { id: 'c', text: 'Ein Input mit eingebautem Validierungssystem' },
        { id: 'd', text: 'Ein Input, der nur gelesen, aber nicht verändert werden kann' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Ein Controlled Input verknüpft den Eingabewert mit einem React-State und hält ihn über onChange synchron.',
        nok: 'Falsch. Ein Controlled Input hat seinen Wert an einen State gebunden und verwendet onChange.',
      },
    },
  ],

  // ── 24.4 Rendering, Listen & Keys ────────────────────────
  chapter4: [
    {
      question: 'Warum benötigen Listenelemente in React ein key-Attribut?',
      choices: [
        { id: 'a', text: 'Damit das Element in CSS angesprochen werden kann' },
        { id: 'b', text: 'Damit React Elemente beim Neu-Rendern auseinanderhalten und optimal aktualisieren kann' },
        { id: 'c', text: 'Damit der Browser die Elemente sortieren kann' },
        { id: 'd', text: 'Damit Props weitergegeben werden können' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Der key hilft React beim effizienten Vergleich und Aktualisieren von Listenelementen (Reconciliation).',
        nok: 'Falsch. Keys helfen React, Elemente beim Neu-Rendern auseinanderzuhalten.',
      },
    },
    {
      question: 'Welcher dieser Werte wird von JSX NICHT gerendert (also unsichtbar im DOM)?',
      choices: [
        { id: 'a', text: '0 (die Zahl Null)' },
        { id: 'b', text: '"Hallo" (ein String)' },
        { id: 'c', text: 'null' },
        { id: 'd', text: '42 (eine Zahl)' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>null</strong> (wie auch false und undefined) wird nicht gerendert. Achtung: Die Zahl 0 wird tatsächlich angezeigt!',
        nok: 'Falsch. <strong>null</strong> wird nicht gerendert. Achtung: Die Zahl 0 hingegen wird angezeigt!',
      },
    },
    {
      question: 'Was macht der Ausdruck {isLoggedIn && <Welcome />}?',
      choices: [
        { id: 'a', text: 'Zeigt immer <Welcome /> an' },
        { id: 'b', text: 'Rendert <Welcome /> nur wenn isLoggedIn truthy ist, sonst nichts' },
        { id: 'c', text: 'Gibt einen Fehler, wenn isLoggedIn false ist' },
        { id: 'd', text: 'Zeigt <Welcome /> wenn isLoggedIn false ist' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>&&</strong> rendert die rechte Seite nur wenn die linke Bedingung truthy ist.',
        nok: 'Falsch. {isLoggedIn && <Welcome />} rendert <Welcome /> <strong>nur wenn</strong> isLoggedIn truthy ist.',
      },
    },
  ],

  // ── 23.1 JavaScript Fundamentals ─────────────────────────
  chapter5: [
    {
      question: 'Wann sollte man `let` statt `const` verwenden?',
      choices: [
        { id: 'a', text: 'Immer – let ist sicherer als const' },
        { id: 'b', text: 'Nur wenn der Wert der Variable später neu zugewiesen wird' },
        { id: 'c', text: 'Bei allen primitiven Werten wie Strings und Numbers' },
        { id: 'd', text: 'Nur innerhalb von Funktionen, nicht auf oberster Ebene' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>let</strong> nur nutzen, wenn der Wert sich wirklich ändert – sonst immer <strong>const</strong>.',
        nok: 'Falsch. Faustregel: immer zuerst <strong>const</strong> versuchen – <strong>let</strong> nur wenn ein neuer Wert zugewiesen wird.',
      },
    },
    {
      question: 'Was ist der Unterschied zwischen einer regulären Funktion und einer Arrow Function?',
      choices: [
        { id: 'a', text: 'Arrow Functions können keine Parameter entgegennehmen' },
        { id: 'b', text: 'Arrow Functions binden kein eigenes `this` und sind kürzer zu schreiben' },
        { id: 'c', text: 'Reguläre Funktionen können keine Werte zurückgeben' },
        { id: 'd', text: 'Es gibt keinen Unterschied – nur eine andere Schreibweise' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Arrow Functions haben kein eigenes <strong>this</strong> und erlauben Kurzform (implicit return).',
        nok: 'Falsch. Der wichtigste Unterschied: Arrow Functions binden kein eigenes <strong>this</strong> und haben eine kompaktere Syntax.',
      },
    },
    {
      question: 'Wie werden in Template Literals Variablen eingebettet?',
      choices: [
        { id: 'a', text: 'Mit {variable} – wie in JSX' },
        { id: 'b', text: 'Mit %(variable)s – wie in Python' },
        { id: 'c', text: 'Mit ${variable} innerhalb von Backtick-Strings' },
        { id: 'd', text: 'Mit +variable+ – wie Stringverkettung' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Template Literals nutzen Backticks (`) und <strong>${...}</strong> für Ausdrücke.',
        nok: 'Falsch. Template Literals: Backticks statt Anführungszeichen, und Variablen mit <strong>${variable}</strong> einbetten.',
      },
    },
  ],

  // ── 23.2 Arrays, Objects & Moderne Patterns ──────────────
  chapter8: [
    {
      question: 'Was gibt Array.map() zurück?',
      choices: [
        { id: 'a', text: 'Das erste Element, das die Bedingung erfüllt' },
        { id: 'b', text: 'Ein neues Array mit transformierten Elementen' },
        { id: 'c', text: 'Das ursprüngliche Array – verändert' },
        { id: 'd', text: 'true oder false' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>map()</strong> gibt immer ein <strong>neues Array</strong> zurück – das Original bleibt unverändert.',
        nok: 'Falsch. <strong>map()</strong> gibt ein <strong>neues Array</strong> mit transformierten Elementen zurück, ohne das Original zu verändern.',
      },
    },
    {
      question: 'Was macht der Spread-Operator (...) bei einem Array?',
      choices: [
        { id: 'a', text: 'Löscht alle Elemente des Arrays' },
        { id: 'b', text: 'Sortiert das Array aufsteigend' },
        { id: 'c', text: 'Entpackt die Elemente – z.B. um ein neues Array zu kopieren oder zu erweitern' },
        { id: 'd', text: 'Verbindet zwei Strings zu einem' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>...arr</strong> entpackt alle Elemente – ideal zum Kopieren: <code>[...arr]</code> oder Erweitern: <code>[...arr, newItem]</code>.',
        nok: 'Falsch. Der Spread-Operator <strong>...</strong> entpackt Elemente, um Arrays zu kopieren oder zu erweitern.',
      },
    },
    {
      question: 'Was ist Destructuring in JavaScript?',
      choices: [
        { id: 'a', text: 'Eine Methode, um Arrays zu löschen' },
        { id: 'b', text: 'Eine kompakte Syntax, um Werte aus Arrays/Objekten in Variablen zu extrahieren' },
        { id: 'c', text: 'Ein Verfahren zum Komprimieren von Daten' },
        { id: 'd', text: 'Das Aufsplitten von Strings in Einzelzeichen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Destructuring: <code>const { name, age } = person</code> oder <code>const [first, second] = arr</code>.',
        nok: 'Falsch. Destructuring ist eine kompakte Syntax: <code>const { name } = user</code> statt <code>const name = user.name</code>.',
      },
    },
  ],

  // ── 23.3 DOM, Events & Interaktivität ────────────────────
  chapter6: [
    {
      question: 'Welche Methode wählt ein einzelnes DOM-Element anhand eines CSS-Selektors aus?',
      choices: [
        { id: 'a', text: 'document.getElementById()' },
        { id: 'b', text: 'document.querySelector()' },
        { id: 'c', text: 'document.findElement()' },
        { id: 'd', text: 'document.getElement()' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>querySelector()</strong> nimmt jeden CSS-Selektor (<code>#id</code>, <code>.class</code>, <code>tag</code>) und gibt das erste Treffer-Element zurück.',
        nok: 'Falsch. <strong>querySelector()</strong> ist die moderne Methode – sie akzeptiert jeden CSS-Selektor.',
      },
    },
    {
      question: 'Welches Event-Objekt wird bei addEventListener automatisch an den Handler übergeben?',
      choices: [
        { id: 'a', text: 'Ein leeres Objekt {}' },
        { id: 'b', text: 'Das auslösende DOM-Element direkt' },
        { id: 'c', text: 'Das Event-Objekt (e / event) mit Infos zum Ereignis' },
        { id: 'd', text: 'Der Rückgabewert der Callback-Funktion' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Der Handler erhält automatisch ein <strong>Event-Objekt</strong> – z.B. <code>e.target</code> für das auslösende Element.',
        nok: 'Falsch. Der Handler bekommt automatisch ein <strong>Event-Objekt (e)</strong> mit Properties wie <code>e.target</code>, <code>e.key</code>, <code>e.preventDefault()</code>.',
      },
    },
    {
      question: 'Wozu dient e.preventDefault() bei einem Formular-Submit?',
      choices: [
        { id: 'a', text: 'Um das Formular zu leeren' },
        { id: 'b', text: 'Um das Standard-Browser-Verhalten (Seite neu laden) zu unterbinden' },
        { id: 'c', text: 'Um alle Event Listener des Formulars zu entfernen' },
        { id: 'd', text: 'Um den Event nur einmal auslösen zu lassen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>preventDefault()</strong> verhindert das Standard-Verhalten – beim Formular das Neuladen der Seite.',
        nok: 'Falsch. <strong>e.preventDefault()</strong> unterdrückt das Standard-Browser-Verhalten (z.B. Seiten-Reload beim Submit).',
      },
    },
  ],

  // ── 23.4 Fetch, Async/Await & APIs ───────────────────────
  chapter7: [
    {
      question: 'Was gibt fetch() sofort zurück?',
      choices: [
        { id: 'a', text: 'Die JSON-Daten direkt als Objekt' },
        { id: 'b', text: 'null, bis die Antwort eintrifft' },
        { id: 'c', text: 'Ein Promise, das später aufgelöst wird' },
        { id: 'd', text: 'Den HTTP Status-Code als Zahl' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>fetch()</strong> gibt sofort ein <strong>Promise</strong> zurück – die eigentlichen Daten kommen asynchron.',
        nok: 'Falsch. <strong>fetch()</strong> gibt ein <strong>Promise</strong> zurück – die Daten sind erst nach <code>await</code> oder <code>.then()</code> verfügbar.',
      },
    },
    {
      question: 'Warum muss man nach fetch() zweimal await schreiben?',
      choices: [
        { id: 'a', text: 'Das ist nur eine Konvention, kein technischer Grund' },
        { id: 'b', text: 'Erst wartet man auf die HTTP-Antwort (Header), dann auf das Parsen des JSON-Body' },
        { id: 'c', text: 'Weil fetch() immer zwei Requests sendet' },
        { id: 'd', text: 'Das zweite await ist für Fehlerbehandlung zuständig' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Erstes <strong>await fetch()</strong> = HTTP-Response kommt an; zweites <strong>await res.json()</strong> = Body wird geparst.',
        nok: 'Falsch. Schritt 1: <code>await fetch(url)</code> wartet auf die HTTP-Antwort. Schritt 2: <code>await res.json()</code> parst den Body.',
      },
    },
    {
      question: 'Was gehört in den catch-Block eines try/catch bei fetch()?',
      choices: [
        { id: 'a', text: 'Nur 404-Fehler, da fetch() nur bei diesen eine Exception wirft' },
        { id: 'b', text: 'Netzwerkfehler (z.B. kein Internet) – HTTP-Fehler (4xx/5xx) muss man selbst prüfen' },
        { id: 'c', text: 'Alle HTTP-Fehler – fetch() wirft bei jedem Status-Code != 200' },
        { id: 'd', text: 'Nur Syntaxfehler im JSON' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>catch</strong> fängt nur Netzwerkfehler – für HTTP-Fehler muss man <code>if (!res.ok)</code> selbst prüfen.',
        nok: 'Falsch. <strong>fetch()</strong> wirft nur bei Netzwerkfehlern. HTTP-Statuscodes wie 404 oder 500 muss man mit <code>if (!res.ok)</code> selbst behandeln.',
      },
    },
  ],

  // ── 24.1 React Setup & JSX ────────────────────────────────
  chapter1: [
    {
      question: 'Welchen Befehl nutzt man, um ein neues Vite-React-Projekt zu erstellen?',
      choices: [
        { id: 'a', text: 'npx create-react-app mein-projekt' },
        { id: 'b', text: 'npm create vite@latest mein-projekt' },
        { id: 'c', text: 'npm init react mein-projekt' },
        { id: 'd', text: 'vite new mein-projekt' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>npm create vite@latest</strong> erstellt das Projekt – dann Framework: React | Variant: JavaScript wählen.',
        nok: 'Falsch. Der richtige Befehl ist <strong>npm create vite@latest mein-projekt</strong>. create-react-app ist veraltet.',
      },
    },
    {
      question: 'Was ist JSX?',
      choices: [
        { id: 'a', text: 'Eine eigenständige Programmiersprache für Browser' },
        { id: 'b', text: 'Eine JavaScript-Erweiterung, die HTML-ähnliche Syntax in JS ermöglicht' },
        { id: 'c', text: 'Ein CSS-Framework für React-Komponenten' },
        { id: 'd', text: 'Die Datenbankschicht von React-Anwendungen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! JSX ist syntaktischer Zucker – es wird von Vite/Babel in normales JavaScript umgewandelt.',
        nok: 'Falsch. <strong>JSX</strong> ist eine JavaScript-Syntaxerweiterung – kein eigenes Framework, sondern ein Preprozessor-Feature.',
      },
    },
    {
      question: 'Warum verwendet man in JSX `className` statt `class`?',
      choices: [
        { id: 'a', text: 'Weil React älteres HTML nicht unterstützt' },
        { id: 'b', text: 'Weil `class` ein reserviertes Schlüsselwort in JavaScript ist' },
        { id: 'c', text: 'Weil `className` kürzer und schneller zu schreiben ist' },
        { id: 'd', text: 'Weil Browser `class` in JSX nicht erkennen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>class</strong> ist in JavaScript für Klassen-Definitionen reserviert, daher nutzt JSX <strong>className</strong>.',
        nok: 'Falsch. In JavaScript ist <strong>class</strong> ein Schlüsselwort für Klassendeklarationen – daher nutzt JSX <strong>className</strong>.',
      },
    },
  ],

  // ── 22.5 Woche-22-Wiederholung ────────────────────────────
  chapter15: [
    {
      question: 'Welche CSS-Eigenschaft startet einen Flex-Container?',
      choices: [
        { id: 'a', text: 'position: flex' },
        { id: 'b', text: 'display: flex' },
        { id: 'c', text: 'layout: flexbox' },
        { id: 'd', text: 'flex: 1' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>display: flex</strong> am Elternelement aktiviert den Flex-Container.',
        nok: 'Falsch. Ein Flexbox-Container wird mit <strong>display: flex</strong> am Elternelement aktiviert.',
      },
    },
    {
      question: 'Was ist der Unterschied zwischen `padding` und `margin` im Box-Modell?',
      choices: [
        { id: 'a', text: 'padding ist der Außenabstand, margin der Innenabstand' },
        { id: 'b', text: 'padding ist der Innenabstand, margin der Außenabstand zum nächsten Element' },
        { id: 'c', text: 'Beide sind identisch – nur unterschiedliche Namen' },
        { id: 'd', text: 'margin gehört zum Inhalt, padding zum Rahmen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>padding</strong> = Raum zwischen Inhalt und Rahmen. <strong>margin</strong> = Raum außerhalb des Rahmens.',
        nok: 'Falsch. <strong>padding</strong> ist innen (zwischen Inhalt und Border), <strong>margin</strong> ist außen (Abstand zu anderen Elementen).',
      },
    },
    {
      question: 'Welches HTML-Attribut verhindert das Absenden eines leeren Pflichtfeldes?',
      choices: [
        { id: 'a', text: 'validate="true"' },
        { id: 'b', text: 'mandatory' },
        { id: 'c', text: 'required' },
        { id: 'd', text: 'notempty' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Das HTML-Attribut <strong>required</strong> aktiviert die eingebaute Browser-Validierung.',
        nok: 'Falsch. Das HTML-Attribut <strong>required</strong> verhindert das Abschicken leerer Pflichtfelder.',
      },
    },
  ],

  // ── 23.5 Woche-23-Wiederholung ────────────────────────────
  chapter9: [
    {
      question: 'Was macht `Array.filter()` mit einem Array?',
      choices: [
        { id: 'a', text: 'Gibt das erste Element zurück, das die Bedingung erfüllt' },
        { id: 'b', text: 'Gibt ein neues Array nur mit Elementen zurück, für die die Bedingung true ist' },
        { id: 'c', text: 'Sortiert das Array nach der Bedingung' },
        { id: 'd', text: 'Löscht Elemente direkt aus dem Original-Array' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>filter()</strong> gibt ein neues Array mit allen Elementen zurück, für die der Callback <code>true</code> liefert.',
        nok: 'Falsch. <strong>filter()</strong> = neues Array mit passenden Elementen. Für das erste Treffer nutzt man <code>find()</code>.',
      },
    },
    {
      question: 'Was passiert, wenn man `e.preventDefault()` in einem Click-Handler aufruft?',
      choices: [
        { id: 'a', text: 'Der Event wird gestoppt und nicht weitergeleitet (Bubbling)' },
        { id: 'b', text: 'Das Standard-Browser-Verhalten (z.B. Formular-Submit) wird unterbunden' },
        { id: 'c', text: 'Die Seite wird neu geladen' },
        { id: 'd', text: 'Der Event Listener wird entfernt' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>preventDefault()</strong> verhindert das Default-Verhalten – z.B. Seiten-Reload beim Form-Submit.',
        nok: 'Falsch. <strong>preventDefault()</strong> = Browser-Standard verhindern. Bubbling stoppt man mit <code>stopPropagation()</code>.',
      },
    },
    {
      question: 'Warum muss eine Funktion als `async` markiert sein, um `await` zu verwenden?',
      choices: [
        { id: 'a', text: 'Aus Performancegründen – async macht Funktionen schneller' },
        { id: 'b', text: 'Weil await nur innerhalb von async-Funktionen erlaubt ist' },
        { id: 'c', text: 'Weil der Browser sonst keine Promises unterstützt' },
        { id: 'd', text: 'Es ist nur eine Konvention – technisch nicht notwendig' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>await</strong> ist syntaktisch nur innerhalb von <strong>async</strong>-Funktionen erlaubt.',
        nok: 'Falsch. <strong>await</strong> kann nur in <strong>async</strong>-Funktionen genutzt werden – das ist eine JavaScript-Sprachregel.',
      },
    },
  ],

  // ── 24.5 Woche-24-Wiederholung ────────────────────────────
  chapter10: [
    {
      question: 'Was passiert nach dem Aufruf einer useState-Setter-Funktion?',
      choices: [
        { id: 'a', text: 'Der State ändert sich sofort synchron' },
        { id: 'b', text: 'React plant ein Re-Render der Komponente mit dem neuen State-Wert' },
        { id: 'c', text: 'Nur Kind-Komponenten werden neu gerendert' },
        { id: 'd', text: 'Die gesamte App wird neu geladen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Der Setter löst ein <strong>Re-Render</strong> aus – React aktualisiert die Komponente mit dem neuen Wert.',
        nok: 'Falsch. Die Setter-Funktion ist <strong>asynchron</strong> – sie plant ein Re-Render, ändert den State nicht sofort.',
      },
    },
    {
      question: 'Warum braucht jedes Element in einer mit map() gerenderten Liste eine `key`-Prop?',
      choices: [
        { id: 'a', text: 'Damit CSS-Selektoren funktionieren' },
        { id: 'b', text: 'Damit React Elemente effizient identifizieren und den DOM gezielt aktualisieren kann' },
        { id: 'c', text: 'Weil JavaScript-Arrays immer einen Index brauchen' },
        { id: 'd', text: 'Nur bei mehr als 10 Elementen nötig' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>key</strong> hilft React, Elemente im Virtual DOM zu identifizieren und nur geänderte Teile neu zu rendern.',
        nok: 'Falsch. <strong>key</strong> ist Reacts Mechanismus für effizienten DOM-Abgleich – ohne key kann es zu falschen Re-Renders kommen.',
      },
    },
    {
      question: 'Was unterscheidet Props von State in React?',
      choices: [
        { id: 'a', text: 'Props sind veränderlich, State ist unveränderlich' },
        { id: 'b', text: 'Props kommen von außen (Eltern) und sind readonly; State ist lokal und veränderlich' },
        { id: 'c', text: 'State und Props sind identisch – nur unterschiedliche Namen' },
        { id: 'd', text: 'Props sind nur für Klassen-Komponenten, State für Funktions-Komponenten' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>Props</strong> = Eingabe von außen, readonly. <strong>State</strong> = interner, reaktiver Zustand der Komponente.',
        nok: 'Falsch. <strong>Props</strong> kommen von der Elternkomponente und sind readonly. <strong>State</strong> ist lokaler, änderbarer Zustand.',
      },
    },
  ],

  // ── 25.1 Styling Patterns & CSS ───────────────────────────
  chapter16: [
    {
      question: 'Was ist der Hauptvorteil von CSS Modules gegenüber globalem CSS?',
      choices: [
        { id: 'a', text: 'CSS Modules laden schneller' },
        { id: 'b', text: 'Klassenamen werden automatisch lokal gescoped – keine Namenskonflikte' },
        { id: 'c', text: 'CSS Modules unterstützen mehr CSS-Eigenschaften' },
        { id: 'd', text: 'CSS Modules brauchen keinen Import' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>CSS Modules</strong> generieren eindeutige Klassen-Hashes – damit gibt es keine globalen Namenskonflikte mehr.',
        nok: 'Falsch. Der Hauptvorteil ist der automatische <strong>lokale Scope</strong>: Klassen gelten nur für die Komponente, die das Modul importiert.',
      },
    },
    {
      question: 'Wie bindet man eine CSS-Module-Klasse in JSX ein?',
      choices: [
        { id: 'a', text: 'className="styles.card"' },
        { id: 'b', text: 'class={styles.card}' },
        { id: 'c', text: 'className={styles.card}' },
        { id: 'd', text: 'style={styles.card}' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <code>className={"{styles.card}"}</code> – geschweifte Klammern für den JS-Ausdruck und <code>styles</code> ist das importierte Modul-Objekt.',
        nok: 'Falsch. Die korrekte Syntax ist <code>className={"{styles.card}"}</code> – ein JS-Ausdruck in geschweiften Klammern, kein String.',
      },
    },
    {
      question: 'Welche Tailwind-Klasse setzt eine blaue Hintergrundfarbe (Intensität 500)?',
      choices: [
        { id: 'a', text: 'background-blue-500' },
        { id: 'b', text: 'bg-blue-500' },
        { id: 'c', text: 'color-blue-500' },
        { id: 'd', text: 'blue-bg-500' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! In Tailwind steht <code>bg-</code> für background-color, gefolgt von Farbe und Intensität.',
        nok: 'Falsch. Tailwind-Utility-Klassen folgen dem Muster <code>bg-{"{farbe}"}-{"{intensität}"}</code>, also <strong>bg-blue-500</strong>.',
      },
    },
    {
      question: 'Was bewirkt die Tailwind-Klasse "md:flex"?',
      choices: [
        { id: 'a', text: 'Immer display: flex, egal wie breit der Viewport ist' },
        { id: 'b', text: 'display: flex ab einem Viewport von 768px Breite (Mobile-First Breakpoint)' },
        { id: 'c', text: 'display: flex nur auf mittleren Monitoren, nicht auf Handys oder großen Bildschirmen' },
        { id: 'd', text: 'Ein Modifier für mittlere Schriftgröße' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <code>md:</code> ist ein <strong>Responsive Breakpoint</strong>: ab 768px greift die Klasse.',
        nok: 'Falsch. <code>md:flex</code> aktiviert <code>display: flex</code> ab dem <strong>md-Breakpoint (768px)</strong> – Mobile-First Prinzip.',
      },
    },
  ],

  // ── 25.2 React Hooks ──────────────────────────────────────
  chapter17: [
    {
      question: 'Wann sollte man useCallback einsetzen?',
      choices: [
        { id: 'a', text: 'Immer, bei jeder Funktion in einer Komponente' },
        { id: 'b', text: 'Wenn eine Funktion als Prop an eine memoized Child-Komponente übergeben wird' },
        { id: 'c', text: 'Nur bei async Funktionen' },
        { id: 'd', text: 'useCallback und useState erfüllen denselben Zweck' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>useCallback</strong> lohnt sich, wenn eine stabile Funktionsreferenz nötig ist – z. B. als Prop für <code>React.memo()</code>-Kinder.',
        nok: 'Falsch. <strong>useCallback</strong> ist vor allem nützlich, wenn Funktionen an memoized Child-Komponenten übergeben werden, um unnötige Re-Renders zu vermeiden.',
      },
    },
    {
      question: 'Was gibt useMemo zurück?',
      choices: [
        { id: 'a', text: 'Eine gecachte Funktion' },
        { id: 'b', text: 'Den gecachten Rückgabewert einer teuren Berechnung' },
        { id: 'c', text: 'Ein Ref-Objekt' },
        { id: 'd', text: 'Den vorherigen State-Wert' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>useMemo</strong> gibt den <em>Wert</em> zurück, den die übergebene Funktion berechnet – und cached ihn bis sich die Dependencies ändern.',
        nok: 'Falsch. <strong>useMemo</strong> cached den <em>berechneten Wert</em>. useCallback cached die Funktion selbst.',
      },
    },
    {
      question: 'Wie greift man mit useRef auf einen DOM-Knoten zu?',
      choices: [
        { id: 'a', text: 'ref.value' },
        { id: 'b', text: 'ref.node' },
        { id: 'c', text: 'ref.current' },
        { id: 'd', text: 'ref.element' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Das DOM-Element oder der gespeicherte Wert ist immer unter <code>ref.current</code> zu finden.',
        nok: 'Falsch. Refs speichern alles unter <code>.current</code> – also <code>inputRef.current.focus()</code>.',
      },
    },
    {
      question: 'Was ist die Namens-Konvention für Custom Hooks?',
      choices: [
        { id: 'a', text: 'Sie müssen mit "hook" beginnen: hookMyThing' },
        { id: 'b', text: 'Beliebiger Name, solange die Datei .hook.js endet' },
        { id: 'c', text: 'Sie müssen mit "use" beginnen: useMyThing' },
        { id: 'd', text: 'Großbuchstabe am Anfang wie Komponenten: UseMyThing' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! Custom Hooks beginnen immer mit <strong>use</strong> – das ist Konvention und ermöglicht das Linting der Hook-Regeln.',
        nok: 'Falsch. Custom Hooks müssen mit <strong>use</strong> beginnen (z. B. <code>useLocalStorage</code>), damit React die Hook-Regeln überprüfen kann.',
      },
    },
  ],

  // ── 25.3 useEffect & API Calls ────────────────────────────
  chapter18: [
    {
      question: 'Warum darf die useEffect-Callback-Funktion nicht direkt async sein?',
      choices: [
        { id: 'a', text: 'async ist in React generell verboten' },
        { id: 'b', text: 'Eine async-Funktion gibt ein Promise zurück, aber useEffect erwartet eine Cleanup-Funktion oder undefined' },
        { id: 'c', text: 'async-Funktionen laufen im falschen Thread' },
        { id: 'd', text: 'async funktioniert nur mit useCallback' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <code>useEffect(async () => {})</code> würde ein Promise zurückgeben – React interpretiert das nicht als Cleanup-Funktion.',
        nok: 'Falsch. useEffect erwartet entweder <strong>undefined</strong> oder eine <strong>Cleanup-Funktion</strong> zurück. Ein Promise wäre falsch.',
      },
    },
    {
      question: 'Was bewirkt ein leeres Dependency-Array [] in useEffect?',
      choices: [
        { id: 'a', text: 'useEffect läuft bei jedem Render' },
        { id: 'b', text: 'useEffect läuft genau einmal nach dem ersten Render (Mount)' },
        { id: 'c', text: 'useEffect wird niemals ausgeführt' },
        { id: 'd', text: 'useEffect läuft nur beim Unmount' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <code>useEffect(() => {}, [])</code> läuft einmal beim <strong>Mount</strong> – ideal für einmalige Initialisierungen.',
        nok: 'Falsch. <code>[]</code> bedeutet: keine Abhängigkeiten, also läuft der Effekt genau <strong>einmal nach dem ersten Render</strong>.',
      },
    },
    {
      question: 'Wozu dient der AbortController in einem fetch()-useEffect?',
      choices: [
        { id: 'a', text: 'Er beschleunigt den API-Call' },
        { id: 'b', text: 'Er verhindert State-Updates auf unmountierten Komponenten, indem er den fetch abbricht' },
        { id: 'c', text: 'Er behandelt 404-Fehler automatisch' },
        { id: 'd', text: 'Er konvertiert die Response zu JSON' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Der <strong>AbortController</strong> bricht den fetch ab, wenn die Komponente unmountet – kein State-Update auf totem Objekt.',
        nok: 'Falsch. <code>AbortController</code> wird in der Cleanup-Funktion aufgerufen, um den laufenden <strong>fetch abzubrechen</strong>.',
      },
    },
    {
      question: 'Was passiert, wenn man das Dependency-Array in useEffect weglässt?',
      choices: [
        { id: 'a', text: 'useEffect läuft einmal beim Mount' },
        { id: 'b', text: 'useEffect wird nach jedem Render ausgeführt' },
        { id: 'c', text: 'useEffect wird deaktiviert' },
        { id: 'd', text: 'Es gibt einen Build-Fehler' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! Ohne Dependency-Array läuft <code>useEffect</code> nach <strong>jedem Render</strong> – kann zu Endlosschleifen führen!',
        nok: 'Falsch. Kein Dependency-Array = Effekt läuft <strong>nach jedem Render</strong>. Das ist selten gewünscht und kann Endlosschleifen erzeugen.',
      },
    },
  ],

  // ── 25.4 React Router ─────────────────────────────────────
  chapter19: [
    {
      question: 'Warum soll man in React Router <Link> statt <a href> für interne Links verwenden?',
      choices: [
        { id: 'a', text: '<a href> ist in React nicht erlaubt' },
        { id: 'b', text: '<Link> verhindert das Neuladen der Seite und aktualisiert nur die URL im Browser' },
        { id: 'c', text: '<Link> ist schneller, weil es HTTP/2 verwendet' },
        { id: 'd', text: 'Es gibt keinen funktionalen Unterschied' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>Link</strong> aus react-router-dom aktualisiert nur den Browser-History-Eintrag – kein vollständiges Neuladen.',
        nok: 'Falsch. Ein normales <code>{"<a href>"}</code> löst einen vollen Seiten-Reload aus. <strong>Link</strong> navigiert client-seitig ohne Reload.',
      },
    },
    {
      question: 'Wie liest man den URL-Parameter :id aus der Route /users/:id?',
      choices: [
        { id: 'a', text: 'const id = useParams.id' },
        { id: 'b', text: 'const { id } = useParams()' },
        { id: 'c', text: 'const id = props.params.id' },
        { id: 'd', text: 'const id = useRouter().id' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <code>const {"{ id }"} = useParams()</code> – useParams ist ein Hook und gibt ein Objekt zurück.',
        nok: 'Falsch. <code>useParams()</code> ist ein Hook (mit Klammern!) und gibt ein Objekt zurück – Destructuring nötig: <code>const {"{ id }"} = useParams()</code>.',
      },
    },
    {
      question: 'Was ist der Unterschied zwischen <Link> und <NavLink>?',
      choices: [
        { id: 'a', text: 'NavLink ist für externe Links' },
        { id: 'b', text: 'NavLink fügt automatisch eine active-CSS-Klasse hinzu, wenn die Route aktiv ist' },
        { id: 'c', text: 'NavLink kann nur in der Navbar verwendet werden' },
        { id: 'd', text: 'NavLink unterstützt keine dynamischen Routen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <strong>NavLink</strong> hat einen <code>isActive</code>-State und kann aktive Links automatisch stylen.',
        nok: 'Falsch. <strong>NavLink</strong> unterscheidet sich durch das <code>isActive</code>-Verhalten – es fügt eine <code>active</code>-Klasse oder einen Style hinzu.',
      },
    },
    {
      question: 'Wie navigiert man programmatisch nach einer Form-Submission?',
      choices: [
        { id: 'a', text: 'window.location.href = "/ziel"' },
        { id: 'b', text: 'const navigate = useNavigate(); navigate("/ziel")' },
        { id: 'c', text: '<Redirect to="/ziel" />' },
        { id: 'd', text: 'router.push("/ziel")' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! <code>useNavigate()</code> gibt eine <code>navigate</code>-Funktion zurück, mit der man programmatisch navigieren kann.',
        nok: 'Falsch. In React Router v6 verwendet man <code>useNavigate()</code>, um einen <code>navigate</code>-Callback zu bekommen.',
      },
    },
  ],

  // ── 25.5 React Mini-App ───────────────────────────────────
  chapter20: [
    {
      question: 'Welcher Hook sollte für eine teure Array-Filterung verwendet werden, um Re-Render-Performance zu verbessern?',
      choices: [
        { id: 'a', text: 'useState' },
        { id: 'b', text: 'useRef' },
        { id: 'c', text: 'useMemo' },
        { id: 'd', text: 'useReducer' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <strong>useMemo</strong> cached den Filterwert und berechnet ihn nur neu, wenn sich Abhängigkeiten ändern.',
        nok: 'Falsch. <strong>useMemo</strong> ist für gecachte berechnete Werte – ideal für teure Filter- oder Sortierfunktionen.',
      },
    },
    {
      question: 'Warum darf man State in React nicht direkt mutieren?',
      choices: [
        { id: 'a', text: 'State ist readonly in JavaScript' },
        { id: 'b', text: 'React erkennt Objekt-Mutationen nicht als Änderung und löst keinen Re-Render aus' },
        { id: 'c', text: 'Mutationen sind generell in modernem JavaScript verboten' },
        { id: 'd', text: 'Nur wegen Performance-Gründen' },
      ],
      correct: 'b',
      feedback: {
        ok: 'Richtig! React vergleicht Referenzen – wenn dieselbe Referenz verändert wird, sieht React keine Änderung und rendert nicht neu.',
        nok: 'Falsch. React vergleicht Object-Referenzen. Eine direkte Mutation ändert nicht die Referenz – kein Re-Render wird ausgelöst.',
      },
    },
    {
      question: 'Welches Muster wird beim Löschen eines Elements aus einem State-Array verwendet?',
      choices: [
        { id: 'a', text: 'items.splice(index, 1)' },
        { id: 'b', text: 'delete items[index]' },
        { id: 'c', text: 'setItems(items.filter(i => i.id !== id))' },
        { id: 'd', text: 'items.length = items.length - 1' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <code>filter()</code> gibt ein <strong>neues Array</strong> zurück – React erkennt die neue Referenz und rendert neu.',
        nok: 'Falsch. <strong>splice</strong> und <strong>delete</strong> mutieren das bestehende Array. Korrekt ist <code>filter()</code>, das ein neues Array zurückgibt.',
      },
    },
    {
      question: 'In welcher Datei wird BrowserRouter typischerweise in einem Vite-React-Projekt eingebunden?',
      choices: [
        { id: 'a', text: 'App.jsx' },
        { id: 'b', text: 'index.html' },
        { id: 'c', text: 'main.jsx' },
        { id: 'd', text: 'vite.config.js' },
      ],
      correct: 'c',
      feedback: {
        ok: 'Richtig! <code>main.jsx</code> ist der Einstiegspunkt – dort wird <code>BrowserRouter</code> um die gesamte App gewickelt.',
        nok: 'Falsch. <code>BrowserRouter</code> gehört in <strong>main.jsx</strong>, damit die gesamte App Zugriff auf den Router-Kontext hat.',
      },
    },
  ],
};
