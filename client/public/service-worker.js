// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          // List of files to cache
          '/',
          '/index.html',
          '/app.js',
          // Add more files as needed
        ]);
      })
    );
  });
  