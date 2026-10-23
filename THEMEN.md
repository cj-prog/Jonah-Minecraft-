# Themen-Register (Jonah's Kiste)

Register des „Session Manager für Jonah's Kiste". **Nur er schreibt in diese Datei.**
Regeln: `.claude/skills/session-manager/SKILL.md` und `SESSION-MANAGER.md`.

Letztes Lagebild: –

**Für Entwickler-Sessions:** Beim Start die Regeln lesen (Abschnitte Befugnisrahmen und
Entwickler). Dieses Register nur lesen. Meldungen in `meldungen/<nr>.md` im eigenen Branch.
Fragen an den Manager, nicht an Jonah. Keine Passwörter oder Schlüssel hier.

## Offene Entscheidungen

Jeder Punkt mit fester ID (`TT.MM-N`): Problem, Wege mit Folge, Empfehlung, fertige Antwort.

**23.10-1 – Wie melden sich die Entwickler-Sessions beim Manager?** (an Christian)
- Problem: Die Regeln gehen davon aus, dass Cloud-Sessions sich keine Nachrichten schicken
  können. Am 23.10. getestet: Es geht doch. Der Manager hat eine Session gestartet, und sie hat
  ihm nach ca. 10 Sekunden eine Nachricht zurückgeschickt (Kosten unter 1 Cent).
- Weg A (wie jetzt): Jonah öffnet jede Entwickler-Session selbst und kopiert den Startauftrag
  hinein; Rückmeldung nur über `meldungen/<nr>.md`. Folge: viel Kopieren für Jonah.
- Weg B: Der Manager startet die Entwickler-Session selbst und gibt ihr den Auftrag; sie meldet
  sich per Nachricht beim Manager und schreibt zusätzlich `meldungen/<nr>.md` als Nachweis.
  Folge: Jonah redet nur mit dem Manager; der Manager kann die Kosten jeder Session ablesen.
- Empfehlung: Weg B, weil Jonah dann nichts kopieren muss. Die Dateien bleiben als Rückfall.
- Fertige Antwort: „23.10-1: Weg B"

**23.10-2 – Session 1 baut direkt im Hauptzweig** (an Jonah)
- Problem: Session 1 („1 Jonahcraft") speichert jede Änderung direkt in den Hauptzweig. Damit
  ist sie sofort in Jonahs Spiel. Die neuen Regeln sagen: erst im eigenen Branch bauen, dann
  mergen, wenn Jonah Ja sagt.
- Weg A: Session 1 macht weiter wie bisher. Folge: schnell, aber ein Fehler ist sofort im Spiel.
- Weg B: Session 1 baut ab jetzt im eigenen Branch, Jonah sagt dann „mergen". Folge: ein
  Schritt mehr, aber Jonah prüft vorher.
- Empfehlung: Weg A, solange nur Session 1 an JonahCraft baut – das Spiel lädt Fehler-Fixes
  genauso schnell nach. Weg B, sobald zwei Sessions gleichzeitig am Spiel bauen.
- Fertige Antwort: „23.10-2: Weg A"

**23.10-3 – Session 2 startet nicht mehr** (an Christian, weil es ein anderes Repo betrifft)
- Problem: Session 2 lädt beim Start den Branch `main` aus `cj-prog/Englisch-App`. Den gibt es
  dort nicht (mehr) – es gibt nur `claude/english-learning-app-kids-lp7lj4`. Darum bricht der
  Start ab. Session 1 ist genauso eingestellt (`main` in `cj-prog/Jonah-Minecraft-`, auch dort
  gibt es keinen `main`); sie läuft nur, weil ihr Rechner noch an ist. Startet er neu, droht
  derselbe Fehler.
- Weg A: In beiden Repos einen Branch `main` anlegen, der auf den aktuellen Hauptzweig zeigt.
  Folge: Beide Sessions starten wieder und behalten ihr Gedächtnis. `main` ist nur ein
  Startpunkt, an der Veröffentlichung ändert sich nichts.
- Weg B: Für die Englisch-App eine neue Session starten. Folge: Sie kennt die bisherigen
  Gespräche mit Jonah nicht, nur den Code.
- Empfehlung: Weg A – schnell, umkehrbar (Branch wieder löschen), nichts geht verloren.
- Fertige Antwort: „23.10-3: Weg A"

## Entschieden

- 23.10 – nach Ermessen – Budget in Dollar: 5 $ gilt als Tagesgrenze, weil die Kosten nur in
  Dollar angezeigt werden und 5 $ sicher unter 5 € liegt. Rückweg: Grenze im Delta ändern.
- 23.10 – nach Ermessen – Der Behelf `session-manager/` (STAND, WUENSCHE, LOG) aus dieser
  Session ist ersetzt durch `SESSION-MANAGER.md`, `THEMEN.md` und `meldungen/`; `CLAUDE.md`
  verweist auf die neuen Regeln. Rückweg: Commit zurückdrehen.

## Kosten heute

| Datum | Summe | Posten |
|---|---|---|
| 23.10.2026 | 1,40 $ (Stand 16:13 UTC) | Einrichtung Session-Manager (diese Session) 1,39 $, Rückmelde-Test 0,01 $ |

Zählerstände (`cost_usd` seit Session-Beginn), Tageskosten = Unterschied zum Vortag:

| Datum | Session | Stand |
|---|---|---|
| 23.10.2026 16:20 UTC | 1 Jonahcraft | 116,01 $ |
| 23.10.2026 16:20 UTC | 2 Englisch-Lern-App | 151,14 $ |

## Korrekturliste

– leer –

## Wer liefert gerade aus

| Ziel | Status | Thema / Branch | seit |
|---|---|---|---|
| JonahCraft: Hauptzweig / GitHub Pages | Session 1 arbeitet direkt darauf (siehe 23.10-2) | 1 / `claude/mobile-minecraft-game-690kbt` | 14.07. |
| JonahCraft: Hauptzweig | Manager-Einrichtung wartet auf Jonahs OK zum Merge | `claude/relaxed-ptolemy-rz4v9m` | 23.10. |

---

## Offen und in Arbeit

- **1 – JonahCraft** · in Arbeit · Session „1 Jonahcraft" (seit 14.07.) · Repo
  `cj-prog/Jonah-Minecraft-`, direkt auf dem Hauptzweig · Stand: Version 284 (20.10.) ·
  Nächster Schritt: Regeln von Session 1 übernehmen (angefragt 23.10.).
- **2 – Englisch-Lern-App** · in Arbeit · Session „2 Englisch-Lern-App" (seit 30.08.) · Repo
  `cj-prog/Englisch-App`, Branch `claude/english-learning-app-kids-lp7lj4` · Stand: v2.4
  („Freund bleibt, bis man Tschüss sagt") · **Blocker:** Die Session startet nicht mehr
  (23.10. 16:16 UTC: „Branch oder Commit im Repository nicht gefunden"). Ursache gefunden,
  siehe 23.10-3.

## Erledigt

– keine –

Stand des Spiels beim Einrichten: Version 284 (20.10.2026, „Eigene Filme sind nicht mehr
unscharf"). Alle früheren Versionen stehen in der Git-Historie.
