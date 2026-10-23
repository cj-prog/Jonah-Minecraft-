# JonahCraft – Hinweise für Claude

Dieses Projekt ist **Jonahs** Minecraft fürs Handy/Tablet. Jonah ist ein Kind und
arbeitet meistens selbst am Tablet mit Claude Code (Cloud-Session über GitHub).
Seine Wünsche und Fehlermeldungen kommen in Kindersprache – nachfragen ist okay,
aber freundlich, kurz und auf Deutsch.

## 🧭 Session Manager – IMMER zuerst

Jede Cloud-Session startet in einem frischen Container ohne Erinnerung. Das
Gedächtnis zwischen den Sessions liegt deshalb hier im Repository:

| Datei | Wofür |
|---|---|
| `session-manager/STAND.md` | Aktueller Stand: Version, was zuletzt gebaut wurde, offene Baustellen, bekannte Fehler |
| `session-manager/WUENSCHE.md` | Jonahs Wunschliste (Ideen, die noch nicht gebaut sind) |
| `session-manager/LOG.md` | Tagebuch aller Sessions, neueste oben |

**Am Anfang jeder Session:**
1. `session-manager/STAND.md` und `session-manager/WUENSCHE.md` lesen.
2. Jonah kurz begrüßen und in 2–3 Sätzen sagen, wo wir stehen
   (z. B. „Zuletzt haben wir … gebaut. Auf deiner Wunschliste steht noch …").

**Am Ende jeder Session (bzw. nach jeder fertigen Version), im selben Commit:**
1. `STAND.md` aktualisieren (Version, letzte Änderungen, offene Punkte).
2. Oben in `LOG.md` einen kurzen Eintrag ergänzen (Datum, Version(en), was
   Jonah wollte, was gebaut wurde, was offen bleibt).
3. Erledigte Wünsche in `WUENSCHE.md` abhaken, neue Wünsche von Jonah eintragen.

Die Einträge kurz halten – lieber 3 klare Zeilen als eine halbe Seite.

## 🛠️ Regeln fürs Projekt

- Das ganze Spiel steckt in **einer Datei**: `index.html` (keine fremden
  Bibliotheken, kein Build-Schritt). `sw.js` ist der Offline-Service-Worker.
- Jede neue Version: `GAME_VERSION` in `index.html` um **+1** erhöhen.
- Commit-Nachrichten auf Deutsch, Format: `vNNN: Kurzer Satz, was neu ist`,
  darunter eine Erklärung (was Jonah wollte/gemeldet hat, was geändert wurde,
  wie getestet wurde).
- Neue Funktionen kurz und kindgerecht in der `README.md` unter
  „Was das Spiel kann" ergänzen.
- Texte im Spiel: Deutsch, kindgerecht, gern mit Emojis.
- Testen mit Playwright/Chromium (vorinstalliert). Test-Skripte gehören ins
  Scratchpad, nicht ins Repository. Screenshots anschauen, bevor gepusht wird.
- Spielstände liegen im `localStorage` von Jonahs Gerät – Änderungen müssen alte
  Spielstände weiter laden können.
