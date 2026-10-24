// JonahCraft Offline-Helfer 📴
// Merkt sich das ganze Spiel auf dem Handy: einmal mit Internet öffnen,
// danach läuft es auch OHNE Internet (der Spielstand liegt sowieso im Handy).
const CACHE = 'jonahcraft-offline-v2';

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./'])).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Die regelmäßige Frage "gibt es schon eine neuere Version?" geht direkt
  // ins Internet und wird NICHT aufgehoben - sonst würde sich der Speicher
  // mit lauter alten Abfragen füllen.
  if (req.url.indexOf('frisch=') >= 0) return;
  // Die SEITE SELBST holen wir immer ganz frisch (ohne Browser-Speicher).
  // Sonst hat Jonah nach einem Update tagelang noch die alte Version im
  // Handy - genau das ist passiert.
  const seite = req.mode === 'navigate' || req.destination === 'document';
  const holen = seite ? new Request(req.url, { cache: 'no-store' }) : req;
  // Erst das Internet versuchen (damit Updates ankommen) und die frische
  // Version gleich für später aufheben. Klappt es nicht: aus dem Speicher!
  e.respondWith(
    fetch(holen).then((r) => {
      if (r && r.ok) {
        const kopie = r.clone();
        caches.open(CACHE).then(c => c.put(seite ? './' : req, kopie)).catch(()=>{});
      }
      return r;
    }).catch(() =>
      caches.match(req).then(r => r || caches.match('./'))
    )
  );
});
