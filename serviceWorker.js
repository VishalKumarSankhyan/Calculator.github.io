var cacheName = 'Calculator';
var cachefiles = [
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/',/*url*/
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/index.html',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator.css',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator.js',
    
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/serviceWorker.js',

    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator ico.ico',

    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 64x64.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 72x72.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 96x96.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 128x128.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 144x144.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 152x152.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 192x192.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 256x256.png',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator 512x512.png'
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
