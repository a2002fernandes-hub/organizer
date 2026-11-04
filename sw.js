// Minimal service worker: it only makes the page installable as an app.
// It does not store any data. All data stays in the Google Apps Script app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
