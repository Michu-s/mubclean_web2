'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9dbf6cb99376640fd54cb241eb06c26",
".git/config": "2cec4bbb19433dd923a21afa46c76f10",
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
".git/index": "19384bee436d642896f11a05f7e04409",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd867d42574d9891bae7b3ebea80cd72",
".git/logs/refs/heads/main": "cd867d42574d9891bae7b3ebea80cd72",
".git/logs/refs/remotes/main/HEAD": "2e5be665c68e3578de2a98745ee812e9",
".git/logs/refs/remotes/main/main": "fb09e0423dc126fe270abb29a913974d",
".git/logs/refs/remotes/origin/HEAD": "c97078073dc0294038754998bff520e0",
".git/logs/refs/remotes/origin/main": "81dd3b8cfc8139342671dd31dd67c7b3",
".git/objects/05/af24ce751a5531c413b10f903b1440edb7f94b": "f214d2c2f4d7c75ddbea32b3d4a3a10d",
".git/objects/07/759276af611497dd3dc97bbba8b115458a1ee9": "bfa85b2d9be95db659e8cb41848674a7",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/bf1f2778eca35361c9fdfacb9ea9d162617a01": "0741fb60321cbbe1bca899c092b73522",
".git/objects/0c/65e9fe2007a03bcf5326ebb06cd7b872321c60": "aca7f2f38a3db4f97cce113f66fbd6c7",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/18/9c3f4d0270c810621d8f8d525a9bc5055df80a": "a8c2e9ce34d05872e5cf780932697b40",
".git/objects/1b/b508130d6bc910fb22bd1e16dd048d94631c6c": "08373370f2d343cc78254b240f5cd92f",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/10a39834c8700e6252b85f04d4ad4f562fee67": "a5bb41e24759dc875012214b2455eae6",
".git/objects/28/adcee6658bc9bf67883d0c40fcd745fc7de7be": "047fe9bbddd63fbcf85d5d6d74603846",
".git/objects/2d/c4019377917987691e09d8436da4702dfd0197": "5568c90e929250c72217aeeb9990899e",
".git/objects/2e/e5f0621a09964826ad81e1b39848aa86b9ae60": "68db952a97fd7b359ebba131c31f3ea5",
".git/objects/2f/033604b017dd0e9bbd41ddc6f36f749d1beb10": "25ed8c628ec4e8e5f57eaadeca6d4b2a",
".git/objects/2f/2afee296e9a30b2f6870df5ec49217740dee04": "dc92f273b93ce0710e649e266a6d3989",
".git/objects/31/95e9cc6504f1e4d6a923e03a0819e59369c36c": "01c303381bc91862cee206f7725662d0",
".git/objects/31/b7d7ee3c34ae06cdb733b37bd9bd2660cf047d": "a5a2e06e8201cbc251d0fde313a5af4d",
".git/objects/34/cb12dd966df9dfaf0d4dbfb1f237c33f1c1ed7": "79c295327cbf76ac6b9f6dc3400b2e1a",
".git/objects/35/b3d4fd4a7899b2778a8baf4edbed00e8fb2bf3": "b70ce65659ff9db49939545c9937c0df",
".git/objects/38/b063f298e327e6ca044824f3cded972a460e42": "dce462db8670c87dc341f799adeda3bc",
".git/objects/39/b44caa83cd1186a7c628afe9a07e8fa57c0a60": "b734e715ff4b65cb748b32b66ff31fac",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/62deabd5ec1a13beeb21b39b7939bd3bac4202": "a640f64532c601f790c097f693a124e8",
".git/objects/3d/383157900b15c864e53af8aa314ddf035d71f6": "9b7db2b2460c6cb674725353de84b77b",
".git/objects/3d/6eebf88e9206480f2118ff42a99b35074f6377": "0feb63b0b9173d3f2fb181c655b0050d",
".git/objects/41/abb501706eafb393b799968675573b2187d2b3": "ccdaeab315116b362c27fea20c560a3d",
".git/objects/42/a767ea93b2f4408b9b00a950824cc102ababb9": "97c3826ce209b904a937364b733d467f",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/a120eb6d9e107cd4aceec94434742804285b5a": "218110335e77966feb21676b5e6f355e",
".git/objects/45/b15a1302bc974a00b96ad72176b8b7e94a4dd1": "470533349f73bd79675271e281fbc64b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/75d3c9e23331dee1b39fcd9e2f5bd1c2e2fdd0": "d1b4a43aafdc481f3d3a0a3229e9a47c",
".git/objects/50/08276b4e4448fef96e806084158e3257e68c13": "0a9cdeeea9823fe11261d0ea79d4d1d1",
".git/objects/50/8cbf2e56d7bc2ffd91bbfb1762d2ae23bb9512": "03f9693bdad15193955b1d936fbe4045",
".git/objects/50/a1ed33fd819871331daf854724b3c0929e5c54": "95a49039badcf62397ea3780edf4f6b5",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/99945bcc2be8ff618a4d0f248e53b895e37051": "7b7efb435cb589171b257d19b8a43778",
".git/objects/5a/f3b2a972846c8832cd3ee2da5cba9d904f95ad": "270e423ddf91307c51b0e05cb8b66b8f",
".git/objects/5c/731bb1b38cca7e4370ae7e913d57b49f568d99": "ba9602c2f59891643446f23261c27ad1",
".git/objects/5c/80c2c613b606d43464684833d376c7062ae447": "ca5c7a0e80942bed268a218028e74ad0",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/8a4fb8afc8be3d6d33abcfbe671824e0e1fd3f": "fe3cd85e7aeaf15349ad007c354079f5",
".git/objects/5f/f7f4e7550cbb39279b9fd08025628e6b8cb766": "ea5f855c698c1f67392a92c6a00debaa",
".git/objects/61/28e87a6b27b557a37912e88cc6f8ea11edb390": "01e91a5d5d1a26ee7cf55af30e694023",
".git/objects/63/de7817cde0772085135d2fbfe8b22aa8cb706e": "7d4c68e439e40cb8a3cf93d697820c04",
".git/objects/64/84694b3a4b55311bd65163b78256c64ba2d422": "64913a17bf1c909c696492b030f018a0",
".git/objects/65/6a100fcd114bbda5062fea630026a7d60cabfe": "88d6b7262a5dc52605f693665e98ae5c",
".git/objects/65/b098ac2ca8d29a0c487ac3ee1a87dd968b0a8e": "5a9d159f8545eb30d7b3c381692672b5",
".git/objects/66/b701bb091d23e848c011aaab51be56003879e8": "0ca563d2bc5a8c59a174057ca78afc0b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/29abaf161edacdf564bf500ec358ae5af625bf": "3acfbc34e041ae6f5ca16ab5981ffb59",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/9e263c02fe73cf58241a1a6a19982d2dec7868": "8fa23baf5ffe016fdaac3e8588578532",
".git/objects/71/f94f814511a13043d0a73b69a78cd33bb49bbf": "fc3c5928ed2db26f84f2e2ca425fee6c",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/75/d3f79f6d60b0e387ebc2b3e0fc3ada45d08113": "6b56ce3b3cc36d094e5775db2b629ec0",
".git/objects/76/1df40ef6046acfbee6d106967c351ebf12d3f4": "a0b68017b7d72c32f164a14556ec9250",
".git/objects/77/39ae337d1f024a9bd693d76dff34e97209e8ab": "2ab2301e586463aaf5d44bc5002d0a54",
".git/objects/77/688df2337c42038a89792a46962e4f256f492b": "4ad8dd2be55af704fcbcf5b661149e9b",
".git/objects/78/4bba5e11d6770fe17c5983b57c7196d5fcd376": "2108700ab8e47bcb7323e5d8eadc6755",
".git/objects/7b/3e4ff77de80583b46e4e399d33871d8d2fdc07": "66b72506b00381b7690e71bab0ab7aba",
".git/objects/7b/4d240a945b0310534c9390e1084f17e0c3f3a5": "56f19ee818c3bf2c8ff6dc04b7060cf2",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/978f82615189563eeca51e8b5c3ed55b026410": "7bec28e865180d1c91437aa0fa24ae30",
".git/objects/82/d966314dc8c774279cdbe1fa909b34a7645ed7": "53847ab837b8bfff0c47ba1a343ff3f6",
".git/objects/83/1d718046b12d6ee0c98da0ddd961c196ba6232": "e5f45339ab38a4eb8a724eac84235a10",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/b18d4077be51ec66d13542601a45ae6d6eedbd": "38c2a79362421d0509d2e25939c9f17e",
".git/objects/87/60fa86cb714cf1fdbccb3133a03b3474349d14": "6469d093d275ed411ef3b94db34a51a5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2d76cdd2bef92b7d7745a62453f2f9b33a095d": "f69a49e619061da15aaa890f34ad6d88",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/afca9e3c34799e08fc7e1ca97e5c2550b7c4bb": "0a7c0f50a24c374148f949f54915175d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/2d184b572083e38f199cdabe34e9ecac7b1b1e": "86484052b6ece9f2d7de38e1a7042e72",
".git/objects/97/8e5218831068dba4cb3e1db9241bea4f480146": "9c78893c8d600330d10c00a02042d624",
".git/objects/98/f430f727be3aa907d95719e985b506acc23599": "fd12d526933be2d94cc36585435c3fbd",
".git/objects/99/436aeeed34787174804f351fd5f3d50db8c24f": "c6974b05b2611b4114c29bdbe4be4466",
".git/objects/9b/f16ae047ef1e443d6b13b4ecfd69b423029da7": "0ead6d7de8230aa11cd4637912fd6e2b",
".git/objects/9e/4cf47cb74b6577bff5e2ebd98a1661a9961402": "43ecff73c9857f7354be7948aa31cc91",
".git/objects/9f/850096a2fcdbab8f30fcf21df8d307c84e9a9c": "13589890da011a980ac3e2dca9b9b479",
".git/objects/a0/c60e0b5476dea2d621d6fb8885206738d3425c": "a7869c5fea4bf1d4eb6f352108936b55",
".git/objects/a0/e38b382c509706739172c0fa0074395a09c657": "88ed25894dd839b55caab35f1ff71eeb",
".git/objects/a1/7c0724b5d33215b83b161a1348a8855cfcb79c": "f2b0b86393f9dbf7802018b37f67be6b",
".git/objects/a3/08a687a5249bc862d831d1d5d2268766752ce0": "e850ba063c04797dffbcfe5ab5e8e516",
".git/objects/a6/95d40a242656bdd8515a2387b4bc2f54d97e1d": "6294d7e34feb5f08b8f8968cab7d7d6b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/b43d67a0db29cf4eb631d08748bd25f60aa685": "27ebd04ce23364e1e7d57bf41b5ffbc0",
".git/objects/a8/cd6c8fbfdeb01e68b8f56da177a347c8399ff7": "9e86c8512e760b1773f55132aafcc685",
".git/objects/a8/ce8639cac3417a315a283621cb89e06eaf7ee4": "da915c219902964ebc9330392b47a594",
".git/objects/aa/8a0477427a252315bbbaa48b27ec315a17ef55": "cce97b8cc0e31e5982163e56f1f4eceb",
".git/objects/ac/0c2aa8e8b46a6314d77983087bedb7b9b66729": "bcabef5b18480fb2d964363a7aab27ef",
".git/objects/ac/912e9695ecfef62c28328e337c3ecaa5fd9202": "d154bc776bf184cf46386dc6913e38bb",
".git/objects/ac/fab058c5be959723473d2793f0f78f1c549c99": "ac74531a3156e446d8617082553b31a8",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/f8d91fa662b2812d5b3714b1f2c025c076db83": "9e104e86770a4011e534ce1d524f33fa",
".git/objects/b2/4fc470fa37a1e36be15e0a4c305f4381cdee43": "7f7d9a76c81eda71e67e38bd57f02a60",
".git/objects/b5/3214680d787c67bf067b427393b9506ab86378": "35ee2bff2493bdfecc791751012018a5",
".git/objects/b5/3b1ea35a158a8f3ac5ac52e367bcf6a07b11c5": "74b656e6b4a489d40818f4f7495c810f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/436a7ac3b22d2cbb19057162e07e5d3bfee087": "c660fdca2cc3cc5f035233932151415a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/be/8392c3fdb73afdd1c9540b8072d16bd3c890d5": "3ef237881fc5d8ec730bb3a94d5201ca",
".git/objects/c0/708ee6ba8211082a34e26d3070398e9e4e4998": "e0b52e834b415a09eae7e6288c972719",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/2ff6d263ad80c363a05df70f0b557948c43fa0": "761fc6466bccb06ab5279b64788824f4",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/da2890eace88119e68c204ba0d71c2df249676": "1dc365acab79e32fd3dd340f7b3ba948",
".git/objects/c9/f057348a655756f5f2f31968b4cb06aea30ed3": "17dc8b79912fde6f34366ed1a672b4bc",
".git/objects/cd/4db1f7aa75b1729b5c5975761bcffa24c78e56": "c70ffd72e2be6d93487539e79ca545bc",
".git/objects/ce/9272e29f2cd5cb2bb6c3739e42f265a3d10e16": "60d31c6df345496c3d86f7de9141870f",
".git/objects/d0/b5a1ce91e27d9f4d3529b9df8752865e89c747": "1684b317aa1f8e0edbf8bf96cdd9f3ad",
".git/objects/d1/c30da5a3d28af4e71d2686fe0c8eb00ab09b79": "8c6156e7ea90ebf7fe814083d3fd7e7d",
".git/objects/d2/5e94f47b62f080b2175dcc64f9446c34d6a989": "1c29f9525f5d462e68edf762e6524f94",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c18d248db48a3e8c0d7d8f0f92848e034aabb6": "1e76845171ffe1dae5557a729b904be5",
".git/objects/d5/6766224d6336d3fc04774eafac362f5f13f4c5": "37bf2698e964cd2064698266ef239dcc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d31636897d2ed3c9251b867ba643c42f53b841": "e0f7e423532abb3c8db6e82a543d92c2",
".git/objects/d7/e80b68ed35aeed6e76989986c8d936bbb3082a": "a222f8b62ee728cab00c8cf122949cbd",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/669d3981ccfc4f61829f1bde67d57ed4a99194": "f9539d30017869cca65a7eea7cf15de4",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e5/747e20d817b4a0d281a548ddfbfd8ba90504ec": "8a08b04ef87d308dda84f66425985906",
".git/objects/e7/4307158eb2fb0ca8a34d616e8fe54622ba313d": "08c91e149ad20eec6ce4c02344d4ef3e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/82932c0d28d7fdc49c8c3521ff96ec1d496d69": "854198a28c2bd85380a383fc7310eaf1",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/21401263b6176d5807478dac143e912efb9995": "d302b0ca566f7383c8c4a4696cb0cce8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/ba00fbbda32bfde8edf1408562c28ddc5d51dd": "1b08faba8c5f00204cff63a18d75c4b0",
".git/objects/fc/229fc1083bcde41a3e83b7a55d35571d8f980f": "c318f4f2cb04bb7d2125a12fb499cdd4",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/ba86817a0a9858976b5699ab3e5f4ce1105d21": "e37669c21c1c836bd05e8f1a3ae2181c",
".git/objects/ff/ed331052692105980636e8684aaf700f8465df": "7eedd34d30ebe9a027dcc7d77c38d6d2",
".git/objects/ff/f028996f7d86bfbce2e99c00593b6215cf61d8": "5c7c9c640895cb6e9b05f56d47442f67",
".git/ORIG_HEAD": "276ab189b4498b2ba65dcc6daa7cc1ff",
".git/refs/heads/main": "813e7c120354e04e2a42116a1b45e360",
".git/refs/remotes/main/HEAD": "61b6fdadb4094283cc79aa6a8eea908d",
".git/refs/remotes/main/main": "276ab189b4498b2ba65dcc6daa7cc1ff",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "813e7c120354e04e2a42116a1b45e360",
"assets/AssetManifest.bin": "546feb65d88f9d3c951f717153f8efcf",
"assets/AssetManifest.bin.json": "a5c669ef5213e778613c98bff42d2433",
"assets/assets/img/admin.png": "d7acfe3d862df216c7516419a60e2515",
"assets/assets/img/banner.jpg": "a27a02409c80bf266f1a398114a1c2e0",
"assets/assets/img/cliente.jpeg": "4a9c8a2ab723ebe38aa22beb1bff8a9b",
"assets/assets/img/proveedores.png": "3a729dccfe3cf731887249d5525b65f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "917b5f932aa7ab034dc4ff2d30efed93",
"assets/NOTICES": "57243d56f88ebad1a9da2f06dd1bd7cd",
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
"flutter_bootstrap.js": "8a3c7245785b8b77c6b7e0a1f9d9b2dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f911d875b8271dc46c2d6dd8e4eb132",
"/": "7f911d875b8271dc46c2d6dd8e4eb132",
"main.dart.js": "35217c13b0026ffe30bc02c7fa2b756a",
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
