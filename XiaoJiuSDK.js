function r() {
  var d;
  const c = (/* @__PURE__ */ new Date()).getTime(), o = (d = document.currentScript) == null ? void 0 : d.src;
  let t = "https://static.4399om.com";
  o && (t = new URL(o).origin);
  let s = "infofe-kdocs-sdk";
  if (window.ReactNativeWebView)
    s = "react-native-sdk";
  else {
    const e = document.createElement("link");
    e.rel = "stylesheet", e.id = "infofe-kdocs-sdk-css", e.href = `${t}/xiao-jiu-sdk/style.css?v=${c}`, document.head.appendChild(e);
  }
  const i = document.createElement("script");
  if (i.type = "module", i.id = "infofe-kdocs-sdk", t.includes("localhost")) {
    const e = document.createElement("script");
    e.type = "module", e.src = `${t}/@vite/client`, document.body.appendChild(e);
    const n = document.createElement("script");
    n.type = "module", n.innerHTML = `import RefreshRuntime from '${t}/@react-refresh'
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true`, document.body.appendChild(n), i.src = `${t}/src/infofe-kdocs-sdk.tsx?t=${c}`;
  } else
    i.src = `${t}/xiao-jiu-sdk/${s}.js?v=${c}`;
  document.body.appendChild(i);
}
r();
