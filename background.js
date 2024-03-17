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
            console.log("Image URL: " + info.srcUrl);

        }
    });
});

