export const chromeTabsSendMessage = (message, callback) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, response => {
      if (callback) callback(response);
    });
  });
};
