
// Background
chrome.runtime.onMessage.addListener(function(payload, senderExtId, callBack) {
  if (payload.type == "localStorage") {
    switch (payload.method) {
      case 'getItem':
        callBack(localStorage.getItem(payload.key));
        break;
      case 'setItem':
        localStorage.setItem(payload.key, payload.value);
        callBack(`${payload.key} set to ${payload.value}`);
        break;
      case 'removeItem':
        localStorage.removeItem(payload.key);
        callBack(`${payload.key} removed`);
        break;
      case 'clear':
        localStorage.clear();
        callBack(`All local storage cleared`);
        break;
      default:
        break;
    }
  }
});
