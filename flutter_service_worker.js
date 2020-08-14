'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c9cf299872a8e9c440f1008d92856af5",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/logo.png": "ebbc61e01e152781d5848d01a43533b1",
"assets/images/Oval.png": "05877059145ed6d3daad6f02e70cdfe3",
"assets/images/pay.png": "dadb358232d224ef3bffe5a8c46d9c37",
"assets/LICENSE": "510c515d981adf2ecd0833591a23ac7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "014ad6fcbfd7a9b9fede3c7081561753",
"/": "014ad6fcbfd7a9b9fede3c7081561753",
"main.dart.js": "d87fdb7962eb5c3a7c53277baf439034",
"manifest.json": "f9e1bc8e474b2de2443c50be20f68b24"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
