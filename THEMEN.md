# Themen-Register (Jonah's Kiste)

Register des „Session Manager für Jonah's Kiste". **Nur er schreibt in diese Datei.**
Regeln: `.claude/skills/session-manager/SKILL.md` und `SESSION-MANAGER.md`.

Letztes Lagebild: 02.11.2026

**Für Entwickler-Sessions:** Beim Start die Regeln lesen (Abschnitte Befugnisrahmen und
Entwickler). Dieses Register nur lesen. Meldungen per Nachricht an den Manager und in
`meldungen/<nr>.md` im eigenen Branch. Fragen an den Manager, nicht an Jonah. Keine Passwörter
oder Schlüssel hier.

## Offene Entscheidungen

Jeder Punkt mit fester ID (`TT.MM-N`): Problem, Wege mit Folge, Empfehlung, fertige Antwort.

– keine –

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
- 01.11 – Christian – **01.11-1 Weg A:** Online-Rangliste mit Firebase (Spark-Tarif, ohne
  Zahlungsdaten). Projekt liegt im Google-Konto von Jonah; Empfehlung: Christian als Inhaber
  hinzufügen.
- 31.10 – Christian – **31.10-1 Weg B:** Freunde-Chat im Spiel auf das kleine Modell
  (claude-haiku-5-5). **31.10-2 Weg A:** kein Zähler im Spiel, Grenze über das Ausgabelimit im
  API-Konto. **31.10-3 Weg B:** KI auch für die Felder beim Wesen-Malen. → Thema 7 an Session 1.
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
  `cj-prog/Jonah-Minecraft-`, direkt auf dem Hauptzweig · Stand: Version 313 (02.11., Tipp-Kasten
  nicht mehr bei Jonah) · Arbeitsweise von Session 1 ins Delta übernommen.
