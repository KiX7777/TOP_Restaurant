// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _homeJs = require("./home.js");
var _tabsJs = require("./tabs.js");
var _footerJs = require("./footer.js");
var _menuJs = require("./menu.js");
var _aboutUsJs = require("./aboutUs.js");
var _contactJs = require("./contact.js");
"use strict";
const content = document.querySelector("#content");
function reset() {
    content.innerHTML = "";
}
const aboutTab = document.querySelector(".about");
function home() {
    reset();
    (0, _tabsJs.createTabs)();
    (0, _homeJs.renderHome)();
    (0, _footerJs.createFooter)();
}
function menu() {
    reset();
    (0, _tabsJs.createTabs)();
    (0, _menuJs.showMenu)();
    (0, _footerJs.createFooter)();
}
function about() {
    reset();
    (0, _tabsJs.createTabs)();
    (0, _aboutUsJs.aboutUs)();
    (0, _footerJs.createFooter)();
}
function contact() {
    reset();
    (0, _tabsJs.createTabs)();
    (0, _contactJs.showContact)();
    (0, _footerJs.createFooter)();
}
home();
document.addEventListener("click", (e)=>{
    const tab = e.target.classList.value;
    switch(tab){
        case "tab home":
            home();
            break;
        case "tab about":
            about();
            break;
        case "tab menu":
            menu();
            break;
        case "tab contact":
            contact();
            break;
    }
});

},{"./home.js":"dVZgU","./tabs.js":"hQkpQ","./footer.js":"2nDgU","./menu.js":"frHky","./aboutUs.js":"HQQIP","./contact.js":"eTyhu"}],"dVZgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHome", ()=>renderHome);
var _pizzaSvg = require("/pizza.svg");
var _pizzaSvgDefault = parcelHelpers.interopDefault(_pizzaSvg);
"use strict";
function renderHome() {
    const content = document.getElementById("content");
    const heroEl = document.createElement("div");
    heroEl.className = "hero";
    content.appendChild(heroEl);
    const natpisDiv = document.createElement("div");
    natpisDiv.className = "natpis";
    const natpis = document.createElement("h1");
    natpis.textContent = "Restoran Bucko";
    natpisDiv.appendChild(natpis);
    const slikaDiv = document.createElement("div");
    slikaDiv.className = "slika";
    heroEl.append(natpisDiv, slikaDiv);
    const slika = document.createElement("img");
    slika.setAttribute("src", (0, _pizzaSvgDefault.default));
    slika.setAttribute("crossorigin", "");
    slika.setAttribute("alt", "logo restorana");
    slikaDiv.appendChild(slika);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/pizza.svg":"ywTMh"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ywTMh":[function(require,module,exports) {
module.exports = require("5f0d8593d04720a9").getBundleURL("bLxZJ") + "pizza.2f113372.svg" + "?" + Date.now();

},{"5f0d8593d04720a9":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hQkpQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTabs", ()=>createTabs);
"use strict";
function createTabs() {
    const content = document.getElementById("content");
    const header = document.createElement("header");
    content.appendChild(header);
    const navBar = document.createElement("nav");
    header.appendChild(navBar);
    const unList = document.createElement("ul");
    navBar.appendChild(unList);
    const tab0 = document.createElement("a");
    tab0.setAttribute("href", "#");
    tab0.className = "tab";
    tab0.classList.add("home");
    tab0.textContent = "HOME";
    const tab1 = document.createElement("a");
    tab1.setAttribute("href", "#");
    tab1.className = "tab";
    tab1.classList.add("about");
    tab1.textContent = "ABOUT";
    const tab2 = document.createElement("a");
    tab2.setAttribute("href", "#");
    tab2.className = "tab";
    tab2.classList.add("menu");
    tab2.textContent = "MENU";
    const tab3 = document.createElement("a");
    tab3.setAttribute("href", "#");
    tab3.className = "tab";
    tab3.classList.add("contact");
    tab3.textContent = "CONTACT";
    unList.append(tab0, tab1, tab2, tab3);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nDgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFooter", ()=>createFooter);
"use strict";
function createFooter() {
    const content = document.getElementById("content");
    const footerEl = document.createElement("footer");
    content.appendChild(footerEl);
    const footerText = document.createElement("p");
    footerText.className = "footer";
    const date = new Date();
    const year = date.getFullYear();
    footerText.innerHTML = `&COPY; ${year}. </br> by KiX7777`;
    footerEl.appendChild(footerText);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"frHky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showMenu", ()=>showMenu);
"use strict";
function showMenu() {
    const content = document.getElementById("content");
    const heroEl = document.createElement("div");
    heroEl.className = "hero";
    content.appendChild(heroEl);
    const lijevo = document.createElement("div");
    lijevo.className = "lijevo";
    lijevo.classList.add("natpis");
    const natpis = document.createElement("h1");
    natpis.textContent = "Menu";
    lijevo.appendChild(natpis);
    const meni = document.createElement("div");
    meni.className = "meni";
    const slikaMenu = document.createElement("img");
    slikaMenu.setAttribute("src", "meni.webp");
    slikaMenu.setAttribute("alt", "slika menija");
    const h3 = document.createElement("h3");
    h3.className = "kategorijaJela";
    const nazivKategorije = document.createElement("p");
    nazivKategorije.className = "nazivKategorije";
    nazivKategorije.textContent = "Pizze";
    const jelo = document.createElement("div");
    jelo.className = "jelo";
    const nazivJela1 = document.createElement("p");
    nazivJela1.className = "nazivJela";
    nazivJela1.textContent = "Capricciosa";
    const nazivJela2 = document.createElement("p");
    nazivJela2.className = "nazivJela";
    nazivJela2.textContent = "Margherita";
    const nazivJela3 = document.createElement("p");
    nazivJela3.className = "nazivJela";
    nazivJela3.textContent = "Quattro formaggi";
    const nazivJela4 = document.createElement("p");
    nazivJela4.className = "nazivJela";
    nazivJela4.textContent = "Šokačka";
    meni.appendChild(h3);
    h3.append(nazivKategorije, jelo);
    const opisJela = document.createElement("p");
    opisJela.className = "opisJela";
    opisJela.textContent = "(umak od rajčice, mix gouda/mozzarella, šunka, gljive, origano)";
    const opisJela2 = document.createElement("p");
    opisJela2.className = "opisJela";
    opisJela2.textContent = "(umak od rajčice, mix gouda/mozzarella,mozzarella fior di latte,bosiljak)  ";
    const opisJela3 = document.createElement("p");
    opisJela3.className = "opisJela";
    opisJela3.textContent = "(umak od rajčice,gouda/mozzarella mix,mozzarella fior di latte,gorgonzola)";
    const opisJela4 = document.createElement("p");
    opisJela4.className = "opisJela";
    opisJela4.textContent = "(umak od rajčice, mix gouda/mozzarella, suha pečenica, kulen seka, dimljena slanina, jaje, vrhnje)";
    jelo.append(nazivJela1, opisJela, nazivJela2, opisJela2, nazivJela3, opisJela3, nazivJela4, opisJela4);
    heroEl.append(lijevo, meni);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"HQQIP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutUs", ()=>aboutUs);
"use strict";
function aboutUs() {
    const content = document.getElementById("content");
    const heroEl = document.createElement("div");
    heroEl.className = "hero";
    content.appendChild(heroEl);
    const lijevo = document.createElement("div");
    lijevo.className = "lijevo";
    lijevo.classList.add("natpis");
    const natpis = document.createElement("h1");
    natpis.textContent = "O nama";
    lijevo.appendChild(natpis);
    const desno = document.createElement("div");
    desno.className = "desno";
    desno.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nemo eaque? Porro, sequi aliquam quam ipsa iusto accusantium a exercitationem perspiciatis tempora placeat, aperiam nisi error sunt nulla nobis pariatur?
  Consequuntur id culpa ducimus facilis magnam amet quam animi consequatur, repudiandae maxime quisquam natus blanditiis aspernatur molestias magni, rerum deleniti, vitae asperiores perspiciatis debitis. Dolorem, ea. Officiis veritatis corporis exercitationem.
  Quos molestias voluptas enim dignissimos blanditiis assumenda inventore ipsum atque maxime culpa reiciendis laboriosam repudiandae pariatur numquam corporis, quaerat et error ullam! Molestiae dolorum et dicta, veritatis tempora dolores id?
  Animi deserunt aspernatur blanditiis modi velit hic architecto obcaecati esse eius fugit, suscipit saepe itaque quod minima accusamus nostrum consequatur et aliquam. Nesciunt enim voluptas dicta tempora inventore minus maxime!
  `;
    heroEl.append(lijevo, desno);
    const menu = document.querySelector(".menu");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTyhu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showContact", ()=>showContact);
"use strict";
function showContact() {
    const content = document.getElementById("content");
    const heroEl = document.createElement("div");
    heroEl.className = "hero";
    content.appendChild(heroEl);
    const lijevo = document.createElement("div");
    lijevo.className = "lijevo";
    lijevo.classList.add("natpis");
    lijevo.classList.add("kakodonas");
    const natpis = document.createElement("h1");
    natpis.textContent = "Kako do nas?";
    lijevo.appendChild(natpis);
    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `<div class="adresa">
                    <h3 class="contact-label">Adresa:</h3> 
                    <p class="contact-info">Banovačka 45, 33520 Slatina</p>
                    </div>
                    <div style="width: 70%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Banova%C4%8Dka%2045+(OPG%20Bo%C5%BEi%C4%87)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>

                    <div class="telefon">
                    <h3 class="contact-label">Telefon:</h3> 
                    <p class="contact-info">069/225-883</p>
                    </div>
                    <div class="email">
                    <h3 class="contact-label">Email:</h3> 
                    <p class="contact-info">kitakosalama@gmail.com</p>
                    </div>`;
    heroEl.append(lijevo, info);
    const mapDiv = document.createElement("div");
    mapDiv.className = "mapDiv";
    mapDiv.innerHTML = `<div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Banova%C4%8Dka%2045+(OPG%20Bo%C5%BEi%C4%87)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>`;
// info.appendChild(mapDiv);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire88b7")

//# sourceMappingURL=index.975ef6c8.js.map
