const CACHE_NAME = 'vang-radar-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Always network-first for live price API calls
  if (url.hostname.includes('binance.com')) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }
  // Cache-first with network fallback for app shell
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
