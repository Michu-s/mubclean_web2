'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2bc9ea41c320d25157a31061522c6325",
".git/config": "2f239c54ccc9d5be020656aa4eaf55ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5782700f7237b6b32a0e6421ee93cc1d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c630096df35da6b665966d054ad79c4b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9976507923769f7247e6c3eebaa725c",
".git/logs/refs/heads/main": "b9976507923769f7247e6c3eebaa725c",
".git/logs/refs/remotes/main/HEAD": "2e5be665c68e3578de2a98745ee812e9",
".git/logs/refs/remotes/main/main": "fb09e0423dc126fe270abb29a913974d",
".git/logs/refs/remotes/origin/HEAD": "c97078073dc0294038754998bff520e0",
".git/logs/refs/remotes/origin/main": "14ed60f542f27ab22b05258d3f3cf2f5",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/bf1f2778eca35361c9fdfacb9ea9d162617a01": "0741fb60321cbbe1bca899c092b73522",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/1b/b508130d6bc910fb22bd1e16dd048d94631c6c": "08373370f2d343cc78254b240f5cd92f",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/10a39834c8700e6252b85f04d4ad4f562fee67": "a5bb41e24759dc875012214b2455eae6",
".git/objects/28/adcee6658bc9bf67883d0c40fcd745fc7de7be": "047fe9bbddd63fbcf85d5d6d74603846",
".git/objects/2d/c4019377917987691e09d8436da4702dfd0197": "5568c90e929250c72217aeeb9990899e",
".git/objects/2e/e5f0621a09964826ad81e1b39848aa86b9ae60": "68db952a97fd7b359ebba131c31f3ea5",
".git/objects/2f/033604b017dd0e9bbd41ddc6f36f749d1beb10": "25ed8c628ec4e8e5f57eaadeca6d4b2a",
".git/objects/2f/2afee296e9a30b2f6870df5ec49217740dee04": "dc92f273b93ce0710e649e266a6d3989",
".git/objects/31/b7d7ee3c34ae06cdb733b37bd9bd2660cf047d": "a5a2e06e8201cbc251d0fde313a5af4d",
".git/objects/34/cb12dd966df9dfaf0d4dbfb1f237c33f1c1ed7": "79c295327cbf76ac6b9f6dc3400b2e1a",
".git/objects/35/b3d4fd4a7899b2778a8baf4edbed00e8fb2bf3": "b70ce65659ff9db49939545c9937c0df",
".git/objects/38/b063f298e327e6ca044824f3cded972a460e42": "dce462db8670c87dc341f799adeda3bc",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/383157900b15c864e53af8aa314ddf035d71f6": "9b7db2b2460c6cb674725353de84b77b",
".git/objects/3d/6eebf88e9206480f2118ff42a99b35074f6377": "0feb63b0b9173d3f2fb181c655b0050d",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/a120eb6d9e107cd4aceec94434742804285b5a": "218110335e77966feb21676b5e6f355e",
".git/objects/45/b15a1302bc974a00b96ad72176b8b7e94a4dd1": "470533349f73bd79675271e281fbc64b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/75d3c9e23331dee1b39fcd9e2f5bd1c2e2fdd0": "d1b4a43aafdc481f3d3a0a3229e9a47c",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5a/f3b2a972846c8832cd3ee2da5cba9d904f95ad": "270e423ddf91307c51b0e05cb8b66b8f",
".git/objects/5c/731bb1b38cca7e4370ae7e913d57b49f568d99": "ba9602c2f59891643446f23261c27ad1",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/64/84694b3a4b55311bd65163b78256c64ba2d422": "64913a17bf1c909c696492b030f018a0",
".git/objects/65/6a100fcd114bbda5062fea630026a7d60cabfe": "88d6b7262a5dc52605f693665e98ae5c",
".git/objects/66/b701bb091d23e848c011aaab51be56003879e8": "0ca563d2bc5a8c59a174057ca78afc0b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/9e263c02fe73cf58241a1a6a19982d2dec7868": "8fa23baf5ffe016fdaac3e8588578532",
".git/objects/71/f94f814511a13043d0a73b69a78cd33bb49bbf": "fc3c5928ed2db26f84f2e2ca425fee6c",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/77/39ae337d1f024a9bd693d76dff34e97209e8ab": "2ab2301e586463aaf5d44bc5002d0a54",
".git/objects/77/688df2337c42038a89792a46962e4f256f492b": "4ad8dd2be55af704fcbcf5b661149e9b",
".git/objects/78/4bba5e11d6770fe17c5983b57c7196d5fcd376": "2108700ab8e47bcb7323e5d8eadc6755",
".git/objects/7b/4d240a945b0310534c9390e1084f17e0c3f3a5": "56f19ee818c3bf2c8ff6dc04b7060cf2",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/d966314dc8c774279cdbe1fa909b34a7645ed7": "53847ab837b8bfff0c47ba1a343ff3f6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/b18d4077be51ec66d13542601a45ae6d6eedbd": "38c2a79362421d0509d2e25939c9f17e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/f430f727be3aa907d95719e985b506acc23599": "fd12d526933be2d94cc36585435c3fbd",
".git/objects/9e/4cf47cb74b6577bff5e2ebd98a1661a9961402": "43ecff73c9857f7354be7948aa31cc91",
".git/objects/a0/e38b382c509706739172c0fa0074395a09c657": "88ed25894dd839b55caab35f1ff71eeb",
".git/objects/a3/08a687a5249bc862d831d1d5d2268766752ce0": "e850ba063c04797dffbcfe5ab5e8e516",
".git/objects/a6/95d40a242656bdd8515a2387b4bc2f54d97e1d": "6294d7e34feb5f08b8f8968cab7d7d6b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/b43d67a0db29cf4eb631d08748bd25f60aa685": "27ebd04ce23364e1e7d57bf41b5ffbc0",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/436a7ac3b22d2cbb19057162e07e5d3bfee087": "c660fdca2cc3cc5f035233932151415a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c0/708ee6ba8211082a34e26d3070398e9e4e4998": "e0b52e834b415a09eae7e6288c972719",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d1/c30da5a3d28af4e71d2686fe0c8eb00ab09b79": "8c6156e7ea90ebf7fe814083d3fd7e7d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d31636897d2ed3c9251b867ba643c42f53b841": "e0f7e423532abb3c8db6e82a543d92c2",
".git/objects/d7/e80b68ed35aeed6e76989986c8d936bbb3082a": "a222f8b62ee728cab00c8cf122949cbd",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/669d3981ccfc4f61829f1bde67d57ed4a99194": "f9539d30017869cca65a7eea7cf15de4",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e5/747e20d817b4a0d281a548ddfbfd8ba90504ec": "8a08b04ef87d308dda84f66425985906",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/ed331052692105980636e8684aaf700f8465df": "7eedd34d30ebe9a027dcc7d77c38d6d2",
".git/objects/ff/f028996f7d86bfbce2e99c00593b6215cf61d8": "5c7c9c640895cb6e9b05f56d47442f67",
".git/ORIG_HEAD": "276ab189b4498b2ba65dcc6daa7cc1ff",
".git/refs/heads/main": "276ab189b4498b2ba65dcc6daa7cc1ff",
".git/refs/remotes/main/HEAD": "61b6fdadb4094283cc79aa6a8eea908d",
".git/refs/remotes/main/main": "276ab189b4498b2ba65dcc6daa7cc1ff",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "276ab189b4498b2ba65dcc6daa7cc1ff",
"assets/AssetManifest.bin": "c80f7150eaad6b78442e4a29a64feffa",
"assets/AssetManifest.bin.json": "bfd45f34f0e7d7427a4168b2ca99147a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a3d402db76d3a313cf7fdf12abffd7b2",
"assets/NOTICES": "3f19c9221dff114b98d5d8ad501325ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "cab80c1683102400dde6a81e00263b96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f911d875b8271dc46c2d6dd8e4eb132",
"/": "7f911d875b8271dc46c2d6dd8e4eb132",
"main.dart.js": "058894773449f3b13c55ba9aa86b87ec",
"manifest.json": "16ea394fa502ac51c622391aa25f6e00",
"version.json": "fa0a5f607c65eae5b60c3ea344a8bccf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
