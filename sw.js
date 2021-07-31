var cacheName = 'Calculator';
var cachefiles = [
    '/',/*url*/
    'index.html',
    'calculator.css',
    'calculator.js',
    'calculator_icon.ico',
    'calculator.png',
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(cachefiles);
        })
    );
});

/* Serve cached content when offline */

self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    })
    );
});