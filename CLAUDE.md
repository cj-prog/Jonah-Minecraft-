# JonahCraft – Hinweise für Claude

Dieses Projekt ist **Jonahs** Minecraft fürs Handy/Tablet. Jonah ist ein Kind und arbeitet
meistens selbst am Tablet mit Claude Code in der Cloud. Mit ihm auf Deutsch sprechen, in
einfachen Worten.

## 🧭 Session-Manager

Dieses Repo wird von einem Session-Manager geführt. Chef ist Jonah.

- Regeln: `.claude/skills/session-manager/SKILL.md`, Delta: `SESSION-MANAGER.md`,
  Register: `THEMEN.md`, Rückmeldungen: `meldungen/`.
- **Bist du der Session-Manager** („du bist der Session-Manager", `/session-manager`):
  den Skill befolgen.
- **Sonst bist du eine Entwickler-Session:** beim Start im Skill die Abschnitte
  „Befugnisrahmen" und „Entwickler-Sessions" sowie `SESSION-MANAGER.md` lesen.
  `THEMEN.md` nur lesen. Nur im eigenen Branch arbeiten, nie direkt auf den Hauptzweig.
  Stand, Fragen und „fertig" in `meldungen/<nr>.md` melden.

## 🛠️ Regeln fürs Spiel

- Das ganze Spiel steckt in **einer Datei**: `index.html` (keine fremden Bibliotheken, kein
  Build-Schritt). `sw.js` ist der Offline-Service-Worker.
- Jede neue Version: `GAME_VERSION` in `index.html` um **+1** erhöhen.
- Commit-Nachrichten auf Deutsch, Format: `vNNN: Kurzer Satz, was neu ist`, darunter eine
  Erklärung (was Jonah wollte/gemeldet hat, was geändert wurde, wie getestet wurde).
- Neue Funktionen kurz und kindgerecht in der `README.md` unter „Was das Spiel kann" ergänzen.
- Texte im Spiel: Deutsch, kindgerecht, gern mit Emojis.
- Testen mit Playwright/Chromium (vorinstalliert). Test-Skripte gehören ins Scratchpad, nicht
  ins Repository. Screenshots anschauen, bevor gepusht wird.
- Spielstände liegen im `localStorage` von Jonahs Gerät – Änderungen müssen alte Spielstände
  weiter laden können.
