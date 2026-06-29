// ============================================================
// ========== SERVICE WORKER ==========
// ============================================================

const CACHE_NAME = 'samad-elmakchi-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/main.css',
  '/main.js',
  '/translations.js',
  '/manifest.json',
  '/samad-elmakchi.jpg'
];

// ========== FAVICON ASSETS ==========
const FAVICON_ASSETS = [
  '/favicon/apple-touch-icon.png',
  '/favicon/favicon-16x16.png',
  '/favicon/favicon-32x32.png',
  '/favicon/favicon-48x48.png',
  '/favicon/favicon-192x192.png',
  '/favicon/favicon-512x512.png',
  '/favicon/favicon.ico',
  '/favicon/favicon.svg'
];

// ========== FLAG ASSETS ==========
const FLAG_ASSETS = [
  '/flags/en.png',
  '/flags/ir.png',
  '/flags/ar.png',
  '/flags/az.png',
  '/flags/tr.png',
  '/flags/am.png',
  '/flags/ru.png',
  '/flags/ge.png'
];

// ========== FONT ASSETS ==========
const FONT_ASSETS = [
  '/iran-sans/iran_sans_web_fa_num.woff2',
  '/iran-sans/iran_sans_web_fa_num_bold.woff2',
  '/iran-sans/iran_sans_web_fa_num_light.woff2',
  '/iran-sans/iran_sans_web_fa_num_medium.woff2',
  '/iran-sans/iran_sans_web_fa_num_black.woff2'
];

// ========== COMBINE ALL ASSETS ==========
const URLS_TO_CACHE = [
  ...STATIC_ASSETS,
  ...FAVICON_ASSETS,
  ...FLAG_ASSETS,
  ...FONT_ASSETS
];

// ========== INSTALL EVENT ==========
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Caching assets...');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(function () {
        console.log('[Service Worker] Assets cached successfully');
        return self.skipWaiting();
      })
      .catch(function (error) {
        console.error('[Service Worker] Cache failed:', error);
      })
  );
});

// ========== ACTIVATE EVENT ==========
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
      .then(function () {
        console.log('[Service Worker] Activated and ready to serve');
        return self.clients.claim();
      })
  );
});

// ========== FETCH EVENT ==========
self.addEventListener('fetch', function (event) {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function (cachedResponse) {
        // Return cached response if exists
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then(function (response) {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response for caching
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(function () {
            // Return offline fallback for HTML pages
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// ========== MESSAGE EVENT ==========
self.addEventListener('message', function (event) {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// ========== PUSH EVENT ==========
self.addEventListener('push', function (event) {
  var data = event.data ? event.data.json() : {};
  var title = data.title || 'Samad Elmakchi';
  var options = {
    body: data.body || 'Check out my latest Python projects!',
    icon: '/favicon/favicon-192x192.png',
    badge: '/favicon/favicon-48x48.png',
    data: data.url || '/',
    actions: [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// ========== NOTIFICATION CLICK EVENT ==========
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (event.action === 'close') {
    return;
  }

  var url = event.notification.data || '/';

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    })
      .then(function (windowClients) {
        // Check if there is already a window/tab open
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, open a new window
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});