// service-worker.js

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("hazara").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/main.js",
        // tambahkan file lain yang ingin Anda cache
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
