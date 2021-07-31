var cacheName = 'Calculator';
var cachefiles = [
    '/',/*url*/
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/index.html',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator.css',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator.js',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator_icon.ico',
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/calculator.png',
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
