chrome.runtime.onInstalled.addListener(function() {
    console.log("laaaaaaaaaaaaaaaaaaaaa")
    chrome.storage.sync.set({"status":true});
    setTimeout(() => {
        chrome.storage.sync.get("status",function(item){
            console.log(item.status)
        });
    }, 5000);
});


