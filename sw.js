// Service worker: permette di installare l'app e di aprirla anche senza connessione.
const CACHE = 'officina-v6';
const BASE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './icon-maskable-512.png', './favicon.png', './logo.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).catch(() => {})); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    // Prima la rete (così gli aggiornamenti arrivano subito), poi la copia salvata.
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else if (u.hostname === 'www.gstatic.com' || u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') {
    // Librerie e caratteri: prima la copia salvata.
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); return res; })));
  }
});
