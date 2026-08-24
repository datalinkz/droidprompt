// DroidLink Service Worker
const CACHE_NAME = 'droidlink-v7';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache core assets (skip root to avoid caching stale auth state)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  const url = event.request.url;
  
  // Skip ALL external API calls and CDN requests - always go to network
  if (url.includes('/chat/completions')) return;
  if (url.includes('firebase')) return;
  if (url.includes('googleapis.com')) return;
  if (url.includes('gstatic.com')) return;
  if (url.includes('cdnjs.cloudflare.com')) return;
  if (url.includes('cdn.jsdelivr.net')) return;
  if (url.includes('cdn.tailwindcss.com')) return;
  if (url.includes('api.github.com')) return;
  
  // Skip Firestore and auth related
  if (url.includes('firestore.googleapis.com')) return;
  if (url.includes('identitytoolkit.googleapis.com')) return;
  if (url.includes('securetoken.googleapis.com')) return;
  if (url.includes('firebaseapp.com')) return;
  
  // Only cache same-origin requests (our own files)
  if (!url.startsWith(self.location.origin)) return;
  
  // NEVER cache HTML pages - always fetch fresh (fixes stale version issue)
  if (event.request.mode === 'navigate' || url.endsWith('.html') || url === self.location.origin + '/') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(event.request);
      })
  );
});
