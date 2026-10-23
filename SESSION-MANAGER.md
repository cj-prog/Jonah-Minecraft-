# Session-Manager <Kurzname> (Delta)

Ergänzt `.claude/skills/session-manager/SKILL.md`. Bei Widerspruch gilt diese Datei.
Start: „du bist der Session-Manager" in einer Cloud-Session dieses Repos. Register: `THEMEN.md`.

## Bereich

- Kurzname: <Kurzname> → Titel „Session-Manager <Kurzname>".
- Chef: Jonah. Fragen und Entscheidungen gehen an ihn.
- Worum geht es: <ein Satz>.

## Repo und Sessions

- Repo: `cj-prog/Jonah-Minecraft-` auf GitHub. Hauptzweig: `claude/mobile-minecraft-game-690kbt`
  (das ist der Standard-Branch des Repos).
- Entwickler-Sessions: Cloud-Sessions dieses Repos, Titel „<Nr> <Thema>".
- Branches: `thema-<nr>-<kurz>`. Cloud-Sessions bekommen von sich aus einen `claude/…`-Branch
  zugeteilt; der Startauftrag nennt deshalb den Themen-Branch ausdrücklich.

## Veröffentlichung

- Jeder Merge in den Hauptzweig veröffentlicht das Spiel über GitHub Pages unter
  `https://cj-prog.github.io/Jonah-Minecraft-/` (Workflow „pages build and deployment").
  Das Spiel auf Jonahs Geräten lädt die neue Version innerhalb einer Minute von selbst.
- Auch die Dateien `SESSION-MANAGER.md`, `THEMEN.md` und `meldungen/` sind dann dort öffentlich
  lesbar – darum gilt besonders: keine persönlichen Daten.

## Budget

- 5 € pro Tag, alle Sessions zusammen.
- Kosten einer Session liest der Manager mit `get_session` ab (`usage.cost_usd`, in US-Dollar).
  Zur Sicherheit gilt 5 $ als Grenze (1 $ ist weniger wert als 1 €).

## Konten

- GitHub: vorerst Christians Konto. Jeder Befehl nennt das Konto selbst.
- In Cloud-Sessions gibt es keine globale Anmeldung zum Umstellen: Jede Session arbeitet über das
  mit claude.ai verbundene GitHub-Konto, das ist Christians Konto `cj-prog`.

## Sonderregeln

- Kein Hauptmanager. Keine Meldungen an andere Bereiche.
- <weitere oder „keine">
