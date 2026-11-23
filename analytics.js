(() => {
  // Set this to the /count endpoint from the owner's GoatCounter dashboard.
  // Both language versions use this one endpoint and share visitor statistics.
  const endpoint = "";

  if (!endpoint || window.location.hostname !== "timrayz.github.io") {
    return;
  }

  window.goatcounter = {
    path: window.location.pathname === "/index.html" ? "/" : window.location.pathname,
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = endpoint;
  document.head.appendChild(script);
})();
