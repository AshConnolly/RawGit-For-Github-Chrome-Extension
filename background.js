chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (~tab.url.indexOf('github') && ~tab.url.indexOf('blob')) {
    chrome.pageAction.show(tabId);
  }
});