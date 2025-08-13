"use strict";

// @ts-check

chrome.storage.sync.get("enabled", (data) => {
  handleToggle(data.enabled);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync" && changes.enabled) {
    handleToggle(changes.enabled.newValue);
  }
});

function handleToggle(checked) {
  if (checked) {
    document.addEventListener("keydown", antiShrinkinatorEventListener, true);
  } else {
    document.removeEventListener(
      "keydown",
      antiShrinkinatorEventListener,
      true
    );
  }
}

function antiShrinkinatorEventListener(event) {
  const isMuteKey = event.key === "AudioVolumeMute" || event.keyCode === 173;

  if (isMuteKey) {
    console.log("%cFix YouTube Mute Caption Bug", `background: #6905b0;
      background: linear-gradient(90deg,rgba(105, 5, 176, 1) 0%, rgba(73, 73, 179, 1) 18%, rgba(11, 134, 179, 1) 35%, rgba(90, 191, 88, 1) 51%, rgba(196, 192, 73, 1) 67%, rgba(219, 148, 48, 1) 82%, rgba(253, 29, 29, 1) 100%); 
      font-weight: bold;
      background-clip: text;
      color: transparent;`);
    console.log("Mute key pressed! The keyboard event's propagation has been stopped in order to prevent it from shrinking the captions.")

    event.stopPropagation();
  }
}
