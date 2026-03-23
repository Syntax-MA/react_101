# Übung – 25.5 React Mini-App ✨

## Aufgabe: Vollständige React-App bauen

In dieser Freitags-Übung kombinierst du alle Konzepte der Woche zu einer vollständigen React-App. Du nutzt Styling, Hooks, useEffect, API-Calls und React Router.

## Projektidee

Baue eine **Movie-Wishlist-App** (oder ein eigenes Thema deiner Wahl). Die App soll:
- Eine Startseite mit einer Liste von Wunschfilmen zeigen
- Jeden Film als separate Detail-Route darstellen
- Neue Filme hinzufügen und vorhandene löschen können
- Die Wishlist im `localStorage` speichern (Custom Hook!)

## Technische Anforderungen

**Routing:** Mindestens 3 Routen (`/`, `/movie/:id`, `/add`) mit React Router v6.

**State & Hooks:**
- `useState` für die Film-Liste
- `useEffect` für localStorage-Sync
- `useCallback` für stabile Handler-Funktionen
- Optional: `useMemo` für Sortier-/Filterfunktion

**API-Fetch (Optional):** Lade Film-Metadaten von einer Open-Source-API (z. B. OMDB mit kostenlosem API-Key) wenn ein Titel eingegeben wird.

**Styling:** Mindestens ein CSS-Modul oder Tailwind-Klassen für die Film-Karten.

## Sprint-Planung

Nutze das Sprint Board unten, um deine Aufgaben zu organisieren. Verschiebe Karten von "To do" nach "In Progress" und schließlich nach "Done".

## Weg A – Freies Thema

Statt einer Movie-Wishlist kannst du auch eine andere App bauen: Rezept-Sammlung, Bücherliste, Reise-Planer oder eine eigene Idee. Alle technischen Anforderungen müssen trotzdem erfüllt werden.

## Weg B – Geführt (Movie-Wishlist)

Folge den Sprint-Karten im Board unten Schritt für Schritt. Jede Karte beschreibt genau, was zu tun ist und welche Kriterien erfüllt sein müssen.

## Abgabe

- `npm run build` läuft fehlerfrei durch
- Alle Sprint-Karten sind auf "Done" verschoben
- Kurze Demo für die Lehrperson (2-3 Minuten)
- Optional: README.md mit Projekt-Beschreibung und verwendeten Technologien
