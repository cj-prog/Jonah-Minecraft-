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

## Veröffentlichung

- JonahCraft: Jeder Merge in den Hauptzweig veröffentlicht das Spiel über GitHub Pages unter
  `https://cj-prog.github.io/Jonah-Minecraft-/` (Workflow „pages build and deployment").
  Das Spiel auf Jonahs Geräten lädt die neue Version innerhalb einer Minute von selbst.
- Auch die Dateien `SESSION-MANAGER.md`, `THEMEN.md` und `meldungen/` sind dann dort öffentlich
  lesbar – darum gilt besonders: keine persönlichen Daten.
- Englisch-App: noch nachsehen.

## Budget

- 5 € pro Tag, alle Sessions zusammen.
- Kosten einer Session liest der Manager mit `get_session` ab (`usage.cost_usd`, in US-Dollar).
  Zur Sicherheit gilt 5 $ als Grenze (1 $ ist weniger wert als 1 €).
- `cost_usd` zählt seit Beginn der Session. Die Tageskosten sind darum der Unterschied zum
  Stand vom Vortag; der Manager notiert dafür jeden Tag die Stände im Register.

## Konten

- GitHub: vorerst Christians Konto. Jeder Befehl nennt das Konto selbst.
- In Cloud-Sessions gibt es keine globale Anmeldung zum Umstellen: Jede Session arbeitet über das
  mit claude.ai verbundene GitHub-Konto, das ist Christians Konto `cj-prog`.

## Sonderregeln

- Kein Hauptmanager. Keine Meldungen an andere Bereiche.
- Weitere Regeln: kommen von Session 1 („1 Jonahcraft"), angefragt am 23.10.
