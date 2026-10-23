# Session-Manager Jonah's Kiste (Delta)

Ergänzt `.claude/skills/session-manager/SKILL.md`. Bei Widerspruch gilt diese Datei.
Start: „du bist der Session-Manager" in einer Cloud-Session dieses Repos. Register: `THEMEN.md`.

## Bereich

- Kurzname: Jonah's Kiste → Titel „Session Manager für Jonah's Kiste" (so von Christian benannt).
- Chef: Jonah. Fragen und Entscheidungen gehen an ihn.
- Worum geht es: Jonahs eigene Projekte – sein Minecraft-Spiel „JonahCraft" und seine
  Englisch-Lern-App.

## Repo und Sessions

- Repos (beide auf GitHub, Konto `cj-prog`):
  - `cj-prog/Jonah-Minecraft-` – JonahCraft. Hauptzweig: `claude/mobile-minecraft-game-690kbt`
    (Standard-Branch des Repos). Hier liegen auch Regeln und Register des Managers.
  - `cj-prog/Englisch-App` – Englisch-Lern-App. Hauptzweig: `claude/english-learning-app-kids-lp7lj4`
    (Standard-Branch des Repos).
- Entwickler-Sessions: Cloud-Sessions dieser Repos, Titel „<Nr> <Thema>".
- Branches: `thema-<nr>-<kurz>`. Cloud-Sessions bekommen von sich aus einen `claude/…`-Branch
  zugeteilt; der Startauftrag nennt deshalb den Themen-Branch ausdrücklich.
- Beide Repos haben zusätzlich einen Branch `main` (angelegt 23.10.). Er ist nur der Startpunkt
  der Sessions 1 und 2, die beim Start `main` laden. Nicht löschen.

## Zusammenarbeit (ersetzt im Skill „So arbeiten Manager und Entwickler zusammen")

Getestet am 23.10.: Cloud-Sessions können einander Nachrichten schicken. Darum (Entscheidung 23.10-1):
- Manager-Session: „Session Manager für Jonah's Kiste", `session_01J8Ww7nwXLTSSsk88A7M4mx`.
- Der Manager startet Entwickler-Sessions selbst (`create_session` mit Repo, Titel „<Nr> <Thema>",
  Branch `thema-<nr>-<kurz>` als `outcome_branch`) und gibt den Startauftrag als erste Nachricht.
  Jonah muss nichts kopieren.
- Entwickler-Sessions melden sich per `send_message` beim Manager (bei Start, Fragen, Blockern,
  fertig) und schreiben dasselbe als Nachweis in `meldungen/<nr>.md` in ihrem Branch.
- Antworten auf Fragen schickt der Manager per `send_message` an die Session.
- Fallback, wenn Nachrichten nicht ankommen: der Weg aus dem Skill (Jonah kopiert, `meldungen/`).

## Veröffentlichung

- JonahCraft: Jeder Merge in den Hauptzweig veröffentlicht das Spiel über GitHub Pages unter
  `https://cj-prog.github.io/Jonah-Minecraft-/` (Workflow „pages build and deployment").
  Das Spiel auf Jonahs Geräten lädt die neue Version innerhalb einer Minute von selbst.
- Auch die Dateien `SESSION-MANAGER.md`, `THEMEN.md` und `meldungen/` sind dann dort öffentlich
  lesbar – darum gilt besonders: keine persönlichen Daten.
- Englisch-App: noch nachsehen.

## Budget

- 5 € pro Tag, alle Sessions zusammen – **für weitere Tools und Dienste** (z. B. bezahlte
  Schnittstellen, Hosting, Abos). Die Kosten der Claude-Sessions selbst zählen nicht, sie laufen
  über Christians Claude-Abo.

## Konten

- GitHub: vorerst Christians Konto. Jeder Befehl nennt das Konto selbst.
- In Cloud-Sessions gibt es keine globale Anmeldung zum Umstellen: Jede Session arbeitet über das
  mit claude.ai verbundene GitHub-Konto, das ist Christians Konto `cj-prog`.

## Sonderregeln

- Kein Hauptmanager. Keine Meldungen an andere Bereiche.
- Session 1 („1 Jonahcraft") darf weiter direkt auf dem Hauptzweig arbeiten, solange nur sie an
  JonahCraft baut (Entscheidung 23.10-2). Sobald eine zweite Session am Spiel baut, gilt für
  alle wieder: eigener Branch, Merge nach Jonahs OK.
- Weitere Regeln: kommen von Session 1 („1 Jonahcraft"), angefragt am 23.10.
