chrome.runtime.onInstalled.addListener(function() {
    console.log("laaaaaaaaaaaaaaaaaaaaa")
    chrome.storage.sync.set({"first_Time":"yes"});
    setTimeout(() => {
        chrome.storage.sync.get("first_Time",function(item){
            console.log(item.first_Time)
        });
    }, 5000);
});


