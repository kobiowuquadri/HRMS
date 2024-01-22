// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/app.jsx',
        ]);
      })
    );
  });
  