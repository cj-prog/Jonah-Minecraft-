# Themen-Register (<Kurzname>)

Register des „Session-Manager <Kurzname>". **Nur er schreibt in diese Datei.**
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

## Korrekturliste

– leer –

## Wer liefert gerade aus

| Ziel | Status | Thema / Branch | seit |
|---|---|---|---|
| Hauptzweig / GitHub Pages | wartet auf Jonahs OK zum Merge | 1 / `claude/relaxed-ptolemy-rz4v9m` | 23.10. |

---

## Offen und in Arbeit

- **1 – Session-Manager einrichten** · in Arbeit · Branch `claude/relaxed-ptolemy-rz4v9m`
  (vor Einführung der Themen-Branches angelegt) · Nächster Schritt: Kurzname, „Worum geht es"
  und Sonderregeln mit Jonah klären, dann Merge mit Jonahs OK.

## Erledigt

– keine –

Stand des Spiels beim Einrichten: Version 284 (20.10.2026, „Eigene Filme sind nicht mehr
unscharf"). Alle früheren Versionen stehen in der Git-Historie.
