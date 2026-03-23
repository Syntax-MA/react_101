# Übung – 25.3 useEffect & API Calls

## Aufgabe: Daten laden und anzeigen

In dieser Übung baust du eine Komponente, die Daten von einer öffentlichen API lädt und dabei alle wichtigen useEffect-Muster umsetzt.

## Teil 1: Erster API-Fetch

Erstelle eine `UserList`-Komponente. Definiere drei State-Variablen: `users` (Array), `loading` (Boolean, initial `true`) und `error` (null oder String). Lade beim ersten Render Daten von der JSONPlaceholder-API:

```
https://jsonplaceholder.typicode.com/users
```

Verwende das **innere async-Funktion**-Muster, da `useEffect` selbst nicht async sein darf:

```js
useEffect(() => {
  async function fetchUsers() {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Fehler: ' + res.status);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  fetchUsers();
}, []);
```

## Teil 2: Loading- und Error-States anzeigen

Zeige während des Ladens einen Spinner oder den Text "Wird geladen…". Bei einem Fehler zeige eine rote Fehlermeldung. Teste den Error-State, indem du die URL kurz falsch schreibst.

## Teil 3: Abhängigkeiten steuern

Füge eine `userId`-State-Variable hinzu (Buttons 1–5 zum Umschalten). Lade mit jeder Änderung die Detaildaten des gewählten Users:

```
https://jsonplaceholder.typicode.com/users/{userId}
```

Das Dependency-Array muss `[userId]` enthalten – prüfe in der Konsole, dass der Fetch genau einmal pro Klick ausgeführt wird.

## Teil 4: AbortController für Cleanup

Erweitere den `useEffect` um einen `AbortController`, damit ein laufender Fetch abgebrochen wird, wenn die Komponente unmountet oder `userId` sich ändert:

```js
const controller = new AbortController();
const res = await fetch(url, { signal: controller.signal });
// ...
return () => controller.abort();
```

Teste, dass in der Konsole kein "Can't perform state update on unmounted component"-Fehler erscheint, wenn du schnell zwischen Users klickst.

## Abgabe

Zeige alle vier Teile in Aktion. Erkläre den Unterschied zwischen `[]`, `[userId]` und keinem Dependency-Array.
