var cacheName = 'Calculator';
var cachefiles = [
    '/',/*url*/
    'index.html',
    'calculator.css',
    'calculator.js',
    
    'serviceWorker.js',

    'calculator ico.ico',

    'calculator 64x64.png',
    'calculator 72x72.png',
    'calculator 96x96.png',
    'calculator 128x128.png',
    'calculator 144x144.png',
    'calculator 152x152.png',
    'calculator 192x192.png',
    'calculator 256x256.png',
    'calculator 512x512.png'
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntill(
        caches.open(cacheName).then(cache => {
            cache.addAll(cachefiles)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request)
        })
    )
});