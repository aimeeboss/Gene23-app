self.addEventListener('install', (e)=>{self.skipWaiting();});
self.addEventListener('activate', (e)=>{self.clients.claim();});
const CACHE = 'gene23-cache-v1';
const ASSETS = ['/', '/manifest.webmanifest'];
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  e.respondWith((async()=>{
    try { const res = await fetch(e.request); if (res && res.ok) return res; } catch(err) {}
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request, { ignoreSearch: true });
    if (cached) return cached;
    const res2 = await fetch(e.request).catch(()=>null);
    if (res2) { cache.put(e.request, res2.clone()); return res2; }
    return new Response('Offline', { status: 503 });
  })());
});
