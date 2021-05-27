'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a46303396c65eadecba1d29ff2178f74",
"index.html": "bb6d06bbeb5fff334972fddd50d49f3c",
"/": "bb6d06bbeb5fff334972fddd50d49f3c",
"CNAME": "5cf09cda41008902bc6af5c8ada52f10",
"main.dart.js": "7fc09b24479c9ce6fc4703af9194a6d2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2fd6e7714d6080616b772aeb26ceb813",
".git/ORIG_HEAD": "1efaa39a4fac16cd756f07fc5c5f01e2",
".git/config": "f72c676c17e8b88cd75771579f82a229",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/d4f8bcfdcd89f61a6e02579f47fa460eab6e8c": "20121ec3866dcaa19d3043cbf7a5a193",
".git/objects/67/ee63063689c2a7f516793879bd2619cbfc5dfc": "b36c3f8573765e6f676ae73ffaf90a65",
".git/objects/67/2a3bdafc69357d0a8419538ab8bfadd0543beb": "a9c26c6fd4bc9d77eefbbbc7e7488158",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/34/2659b7b6292bf1f5e7f41f92c53403c2f37cf7": "fde6c9b1aca0bb60e5e7c49fa1f9eb12",
".git/objects/ad/161c4dead9dd15e5a0a2a9d716bde479bc96d1": "075aa73062914b196ab124fdef1bc0a7",
".git/objects/bb/367edb5264696cae1360629a28c0b1db608992": "460130bcca8a0d2b4c85d12a72d1d2d1",
".git/objects/b4/544544a618a4724460686df864c1bc62c92b1a": "63a2b31f7924600bc932d2740716a7e4",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/d6/5d136a5a9f40b1840845d7a414e5be2d2eb934": "004001fae9e99f0035ead15e5c70be26",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/49ca5f371469d552bdb03f9daf9fc93dbdb53a": "15ff27b802c5c21b27cc603c9a4db643",
".git/objects/fd/acc8392e17ae0bb9846cecb2cfb0056ce90fd5": "18e04ff4b0227aba2de5f7ddb3541aef",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/44b766781ceb374b0f2ed8cc9b43b54a8b9037": "210464dc518aa2cd4ced9cf1216dd3fd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/015f92113de0657510db1a87a375adf0d160e1": "a38c688a6658260877f22c6e82bec98d",
".git/objects/6b/d319dc5acaade5f413bc3276608c4401506074": "fe1cc20a21c01fb96bd9b1f81261e264",
".git/objects/09/4b554dc03c0f76378fc00a137506491b2ec257": "c568ccc9d32178bb0699be6ffae1d5dc",
".git/objects/91/2854d3bc8e0ee395822dabf5707013c6c4b01e": "b5157077a88f2582ea152dc181aa4700",
".git/objects/54/c55d17d6e79dad169210e1f81ecd63900987df": "168f6408cc02556f228578193884f21e",
".git/objects/98/b471d9fe7e5e38eef30ce5aede26ead6a0550a": "51bf9d8c51460d2b1eb9728d95706781",
".git/objects/37/8a253243eed02405013fc9801174569f12ff94": "41b0c003e4b4eaec57a7a29efbbb9e55",
".git/objects/63/b1ffd62a32433675453ea959f23d05c20f6252": "f38e440d17c913f72c8e5408ca881334",
".git/objects/0f/66f0c8a4ffe26222d4c8defd7222680d2878e7": "5e37fe7ad79b41231d22bce84465dfd5",
".git/objects/90/8583651155267ec43bef2b7aafa9cbe347a786": "839b6fdf98bcaa4340de28e13fe3f28f",
".git/objects/d4/8bbc0cc947e6b02ad3d0f27d7123b5e8dd0217": "b8e966f4727e03d3b37232400672ef64",
".git/objects/b8/cb94d9af80f05ef59354cf909da577b582b34f": "911c6f1ac23bff7f52836e4b9d94d687",
".git/objects/b6/19fcb5f8edeca8159caa181ba32e44a9cc076d": "12f15efc4a9dabf840da75acd8d647c6",
".git/objects/a9/b178a27fc011867209c1d15093726c23ef16f3": "c5758cd059dd63fb6b891e4a872f89ac",
".git/objects/aa/4bfe497e22b964927a0a6039843236902a3d16": "c3496a6163aca0327e59d6ef369e4ae1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/08b1d68e10f56533b8a994f67845b65108299e": "aa6ab5737e89797aa392079825273973",
".git/objects/de/1935fea8e6933ab2f633885660f62f3bdd6a0a": "1e5e2674dbddfada4f729c5f74d4c111",
".git/objects/b9/7da3eb676360525ec6240460710a9f3bece377": "fbd5f0162469032feae0bcfca0058506",
".git/objects/a1/56d380477054e44806ada122445b29e4ed53ae": "9a25a539ae870dd4927f6c983add1a2c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f9/eb5e20904218e0bb1c4ff99f5ebe415b6b1573": "b530294fa27f0ae337d116063ed80299",
".git/objects/e9/054918cb2f1257da7249b93065a5126b7d53f7": "a95811e072908eb874148711d770537b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/a1309942fcd90bf41c48f8972f8bbb96fa2c08": "bc4d8531fd202727b0fc101d1f9f71c3",
".git/objects/2e/61f65a6062553293425a810844fda0ec6628d8": "331d108ad54dd30bea460af8d9c51bc7",
".git/objects/7a/a38bc54354c93227ab3f09c7c8a83fa6d27d5d": "8df71a615f3cef84d94e2fb4992a9925",
".git/objects/14/109236a82ced91ba47fca6c96f32dc1e0435ee": "65ecd7d25af6fb1742fe05681ef8d200",
".git/objects/22/fa653516c3370f709a330af64c3acfaa118ccb": "3a53740097f94890aa9083c73670e64d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a674ed956729d13c7253ba17306591fb",
".git/logs/refs/heads/master": "a674ed956729d13c7253ba17306591fb",
".git/logs/refs/remotes/upstream/master": "182deff8a1a35f0c067b717401f0c7c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "661a244ab1f387cfbd9865b39d133df4",
".git/refs/remotes/upstream/master": "661a244ab1f387cfbd9865b39d133df4",
".git/index": "8a6e4b7f4c8f5f6a50cd07cded2e382e",
".git/COMMIT_EDITMSG": "e966e8c01af3495bc7bd194761acbac1",
".git/FETCH_HEAD": "2836d73297d747e79804c9f24acea215",
"assets/AssetManifest.json": "9cf2ceaa418a44309df251d256b213de",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/wine.jpeg": "da83d7c28e440c9e5215afe57bfac2f2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
