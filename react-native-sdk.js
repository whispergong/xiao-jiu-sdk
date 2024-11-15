const i = (e) => {
  var t;
  (t = window.ReactNativeWebView) == null || t.postMessage(JSON.stringify(e));
}, n = (e) => {
  i({
    type: "share",
    data: {
      detail: e.detail
    }
  });
}, o = (e) => {
  i({
    type: "shareToIM",
    data: {
      detail: e.detail
    }
  });
}, a = (e) => {
  i({
    type: "goweboffice",
    data: {
      detail: e.detail
    }
  });
}, d = (e) => {
  i({
    type: "exitweboffice",
    data: {
      detail: e.detail
    }
  });
};
function s() {
  var t;
  console.log("Mobile SDK initialized");
  const e = (t = window.getDocInstance) == null ? void 0 : t.call(window);
  e && (e.addEventListener("share", n), e.addEventListener("shareToIM", o), e.addEventListener("goweboffice", a), e.addEventListener("exitweboffice", d), window.onbeforeunload = () => {
    e.removeEventListener("share", n), e.removeEventListener("shareToIM", o), e.removeEventListener("goweboffice", a), e.removeEventListener("exitweboffice", d);
  });
}
s();
