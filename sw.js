// JonahCraft Offline-Helfer 📴
// Merkt sich das ganze Spiel auf dem Handy: einmal mit Internet öffnen,
// danach läuft es auch OHNE Internet (der Spielstand liegt sowieso im Handy).
const CACHE = 'jonahcraft-offline-v1';

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
  // Erst das Internet versuchen (damit Updates ankommen) und die frische
  // Version gleich für später aufheben. Klappt es nicht: aus dem Speicher!
  e.respondWith(
    fetch(req).then((r) => {
      if (r && r.ok) {
        const kopie = r.clone();
        caches.open(CACHE).then(c => c.put(req, kopie)).catch(()=>{});
      }
      return r;
    }).catch(() =>
      caches.match(req).then(r => r || caches.match('./'))
    )
  );
});