- **2 – Englisch-Lern-App** · in Arbeit · Session „2 Englisch-Lern-App" (seit 30.08.) · Repo
  `cj-prog/Englisch-App`, Branch `claude/english-learning-app-kids-lp7lj4` · Stand: v2.9
  (31.10., Knopf zu JonahCraft) · Session läuft wieder (nach dem Anlegen von `main`,
  23.10-3) · Meldung 31.10.: Version 2.8 online – v2.7 eigene Gesprächsthemen, v2.8 Schutz der
  Sticker (eigene Sicherung „fredapp1_schatz"). Jonahs verlorene Sticker hat Jonah selbst
  schon wiederhergestellt (laut Christian, 31.10.).
- **8 – Geld verdienen mit JonahCraft** · in Arbeit (Gespräch, kein Bauauftrag) · neue Session
  „8 Geld verdienen mit JonahCraft" vom Manager gestartet am 01.11. (`session_01ENoEgaWL1MYrLnYWcfT6Te`)
  · nichts ändern/pushen/anmelden; Ergebnisse meldet sie dem Manager.
  **Entscheidung 01.11. (Jonah mit Familie):** Erst 10 Leute finden, die JonahCraft spielen
  (Link an Familie/Freunde, evtl. Schule, QR-Code); Bezahlen, Werbung, Spenden bis dahin
  zurückgestellt. Kein Spielerzähler (Datenschutz bei Kindern), lieber nachfragen. Mögliche
  spätere Wünsche: QR-Code oder „Teilen"-Knopf. Offen: Jonahs Frage, wie Updates laufen sollen.
- **11 – Online-Rangliste** · in Arbeit · Wunsch von Jonah (01.11.): Spieler geben vor dem Spielen
  einen Namen ein, am Rand eine Rangliste mit Punkten. Christian (01.11.): Weg A mit Firebase,
  Projekt „jonahcraft" (Spark-Tarif, kostenlos, Firestore Frankfurt) ist angelegt, Web-App
  registriert · in Arbeit: an Session 1 gegeben (01.11.) – Spitzname vor dem Spielen mit
  Wortfilter, Top-10 am Rand, Sicherheitsregeln (Christian fügt sie in der Konsole ein) ·
  Punkte (Jonah, 01.11.): Block abbauen 1, 1 € gesammelt 2, Bauen nach Höhe (2 hoch 3, über 20
  hoch mehr), dazu Tiere zähmen, Monster/Räuber/Riesen besiegen (Werte als Vorschlag, änderbar);
  mit Schutz gegen Tricksen an Session 1 weitergegeben.
  Aussehen (Jonah, 01.11.): größerer Streifen an der Seite, oben der eigene Eintrag („Jona 15"),
  darunter die anderen; nur wer gerade spielt, steht drin; Punkte bleiben gespeichert und gelten
  beim nächsten Mal weiter (hängen am Gerät).
  **v304 online (01.11.):** Spitzname auf der Startseite, Rangliste links (einklappbar), anonyme
  Anmeldung per REST, `firestore.rules` im Repo · wartet auf Christian: Regeln in der Konsole
  veröffentlichen (+ „Anonym" prüfen).
  **v305 (01.11.):** Jonahs Punkte-Tabelle mit Schutz gegen Tricksen, breiter Streifen, eigener
  Eintrag oben, nur wer in den letzten 2 Minuten gespielt hat, Punkte bleiben (pro Gerät) ·
  Geräte-Wechsel: Session 1 empfiehlt „nichts tun" (sonst Umzugs-Code) – nur auf Nachfrage.
  Offen: nur noch Christians Schritt in der Konsole.
- **19 – Update-Kasten sagt, was neu ist** · in Arbeit · Wunsch von Jonah (02.11.): statt immer
  „Version N ist fertig" ein kurzer Satz, was neu ist (NEU_TEXT) · an Session 1 gegeben; dazu
  Frage, ob die Sicherungsdatei im Download-Ordner seltener angelegt werden kann.
- **Ideen-Liste (von Session 1, „Das kann das Spiel noch nicht")** · offen · für Jonahs Auswahl:
  Fahrzeuge/Achterbahnen in der eigenen Welt, reitbare Drachen, Gebäude mit Innenräumen nach
  Wunsch, Jahreszeiten, mehrere Zonen gleichzeitig („im Norden Winter, im Süden Wüste"),
  Tageszeit-Wechsel in der eigenen Welt.

## Erledigt

- **18 – Tipp-Kasten erschien bei Jonah** · Session 1 · v312/v313 (02.11.): Tipps kommen nur noch
  auf wirklich neuen Geräten (keine Spur vom Spielen, nicht Jonahs Gerät); offene Tipps gehen auf
  Jonahs Gerät sofort zu.
- **12 – Hinweise beim ersten Spielen** · Session 1 · v311: acht Tipps beim allerersten Spielen, überspringbar, auf der Startseite wieder abrufbar (01.11.).
- **13 – Jonahs Sachen nur für Jonah** · Session 1 · v307: englische Freunde, 📚-Knopf und Lern-Aufgaben nur auf Jonahs Gerät (01.11.).
- **14 – Knöpfe auf kleinen Handys** · Session 1 · v309: auf kleinen Handys nur die wichtigsten Knöpfe, Rest im ⋯-Menü (01.11.).
- **16 – Spielgeld für Punkte** · Session 1 · v310: je 100 Punkte 20 €, je 1000 Punkte +250 € Spielgeld, Belohnung bringt keine Punkte (01.11.).
- **17 – Teleport-Liste schlecht scrollbar** · Session 1 · v308: Teleport-Liste scrollt überall, Wischen löst nie aus (01.11.).

- **15 – Geld-Sauger fehlt** · Session 1 · v306 (01.11.): Ursache war Jonahs alter Spielstand
  (Stelle wurde vor v264 mit Geld belegt und in v265 zu Luft geräumt); Sauger, Schütte und
  Schild werden jetzt bei jedem Start geprüft und zurückgestellt, kein Geld geht verloren.
- **9 – Riesige Tore in der Riesenburg** · Session 1 · v303 (01.11.): Tore in allen 48
  Türöffnungen, Antippen zieht sie wie ein Fallgitter hoch, Diener kommen trotzdem durch.
- **10 – Startbildschirm zu groß** · Session 1 · v301 (Spielen-Knopf immer im Bild) und v302
  (01.11.: Neuigkeiten weg, nur noch „So wird gespielt", Version klein unten).
- **7 – KI-Feinschliff** · Session 1 · v300 (01.11.): alle KI-Aufrufe mit dem kleinen Modell,
  KI versteht auch die Wesen-Felder.
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
