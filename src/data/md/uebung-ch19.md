# Übung – 25.4 React Router

## Aufgabe: Multi-Page-App mit React Router

In dieser Übung baust du eine kleine Multi-Page-Anwendung mit React Router v6. Du lernst Navigation, Parameter-Routen und programmatische Weiterleitung.

## Teil 1: Router einrichten

Installiere React Router (falls noch nicht vorhanden): `npm install react-router-dom`. Wrape deine App in `main.jsx` mit `<BrowserRouter>`:

```jsx
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(...).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

Definiere in `App.jsx` deine Routen mit `<Routes>` und `<Route>`:
- `/` → `<HomePage />`
- `/about` → `<AboutPage />`
- `/users` → `<UsersPage />`
- `/users/:id` → `<UserDetailPage />`
- `*` → `<NotFoundPage />`

## Teil 2: Navigation mit Link und NavLink

Erstelle eine `Navbar`-Komponente. Verwende `<Link to="/">` für normale Links und `<NavLink>` für die Navigation, die den aktiven Link hervorheben soll. `NavLink` fügt automatisch die `active`-Klasse hinzu:

```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>
  Über uns
</NavLink>
```

Stelle sicher, dass nirgendwo ein `<a href="...">` für interne Links verwendet wird – das würde die Seite neu laden!

## Teil 3: URL-Parameter mit useParams

Erstelle eine `UserDetailPage`. Lese die `id` aus der URL mit `useParams`:

```js
const { id } = useParams();
```

Lade die Benutzerdaten von `https://jsonplaceholder.typicode.com/users/${id}` und zeige Name, E-Mail und Website an. Verlinke in `UsersPage` jeden User auf seine Detailseite: `<Link to={'/users/' + user.id}>`.

## Teil 4: Programmatische Navigation mit useNavigate

Füge in `UserDetailPage` einen "Zurück zur Liste"-Button ein, der `useNavigate` verwendet:

```js
const navigate = useNavigate();
// Im Button:
navigate('/users');
// Oder zurück:
navigate(-1);
```

Baue außerdem eine Login-Simulation: Nach Klick auf "Einloggen" (beliebige Komponente) soll nach 1 Sekunde automatisch zu `/` navigiert werden.

## Abgabe

Zeige alle vier Routen in Aktion und demonstriere:
- Link vs. direktes `<a>`-Tag (Unterschied sichtbar im Network-Tab)
- Aktives NavLink-Styling
- URL-Parameter in der Adresszeile
- Programmatische Weiterleitung
