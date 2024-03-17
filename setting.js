const InputSubmit = document.getElementById('sbt_set');
const InputVal = document.getElementById('URL');

InputSubmit.addEventListener('click', function() {
    const input = InputVal.value;
    chrome.storage.local.set({'CheveretoURL': input}, function() {
        chrome.storage.local.get(['CheveretoURL'], function(item) {
            console.log('URL saved: ' + item.CheveretoURL);
        })
        
    });
});

function loadURL(){
    chrome.storage.local.get(['CheveretoURL'], function(item) {
        item.CheveretoURL;
        if (item.CheveretoURL != null){
            InputVal.value = item.CheveretoURL;
            console.log('URL loaded: ' + item.CheveretoURL);
        }
    });
}

loadURL();



