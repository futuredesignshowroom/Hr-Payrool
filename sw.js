// Service Worker for PWA
const CACHE_NAME = 'hr-payroll-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/employees.html',
  '/attendance.html',
  '/payroll.html',
  '/leave.html',
  '/style.css',
  '/js/config.js',
  '/js/auth.js',
  '/js/firebase.js',
  '/js/utils.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});