var cacheName = 'Calculator';
var cachefiles = [
    '/',/*url*/
    'https://github.com/VishalKumarSankhyan/Calculator.github.io/blob/main/index.html',
    'https://github.com/VishalKumarSankhyan/Calculator.github.io/blob/main/calculator.css',
    'https://github.com/VishalKumarSankhyan/Calculator.github.io/blob/main/calculator.js',
    'https://github.com/VishalKumarSankhyan/Calculator.github.io/blob/main/calculator_icon.ico',
    'https://github.com/VishalKumarSankhyan/Calculator.github.io/blob/main/calculator.png',
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
