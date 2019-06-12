// Content
myLocalStorageSendMessage = (payload) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(payload, resolve);
  });
}

(async () => {
  payload1 = {
    type: "localStorage",
    method: "setItem",
    key: "key",
    value: "value"
  }
  payload2 = {
    type: "localStorage",
    method: "getItem",
    key: "key",
  }
  payload3 = {
    type: "localStorage",
    method: "removeItem",
    key: "key",
  }
  payload4 = {
    type: "localStorage",
    method: "clear",
  }

  await myLocalStorageSendMessage(payload1);
  myValue = await myLocalStorageSendMessage(payload2);
  await myLocalStorageSendMessage(payload3);
  await myLocalStorageSendMessage(payload4);
})();
