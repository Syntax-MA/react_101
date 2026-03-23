# Übung – 25.1 Styling Patterns & CSS

## Aufgabe: React-App mit verschiedenen Styling-Ansätzen

In dieser Übung experimentierst du mit den vier Styling-Methoden in React: globalem CSS, CSS-Modulen und Tailwind-Klassen.

## Teil 1: Globales CSS (index.css)

Öffne `src/index.css` und füge eine globale Regel für alle `h2`-Elemente hinzu. Setze die Schriftfarbe auf deine Lieblingsfarbe und ergänze `margin-bottom: 0.5rem`. Beobachte, wie die Änderung alle Überschriften in der App sofort beeinflusst.

## Teil 2: CSS-Modul erstellen

Erstelle die Datei `src/components/ProfileCard.module.css` mit den Klassen `.card`, `.title` und `.badge`. Die `.card` soll einen weißen Hintergrund, abgerundete Ecken (`border-radius: 8px`) und einen leichten Schatten (`box-shadow`) bekommen.

Erstelle dann `src/components/ProfileCard.jsx` und importiere das Modul mit `import styles from './ProfileCard.module.css'`. Verwende `className={styles.card}` für den Wrapper-`div`. Prüfe im Browser-DevTools, dass der Klassenname einen automatisch generierten Hash enthält (z. B. `ProfileCard_card__xK3a2`).

## Teil 3: Dynamisches Styling mit CSS-Modulen

Erweitere `ProfileCard.jsx` um eine `isActive`-Prop. Wenn `isActive={true}`, soll ein zusätzlicher grüner Rahmen erscheinen. Nutze Template Literals oder den `clsx`-Ansatz:

```jsx
className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
```

Füge in der `.module.css` die Klasse `.cardActive` mit `border: 2px solid green` hinzu.

## Teil 4: Tailwind-Klassen anwenden

Erstelle eine neue Komponente `src/components/AlertBanner.jsx`. Gestalte ein Banner ausschließlich mit Tailwind-Utility-Klassen: Hintergrundfarbe (`bg-yellow-100`), Textfarbe (`text-yellow-800`), Padding (`p-4`), abgerundete Ecken (`rounded-lg`) und einen Rand (`border border-yellow-300`).

Füge einen Hover-Effekt hinzu: `hover:bg-yellow-200`. Teste auch die responsive Variante: Auf kleinen Bildschirmen soll der Text kleiner sein (`text-sm`) und ab `md:` normal groß (`md:text-base`).

## Abgabe

Zeige deiner Lehrperson:
- Das CSS-Modul mit dem Hash im DevTools-Klassennamen
- Das dynamisch wechselnde `isActive`-Styling
- Das Tailwind-Banner mit funktionierendem Hover-Effekt
