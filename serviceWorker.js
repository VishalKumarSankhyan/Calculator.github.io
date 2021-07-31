var cacheName = 'Calculator';
var cachefiles = [
    'https://vishalkumarsankhyan.github.io/Calculator.github.io/',/*url*/
    'index.html',
    'calculator.css',
    'calculator.js',
    'app.js',
    'calculator_icon.ico',
    'calculator.png',
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
