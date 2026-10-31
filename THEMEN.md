# Themen-Register (Jonah's Kiste)

Register des „Session Manager für Jonah's Kiste". **Nur er schreibt in diese Datei.**
Regeln: `.claude/skills/session-manager/SKILL.md` und `SESSION-MANAGER.md`.

Letztes Lagebild: 31.10.2026

**Für Entwickler-Sessions:** Beim Start die Regeln lesen (Abschnitte Befugnisrahmen und
Entwickler). Dieses Register nur lesen. Meldungen per Nachricht an den Manager und in
`meldungen/<nr>.md` im eigenen Branch. Fragen an den Manager, nicht an Jonah. Keine Passwörter
oder Schlüssel hier.

## Offene Entscheidungen

Jeder Punkt mit fester ID (`TT.MM-N`): Problem, Wege mit Folge, Empfehlung, fertige Antwort.

**31.10-1 – Chat im Spiel mit kleinerem KI-Modell?** (an Christian, Vorschlag von Session 1)
- Problem: Der Freunde-Chat in JonahCraft nutzt das große Modell, ca. 1 Cent pro Nachricht.
- Weg A: so lassen. Weg B: kleines Modell, ca. 0,02 Cent pro Nachricht, für einfache Kinder-
  Gespräche reicht es meist.
- Empfehlung: Weg B. Fertige Antwort: „31.10-1: Weg B"

**31.10-2 – KI-Verbrauchszähler im Spiel?** (an Christian, Vorschlag von Session 1)
- Weg A: nein, Grenze nur über das Ausgabelimit im API-Konto. Weg B: das Spiel zählt mit und sagt
  bei einem Monatslimit kindgerecht „für diesen Monat aufgebraucht".
- Empfehlung: Weg A plus Ausgabelimit im API-Konto (einfacher, wirkt sicher). Fertige Antwort:
  „31.10-2: Weg A"

**31.10-3 – KI auch beim Wesen-Malen?** (an Christian, Vorschlag von Session 1)
- Die Felder „was kann es / wie groß / wie viele" laufen noch über die Wörterliste. Weg B: ein
  KI-Aufruf pro Wesen (ca. 0,03 Cent). Empfehlung: Weg B, gleiche Logik wie beim Welt-Bau.
  Fertige Antwort: „31.10-3: Weg B"

## Entschieden

- 23.10 – Christian – **23.10-1 Weg B:** Der Manager startet Entwickler-Sessions selbst, sie
  melden sich per Nachricht (Test vom 23.10.: Rückmeldung kam nach ca. 10 Sekunden) und
  zusätzlich in `meldungen/`. Steht im Delta unter „Zusammenarbeit".
- 23.10 – Christian für Jonah – **23.10-2 Weg A:** Session 1 baut weiter direkt im Hauptzweig,
  solange nur sie an JonahCraft baut. Steht im Delta unter „Sonderregeln".
- 23.10 – Christian – **23.10-3 Weg A:** Branch `main` angelegt, damit die Sessions 1 und 2
  wieder starten (jeweils auf den Stand des Hauptzweigs). Rückweg: Branch `main` löschen.
- 23.10 – Christian – Das Tagesbudget von 5 € gilt für weitere Tools und Dienste, nicht für
  die Claude-Sessions (die laufen über das Abo).
- 25.10 – Christian – Persönliche Daten aus der ganzen Versionsgeschichte von
  `cj-prog/Jonah-Minecraft-` entfernt (alle drei Branches neu geschrieben). Alle Commits haben
  dadurch neue Kennungen; der Inhalt des Spiels ist unverändert. Session 1 wurde gebeten, ihren
  Stand auf die neue Geschichte zurückzusetzen.
- 31.10 – nach Ermessen – Thema 3 (Fehlerbehebung Englisch-Stand) an Session 1 gegeben, ohne
  Jonah zu fragen: kleine Fehlerbehebung, kein neues Ziel. Rückweg: Session 1 stoppen.
- 31.10 – Christian – „KI ja": Der Wunsch-Zettel schickt Jonahs Text an die Claude-API (wie die
  Chats), ca. 1 Cent pro Wunsch. Session 1 hatte dafür zu Recht Christians Zustimmung verlangt.
