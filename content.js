chrome.runtime.onMessage.addListener(handleMessages);
function handleMessages(request, sender, sendResponse) {
    console.log('Message received: ' + request.message);
    if (request.message === 'CheveretoURL'){
        sendResponse({message: 'CheveretoURL'});
        main();
    }
}

function main(){
    console.log("running content.js");
}