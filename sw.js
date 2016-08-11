

self.addEventListener('install', function(e) {
  e.waitUntil(
 
  caches.open('saberfront-skillbase').then(function(cache) {

 return cache.addAll([
       '/',
       '/index.html']);
})
);
})
