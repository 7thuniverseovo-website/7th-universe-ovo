/* 7TH UNIVERSE 1V1 service worker.
   - importScripts line = OneSignal phone alerts (do not remove).
   - the tiny fetch handler is what lets Chrome offer one-tap "Install app". It never caches anything. */
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
self.addEventListener('fetch', function () {});
