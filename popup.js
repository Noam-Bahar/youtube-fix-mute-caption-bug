"use strict";

// @ts-check

const checkbox = document.getElementById("enableToggle");

chrome.storage.sync.get("enabled", (data) => {
  checkbox.checked = Boolean(data.enabled);
});

checkbox.addEventListener("change", (event) => {
  chrome.storage.sync.set({ enabled: event.target.checked });
});
