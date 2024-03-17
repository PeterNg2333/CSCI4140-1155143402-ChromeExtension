// If the tabURL is Chevereto URL, then send message to content.js to run main() function.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url) {
        chrome.storage.local.get(['CheveretoURL'], function(item) {
            if (item.CheveretoURL != null && tab.url.includes(item.CheveretoURL)){
                console.log('This is Chevereto URL');
                // chrome.tabs.executeScript(tabId, {file: 'content.js'});
                chrome.tabs.sendMessage(tabId, {message: 'CheveretoURL'}, function(response) {
                    console.log("Respond: " + response);
                });
                
            }else {
                console.log('This is not Chevereto URL');
            }
        });
    }
});

// Create context menu and add listener
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "uploadToChevereto",
        "title": "Upload to Chevereto",
        "contexts": ["image"]
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        if (info.menuItemId === "uploadToChevereto") {
            var url = info.srcUrl;
            if (url.includes('http')){
                chrome.storage.local.set({imageURL: url});
                chrome.storage.local.get(['CheveretoURL'], function(item) {
                    if (item.CheveretoURL != null){
                        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
                            if (tabId != tab.id || changeInfo.status != 'complete') {
                                return;
                            }
                            chrome.tabs.onUpdated.removeListener(arguments.callee);
                            if (tab.url.includes(item.CheveretoURL)){
                                console.log(tabId);
                                chrome.tabs.sendMessage(tabId, {message: 'uploadImage', URL:url}, function(response) {
                                    console.log("Respond: " + response);
                                }); 
                            }

                        });
                        console.log(url)
                        chrome.tabs.create({url: item.CheveretoURL+'/upload/'});
                    }else {
                        alert('Please set Chevereto URL in the option page');
                    }
                });
            }
            else {
                console.log("this is not an image URL");
            }

        }
    });
});



