# 22.1 Webarchitektur & HTTP – Praktische Übungen

## Übersicht

In dieser Übung lernst du, wie das Web funktioniert: wie Clients und Server kommunizieren, welche Rolle HTTP dabei spielt und wie URLs aufgebaut sind.

---

## Teil 1: Client-Server-Kommunikation

Öffne deinen Browser und rufe eine beliebige Website auf (z. B. `https://example.com`).

**Aufgabe:**
1. Öffne die **DevTools** mit `F12` → Tab **Network**
2. Lade die Seite neu (`Strg+R` / `Cmd+R`)
3. Klicke auf den ersten Request (HTML-Datei)
4. Beantworte:
   - Welche **HTTP-Methode** wurde verwendet?
   - Welcher **Status-Code** kam zurück?
   - Wie lange hat der Request gedauert?

---

## Teil 2: HTTP-Methoden & Status-Codes

Ordne die richtigen Antworten zu:

| HTTP-Methode | Verwendungszweck            |
|--------------|-----------------------------|
| `GET`        | Daten abrufen               |
| `POST`       | Neue Daten erstellen        |
| `PUT`        | Daten vollständig ersetzen  |
| `PATCH`      | Daten teilweise aktualisieren |
| `DELETE`     | Daten löschen               |

**Status-Code-Kategorien:**
- **2xx** → Erfolg (z. B. `200 OK`, `201 Created`)
- **3xx** → Weiterleitung (z. B. `301 Moved Permanently`)
- **4xx** → Client-Fehler (z. B. `404 Not Found`, `403 Forbidden`)
- **5xx** → Server-Fehler (z. B. `500 Internal Server Error`)

---

## Teil 3: URL-Anatomie

Analysiere diese URL:

```
https://api.example.com:443/users/42?sort=name&page=2#results
```

Identifiziere:
- **Protokoll:** `https`
- **Domain:** `api.example.com`
- **Port:** `443`
- **Pfad:** `/users/42`
- **Query-Parameter:** `sort=name&page=2`
- **Fragment:** `results`

**Aufgabe:** Öffne `https://github.com` in einem Tab und analysiere eine beliebige URL auf der Seite nach demselben Muster.

---

## Teil 4: DNS verstehen

1. Öffne ein Terminal (macOS: `Terminal`, Windows: `PowerShell`)
2. Führe aus:
   ```bash
   nslookup github.com
   ```
3. Notiere die IP-Adresse(n), die zurückgegeben werden.
4. Rufe dann im Browser `https://github.com` auf – du erreichst dieselbe IP.

---

## Teil 5: REST API erkunden (DevTools)

1. Rufe `https://jsonplaceholder.typicode.com/posts` im Browser auf
2. Öffne DevTools → Network → lade neu
3. Finde den Request und schau dir an:
   - Response Headers (Content-Type, Status)
   - Response Body (JSON-Daten)

```bash
# Alternativ im Terminal:
curl https://jsonplaceholder.typicode.com/posts/1
```

**Erwartete Ausgabe:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati...",
  "body": "quia et suscipit..."
}
```