- 31.10 – nach Ermessen – Thema 6: Der Wunsch-Zettel darf den vorhandenen KI-Schlüssel nutzen
  (wie die Chats schon), ein kleiner Aufruf pro Wunsch. Grund: nur so versteht er Sätze
  wirklich. Rückweg: KI-Teil abschalten, Stichwort-Verfahren bleibt.
- 31.10 – Christian – Jonah wählt frei: Wünsche an den Manager (der gibt sie an Session 1 und 2
  weiter) oder direkt in die Session; die Sessions melden dem Manager jeweils zurück. Steht im Delta unter „Zusammenarbeit".
- 23.10 – nach Ermessen – Der Behelf `session-manager/` (STAND, WUENSCHE, LOG) aus der
  Einrichtung ist ersetzt durch `SESSION-MANAGER.md`, `THEMEN.md` und `meldungen/`; `CLAUDE.md`
  verweist auf die neuen Regeln. Rückweg: Commit zurückdrehen.

## Kosten heute

Nur weitere Tools und Dienste (Budget 5 € pro Tag). Claude-Sessions zählen nicht.

| Datum | Summe | Posten |
|---|---|---|
| 23.10.2026 | 0 € | – |

## Korrekturliste

– leer –

## Wer liefert gerade aus

| Ziel | Status | Thema / Branch | seit |
|---|---|---|---|
| JonahCraft: Hauptzweig / GitHub Pages | Session 1 arbeitet direkt darauf (23.10-2) | 1 / `claude/mobile-minecraft-game-690kbt` | 14.07. |

---

## Offen und in Arbeit

- **1 – JonahCraft** · in Arbeit · Session „1 Jonahcraft" (seit 14.07.) · Repo
  `cj-prog/Jonah-Minecraft-`, direkt auf dem Hauptzweig · Stand: Version 299 (31.10., KI versteht
  jeden Satz) · Arbeitsweise von Session 1 ins Delta übernommen.
- **2 – Englisch-Lern-App** · in Arbeit · Session „2 Englisch-Lern-App" (seit 30.08.) · Repo
  `cj-prog/Englisch-App`, Branch `claude/english-learning-app-kids-lp7lj4` · Stand: v2.9
  (31.10., Knopf zu JonahCraft) · Session läuft wieder (nach dem Anlegen von `main`,
  23.10-3) · Meldung 31.10.: Version 2.8 online – v2.7 eigene Gesprächsthemen, v2.8 Schutz der
  Sticker (eigene Sicherung „fredapp1_schatz"). Jonahs verlorene Sticker hat Jonah selbst
  schon wiederhergestellt (laut Christian, 31.10.).
- **Ideen-Liste (von Session 1, „Das kann das Spiel noch nicht")** · offen · für Jonahs Auswahl:
  Fahrzeuge/Achterbahnen in der eigenen Welt, reitbare Drachen, Gebäude mit Innenräumen nach
  Wunsch, Jahreszeiten, mehrere Zonen gleichzeitig („im Norden Winter, im Süden Wüste"),
  Tageszeit-Wechsel in der eigenen Welt.

## Erledigt

- **6 – Wunsch-Zettel versteht Jonah genau** · Session 1 · v297 (Wörterliste repariert, „So habe
  ich dich verstanden"-Fenster, Wasser nur unter der Erde), v298 (alle Einstellungen in Kinder-
  Worten), v299 (31.10.: mit KI-Schlüssel versteht Claude jeden Satz, ~0,03 Cent pro Welt-Bau,
  ohne Schlüssel Hinweis + Wörterliste) · Pages grün.
- **5 – Malfeld-Größe beim Wesen-Malen einstellbar** · Session 1 · JonahCraft v296 (31.10.):
  12/16/24/32 Kästchen und Anzeige 60–200 %, alte Wesen unverändert.
- **3 – Englisch-Stand im Spiel absichern** · Session 1 · JonahCraft v294 (31.10.): das Spiel
  überschreibt den Englisch-Stand nie mehr leer.
- **4 – Wechsel-Knopf zwischen JonahCraft und Englisch-App** · JonahCraft v295 (📚-Knopf in der
  oberen Knopfreihe, Session 1) und Englisch-App v2.9 (⛏️-Knopf oben rechts, Session 2), 31.10.

- **Session-Manager einrichten** · Branch `claude/relaxed-ptolemy-rz4v9m` · in den Hauptzweig
  gemergt am 25.10. (mit Christians OK).
