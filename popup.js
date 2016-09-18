
function url_prod () {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  var currentUrl = tabs[0].url
  var newUrl = currentUrl.replace(/https:\/\/github.com/ig, 'https://cdn.rawgit.com').replace(/blob\//ig, '');
    console.log(tabs[0].url);
	chrome.tabs.create({active: true, url: newUrl});
});

}
function url_dev () {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  var currentUrl = tabs[0].url
  var newUrl = currentUrl.replace(/https:\/\/github.com/ig, 'https://rawgit.com').replace(/blob\//ig, '');
    console.log(tabs[0].url);
  chrome.tabs.create({active: true, url: newUrl});
});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("js_dev_btn").addEventListener('click', url_dev);  
    document.getElementById("js_prod_btn").addEventListener('click', url_prod);  
});
