- [Übungsaufgabe - Todo-App](#übungsaufgabe---todo-app)
  - [Kernaufgaben](#kernaufgaben)
    - [Aufgabe 1: Grundaufbau](#aufgabe-1-grundaufbau)
    - [Aufgabe 2: Kopfzeile](#aufgabe-2-kopfzeile)
    - [Aufgabe 3a: Formular-Struktur](#aufgabe-3a-formular-struktur)
    - [Aufgabe 3b: Formular-Styling](#aufgabe-3b-formular-styling)
    - [Aufgabe 4a: Statische Liste](#aufgabe-4a-statische-liste)
    - [Aufgabe 4b: Liste stylen](#aufgabe-4b-liste-stylen)
    - [Aufgabe 5: Statische Datengrundlage](#aufgabe-5-statische-datengrundlage)
    - [Aufgabe 6: Darstellung der Daten](#aufgabe-6-darstellung-der-daten)
    - [Aufgabe 7: Dynamisches hinzufügen von todos:](#aufgabe-7-dynamisches-hinzufügen-von-todos)
    - [Aufgabe 8: Löschen von todos:](#aufgabe-8-löschen-von-todos)
  - [Optionale Zusatzaufgaben](#optionale-zusatzaufgaben)
    - [Aufgabe 1: Liste sortieren](#aufgabe-1-liste-sortieren)
    - [Aufgabe 2: Aktuelle Uhrzeit anzeigen](#aufgabe-2-aktuelle-uhrzeit-anzeigen)
    - [Aufgabe 3: Todos im Browser abspeichern](#aufgabe-3-todos-im-browser-abspeichern)

# Übungsaufgabe - Todo-App

Dieses Dokument definierten den schrittweisen Aufbau einer
Web-Applikation, in der Nutzer eine Aufgaben-Liste pflegen
können. Einige wichtige Bestandteile einer richtigen
Applikation sind hier ganz bewusst nicht enthalten, um die
Komplexität gering zu halten, so werden Daten zum Beispiel
nicht gespeichert oder mit anderen Nutzern geteilt.

Die Aufgaben führen immer zu einem gewissen Mindestumfang
hin. Wenn du also Ideen hast, fühle dich nicht eingeschränkt
und lass deiner Kreativität freien Lauf.

Die Aufgaben sind zudem unterteilt in Kernaufgaben
(behandlen Themen, die für die Klausur relevant sind) und
optionale Zusatzaufgaben.

## Kernaufgaben

### Aufgabe 1: Grundaufbau

- Lege einen neuen Order für dieses Projekt an
- Erstelle eine neue Datei: `index.html`
- Pflege das Grundgerüst des HTML:

  - Sprache der Applikation
  - head
    - title
    - Meta-Information für die Zeichenkodierung der Datei
      (für die korrekte Darstellung von Sonderzeichen)
    - Styles (entweder Link auf externe Datei oder styles
      direkt in der index.html)
      - Setze die Hintergrundfarbe des html-Elements auf
        pink, um zu testen, ob die Styles richtig
        eingebunden sind.
  - body
    - Überschrift mit `Hello World`
    - script (entweder Link auf extene Datei oder
      Inline-Skript)
      - Beim Start der Anwendung soll sich ein `alert`
        öffnen, um zu testen ob das Skript richtig
        eingebunden ist.

- Nachdem du alle 3 Bereiche geprüft hast (HTML kommt an,
  CSS kommt an und JS kommt an), kannst du die Tests wieder
  rausnehmen (Hintergrund & alert entfernen)
- Definiere die folgenden Basis-Styles
  - Nutze den `*`-Selektor, um das Box-Sizing auf
    `border-box` zu setzen.
  - Setze `padding` und `margin` auf `html` und `body` auf
    `0`
  - Setze die `min-height` von `html` auf `100%`
  - Lege die Schriftart auf eine Schrift deiner Wahl fest
    (wenn du unentschlossen bist, nimm `Tahoma`)

### Aufgabe 2: Kopfzeile

- Definiere im HTML eine Kopfzeile, nutze dafür das
  `<header>`-Element.
- Die Kopfzeile soll 60px hoch sein und eine
  Hintergrundfarbe haben
- In der Mitte der Kopfzeile soll der Name der Applikation
  stehen (zum Beispiel `DoIt!`), dieser soll fettgedruckt
  sein.
- Am linken Rand der Kopfzeile soll ein Logo enthalten sein.
  Verwende hier entweder ein Uhr-Emoji (⏲) oder ein von dir
  gewähltes Bild.
- Der Inhalt der Kopfzeile soll vertikal zentriert sein
  (über dem Name und unter dem Name muss also gleich viel
  Abstand sein).
- Die Kopfzeile soll beim Scrollen am oberen Bildschirmrand
  kleben. Um das zu prüfen, kannst du im HTML erstmal einige
  Dummy-Elemente (z.B. `<h1>` Elemente) hinzufügen, sodass
  genug Inhalt da ist, dass der Browser die Scroll-Leiste
  anzeigt. Alternativ kannst du dem `body`-Element eine fixe
  Höhe von 3000px geben.

### Aufgabe 3a: Formular-Struktur

- Definiere unterhalb des `header` ein `main`-Element
- Definiere den Inhalt von `main`:
  - Definiere ein `form`-Element mit einer Klasse, damit du
    es später stylen kannst. Es hat den folgenden Inhalt:
    - Ein `div` mit der Klasse `input-group`. Es hat den
      folgenden Inhalt:
      - Ein `input` mit dem type `text` und einem
        Platzhalter Text
        (`<input placeholder="Platzhalter" >`.
      - Ein `button` mit dem type `submit` mit dem Inhalt
        `Anlegen`

### Aufgabe 3b: Formular-Styling

- Gib dem `main`-Element eine maximale Breite und zentriere
  es horizontal
- Gib der `input-group` eine Hintergrundfarbe, die sich vom
  Hintergrund von `html` abhebt.
- Gib der `input-group` einen Schatten, ein großzügiges
  Padding und sorge dafür, dass Texte fettgedruckt sind.
- Passe das Aussehen des Textfelds an:
  - Setze die `font`-Property auf `inherit`, um alle
    Schriftanpassungen zu übernehmen
  - Deaktiviere den Rahmen des `input` Elements.
  - Setze geeignete focus styles.
- Passe das Aussehen des Buttons im Formular an:
  - Setze die `font`-Property auf `inherit`, um alle
    Schriftanpassungen zu übernehmen
  - Deaktiviere den Rahmen
  - Setze den Hintergrund auf `transparent`
  - Definiere ein geeignetes `padding`
  - Setze geeignete hover, focus und active styles.

### Aufgabe 4a: Statische Liste

- Nach dem Formular, soll eine Liste `ul` definiert werden.
  Diese befüllen wir erstmal statisch mit zwei
  Listeneinträge (`li`). Die `li` und `ul` Tags sollen
  geeignete Klassen haben.
- Jeder Listeneintrag soll den folgenden Inhalt haben:
  - Zunächst definieren wir einen genrischen Block mit der
    Klasse `todo-name`, hier schreiben wir die eigentliche
    Aufgabe hinein (z.B. Milch holen).
  - Zuletzt definieren wir innerhalb des `li` nocht einen
    Button mit der Klasse `delete-todo`, in den wir einfach
    den Buchstaben "x" legen.

### Aufgabe 4b: Liste stylen

- Setze `padding` auf 0 auf der Liste selbst.
- Style die Listeneinträge:
  - Nutze `list-style-type`, um die Punkte vor dem Eintrag
    zu entfernen.
  - Gib jedem Eintrag einen leichten Rahmen an der
    Unterseite.
  - Nutze Flexbox, um die Elemente im Listeneintrag
    anzuordnen:
    - Der Titel des Todos soll links, der löschen Button
      rechts angeordnet sein.
    - Die Elemente sollen vertikal zentriert sein.
    - Die Elemente sollen alle linksbündig sein.
- Style den `delete-todo` Button:
  - Der Button soll nur sichtbar sein, wenn der Nutzer mit
    der Maus über dem Listeneintrag ist.
  - Der Button soll keinen Hintergrund und keinen Rahmen
    haben.
  - Der Button soll eine fixe Höhe und eine fixe Breite
    haben
  - Er soll kein padding haben, und der Inhalt (das "X")
    soll mittels Flexbox-Eigenschaften in beide Richtungen
    zentriert sein.
  - Wenn der Button fokussiert ist, soll ein runder Rahmen
    dargestellt werden.
  - Der Button soll nur sichtbar sein, wenn der Nutzer mit
    der Maus über dem Listeneintrag ist.

### Aufgabe 5: Statische Datengrundlage

- Definiere im JavaScript eine Funktion `loadTodos`
  - Diese soll eine Liste (fest im Code definiert) mit 3
    todos zurückgeben (3 strings)
- Rufe `loadTodos` auf und logge den Rückgabewert mit
  `console.log` auf die Browser-Konsole

### Aufgabe 6: Darstellung der Daten

Im HTML haben wir bereits statische Todos definiert, wir
wollen diese jetzt dynamisch aus JavaScript erzeugen und
erweitern.

- Definiere eine Funktion `createTodoHTML(todo)`. Diese
  erwartet ein Todo-String.
- Inhalt von `createTodoHTML(todo)`:

  - Ziel: Erzeugen der DOM-Struktur eines
    Todo-Listeneintrags
    1. `li` erzeugen mit `document.createElement`
    2. Richtige Klasse setzen (Achtung, muss mit Klasse aus
       den statischen Todos im HTML übereinstimmen
    3. `innerHTML` nutzen, um den Inhalt des Listeneintrags
       zu erzeugen (analog zur Struktur der Einträge in
       `index.html`).
    4. Erzeugten DOM-Knoten zurückgeben.

- Nachdem du die Todos mit `loadTodos` geladen hast, sollen
  diese nicht auf der Konsole ausgeloggt werden, sondern:
  - Iteriere über alle geladenen todos
  - Erzeuge für jedes todo mit `createTodoHTML(...)` den
    `li`-Knoten
  - Suche das `ul`-Element mit `querySelector`
  - Füge den `li`-Knoten in der Liste ein

Erwartetes Ergebnis: Wenn du anpassungen an den Daten in
`loadTodos` machst und die Seite neu lädst, sollten die
Änderungen in der Oberfläche sichtbar sein.

### Aufgabe 7: Dynamisches hinzufügen von todos:

- Im JavaScript: Suche das `form`-Element mit
  `document.querySelector` und lege es in einer Variablen ab
- Definiere einen `submit` listener auf dem Formular:
  - Verhindere das Standardverhalten des Browsers bei diesem
    Event
  - Suche das `input`-Element und lege es in einer Variablen
    ab
  - Nimm den aktuellen Wert des Inputs (`input.value`)
  - Leere das Textfeld (`input.value = ""`)
  - Erzeuge mit `createTodoHTML(...)` einen neuen
    Listeneintrag und füge ihn in der Liste (`ul`) ein.

### Aufgabe 8: Löschen von todos:

- Passe `createTodoHTML` an:
  - Beim Click auf den Entfernen-Button soll der ganze
    Listeneintrag aus dem HTML entfernt werden

## Optionale Zusatzaufgaben

### Aufgabe 1: Liste sortieren

- Füge zwei Buttons in der Oberfläche hinzu: Aufsteigend
  sortieren & absteigend sortieren
- Wenn diese geklickt werden, soll folgendes passieren:
  - Suche dir aus dem HTML alle `li` Elemente
  - Schreibe eine Funktion: `todoFromTodoHTML(li)`, die aus
    dem li-Knoten den Text des Todos extrahiert
  - Generiere dir mit `todoFromTodoHTML` eine Liste aller
    Todo-Strings, die aktuell sichtbar sind
  - Sortiere diese Liste mit der `sort`-Funktion:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  - Entferne alle alten Todos aus dem HTML
  - Generiere die Elemente erneut mit `createTodoHTML` und
    füge sie in der Liste ein.

### Aufgabe 2: Aktuelle Uhrzeit anzeigen

Eine Todo-Applikation hat auch immer etwas mit Zeitplanung
zu tun. Deswegen wäre es nützlich, wenn in der Applikation
die aktuelle Uhrzeit sichtbar wäre.

- Im Header soll auf der rechten Seite die aktuelle Uhrzeit
  sichtbar sein.
- Schreibe dafür zunächst eine Funktion, die dir die
  aktuelle Uhrzeit im Format `HH:MM:SS` (also zum Beispiel:
  `16:45:01`) herausgibt.
- Belies dich zu der `setInterval`-Funktion:
  https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
- Nutze `setInterval`, um alle 1000 Millisekunden die
  aktuelle Uhrzeit in den Header zu schreiben.

### Aufgabe 3: Todos im Browser abspeichern

- Belies dich zu den folgenden Browser-Schnittstellen
  - JSON.parse():
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  - JSON.stringify():
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  - localStorage:
    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Bei jedem Hinzufügen und Löschen von todos, soll die Liste
  der aktuell sichtbaren Todos (du kannst dafür
  `todoFromTodoHTML` wiederverwenden!) im localStorage
  gespeichert werden
- In `loadTodos` sollen die Daten aus dem localStorage
  geladen werden. Nur wenn dort keine Daten vorhanden sind,
  soll die Dummy-Liste zurückgegeben werden.
