import { precacheAndRoute } from "workbox-precaching";
// import {registerRoute} from 'workbox-routing';
// import { CacheFirst } from "workbox-strategies";

// Add custom service worker logic, such as a push notification serivce, or json request cache.


// self.addEventListener('message', event => {
//   console.log('service-worker received: ', event.data)
// });



self.addEventListener("message", async (event: any) => {


  if (event.data && event.data.type === "SKIP_WAITING") {
     self.skipWaiting();
  }
  if (event.data && event.data.type === "MESSAGE_IDENTIFIER") {
    console.log('SW received msg::MESSAGE_IDENTIFIER: ', event.data)
 }
 console.log(event);

});

self.addEventListener('fetch', (evt) => console.log("fetch", evt));

const CACHE_NAME = "::test-worker";
const version = "v0.0.1";

self.addEventListener("install", function (event: any) {
  console.log("installing")
  event.waitUntil(
    caches.open(version + CACHE_NAME).then(function (cache) {
      console.log("cache", cache)
      return cache.addAll(["/", "/offline"]);
    })
  );
});



// registerRoute(
//   ({ url }) => url.href.includes("@pwabuilder"),
//   new CacheFirst()
// );

try {
  //@ts-ignore
  precacheAndRoute(self.__WB_MANIFEST);
}
catch (err) {
  console.info("if you are in development mode this error is expected: ", err);
}


