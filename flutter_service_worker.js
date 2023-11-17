'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4ec64729b2cf89702eceb5abc0f12c03",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2408342244a17fcad926580a64d1bcb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98bf2211de6802be5c22b2d0554357a2",
".git/logs/refs/heads/main": "578d8dc7df893f412035daf831c9e333",
".git/logs/refs/remotes/origin/main": "c991d2d3d763eba1e740971034d6f71c",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/09/b17d2985232b5eaa74faacc435db51c13bd166": "c94e4461672c11cd30cc63334b836c00",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/12/927480f38b51455bea079c7e4ff61dc019b70e": "c33898ea0421b644748f993f22d1cc42",
".git/objects/13/756be294a349f6b838ca7776f9d9db89b26f79": "c9ebf7da222a9f9baac9f88503c41b9a",
".git/objects/13/e7772c3910085e6a75a2180679cd4e4b2a96ca": "2e8d7f2eb6e53a31b9a3f564190f0d2f",
".git/objects/1e/419f58d7cbf6f647c59c626cd68a31062fa134": "d6ff66deeadc31716c3f7f7ccc6a1522",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/2d0b4a55a41d5358b3b186d9af210a5da4768c": "b8351c253d99605ab563b91234872e18",
".git/objects/42/bb95c7b261748d072cf4fa99145c3c821e5a86": "b3f6ed3be6eec5356fab0e030e91cc9a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/55/22788ecaca91f0f230538368416fcdb12d4bde": "79cdc8d8fc84e5c7cc68f91fe646d871",
".git/objects/5d/a8c568dcb74c4979e44db19ae2b17ff47a73c2": "7ed8d67f988af5953f03c0467ff4771b",
".git/objects/67/bb5c15b818d96e4a5ac28cc79d19ab9512c8fb": "1274d276de7af4ce97f0ec64b477040a",
".git/objects/6b/fcad652b8c5b0e8d087444133290efb0a1a688": "e947d6b22a128a643416f36b577088e2",
".git/objects/7f/03049bb5229cd369193de692c4a747260773f5": "f34d4955c346c8613e537528185b6149",
".git/objects/7f/a5ab945e14e48763c5351bcb567b630077d1cc": "814d5ccd374bbf7f2c61456ee63f8787",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/56cc6d61fc50dd1d71256c912f4d1a1ec204b6": "5941a0ebccc101389e4389dc52552b0b",
".git/objects/89/e201da6857b523c87f2b4a1e19b0de5f03f352": "fff57269911aa7165a5a65e9b02d3071",
".git/objects/95/37608ecae5f1f340ad8dca510a9e331185769a": "8d5b0ed3183f8b959b2062253548d2fc",
".git/objects/95/da5e63dcea1d47435ba435f8829c272503cab2": "b72a788592c3be2626228546b6851243",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/98/ca83689c01b5d82c1d48e1397c1a54066fc185": "d1bc30b7ed9a8595c72b070159d14995",
".git/objects/a0/76cc5fa8163d275a529e7884f896096092cc7d": "5ec9efb45a93fcf7ed4d0629ea92a570",
".git/objects/a5/d967ca38da21abf02ed183aff75334e8f194f8": "d7567ad60a059165a805d1644c28ccbc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ac/246fb55cfc91a7652b2f8f542e29adf0513be2": "d7f800f4778f5606018bc798280a2313",
".git/objects/b0/5bfa9f89279363aa858dca0802b5f036914bb7": "80b5330b30beebec76511a065139ed41",
".git/objects/b4/0f6a01a91a27b244999fae3be1c2daf49c01a9": "90e5765ca28be3ad37f60d8c626aff5e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/ae32a46d726ff935846422437e6f227f7bd357": "ba84e539de477bc551e8ae083e65e037",
".git/objects/cb/0e1e76b39f956648afd60ed2ebe83213534f8e": "b1d614f7abb404eb816f925fa82c1643",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/e0/20153359d8c15da178ebbb0dce3e32b021734e": "574a65fb426fd8ffefab371f83015c55",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/5de300a7238001ac21238a453990a4481084c9": "2fc8f70153c4c3ec2b2a9699ee18d74e",
".git/refs/heads/main": "c394558d0693149f7dfb6124a734fbf4",
".git/refs/remotes/origin/main": "c394558d0693149f7dfb6124a734fbf4",
"assets/AssetManifest.bin": "f8ba7ebf28d89406fff95a083462f45e",
"assets/AssetManifest.json": "60eaa7d100b0adb1c8919328e7238d88",
"assets/assets/bg/1.png": "547c6e9831fef7a273b7ae3a1978d1d8",
"assets/assets/bg/2.png": "42fbaccda5453e075d2ef758da8baf1a",
"assets/assets/bg/3.png": "76519a3439f90f667fe9b520be6c25b5",
"assets/assets/bg/4.png": "5ccd0153d0b87b7b03a283cf80d56b7f",
"assets/assets/bg/5.png": "78513d418614b757e7d49f61cc003ec5",
"assets/assets/bg/6.png": "756d5b662d936e0bc329d0335776ced9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "2a836272d3c58e599a45b2067792bf08",
"assets/NOTICES": "58611c23a58e9aa4bb00abf78d350c97",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "ca4c99c886e4d704c03615b2ac7392bb",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "2d3227c78d1e06eca6184b4726ffc471",
"icons/Icon-512.png": "ae9a761b5db06e6e4d10664dcdd4825d",
"icons/Icon-maskable-192.png": "2d3227c78d1e06eca6184b4726ffc471",
"icons/Icon-maskable-512.png": "ae9a761b5db06e6e4d10664dcdd4825d",
"index.html": "dfdda98131200c8534d788e1b068f4ac",
"/": "dfdda98131200c8534d788e1b068f4ac",
"main.dart.js": "d800b443271b666e95a7e9f2ff4734af",
"manifest.json": "7c96fea2caf614e1ede6925b84e0f4b9",
"README.md": "82cbdd1d320fe94c1f8e27f745765031",
"version.json": "65edc2c861bc5a13071b3819df862a5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
