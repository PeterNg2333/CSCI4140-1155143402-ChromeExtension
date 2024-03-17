

chrome.runtime.onMessage.addListener(handleMessages);
function handleMessages(request, sender, sendResponse) {
    console.log('Message received: ' + request.message);
    if (request.message === 'CheveretoURL'){
        sendResponse({message: 'CheveretoURL'});
        window.addEventListener('load', main());
        console.log('main() function called');
    }
    if (request.message === 'uploadImage' && request.URL){
        sendResponse({message: 'uploadImage'});
        console.log('uploadImage function called');
        window.addEventListener('load', uploadImage(request.URL));
    }
}

function uploadImage(url){
    var myParam = url 
    console.log(myParam);
    document.querySelector('a[data-target="anywhere-upload-paste-url"]').click();
    setTimeout(function(){
        document.querySelector('#fullscreen-modal-body > div > textarea').value = myParam;
    }, 500);
    setTimeout(function(){
        document.querySelector('#fullscreen-modal-box > form > div.btn-container > button').click();
        console.log("Image uploaded");
    }, 500);

}

function main(){
    console.log("running content.js");
    var url = window.location.href;
    var imageSubmit = document.querySelector('#anywhere-upload-submit button');
    if (url.includes('upload') && imageSubmit){
        console.log('This is Chevereto upload page');
        var section = document.createElement('section');
        section.id = 'editCamanJsDiv';
        var button = document.createElement('button');
        button.innerHTML = 'Edit with CamanJs';
        button.id = 'editCamanJs';
        button.style = 'background-color: #5BA4AD; color: white; border-color: green; padding: 10px 20px; font-size: 16px; cursor: pointer; margin: 10px 0; border-radius: 5px;';
        section.appendChild(button);
        imageSubmit.parentElement.parentElement.appendChild(section);
        button.addEventListener('click', function(){
            buttonClick()
        });

    }else {
        console.log('This is not Chevereto upload page');
    }
    
}

function buttonClick(){
            // hidden button 
            button = document.querySelector('#editCamanJs');
            console.log("appending canvasDiv");
            button.style = 'visibility: hidden;';
            
            // create canvas
            var div = document.createElement('div');
            div.id = 'canvasDiv';
            var text = '<div class="camanjs-editor" style="margin-top: 8px;">'
            text += '       <div style="display: flex;justify-content: center;flex-wrap: wrap; margin-bottom:10px;"><h2> CamanJS editor</h2></div>'
            text += '       <div style="display: flex;justify-content: center;flex-wrap: wrap;"><canvas id="image-canvas" width="800px" height="400px" ></canvas></div>'
            text += '       <div style="display: flex;justify-content: center;flex-wrap: wrap; margin-top: 10px;" id="controlgroup">'
            text += '           <label for="cssci4140-brightness">Brightness</label><input type="range" id="cssci4140-brightness" name="brightness" min="-100" max="100" value="0">'
            text += '           <label for="cssci4140-contrast">Contrast</label><input type="range" id="cssci4140-contrast" name="contrast" min="-100" max="100" value="0">'
            text += '           <label for="cssci4140-saturation">Saturation</label><input type="range" id="cssci4140-saturation" name="saturation" min="-100" max="100" value="0">'
            text += '       </div>'
            text += '       <div style="display: flex;justify-content: center;flex-wrap: wrap;" id="buttongroup">'
            text += '           <button id="cssci4140-original" style="display: inline; background-color: #5BA4AD; color: white; border-color: green; padding: 10px 20px; font-size: 16px; cursor: pointer; margin: 10px 0; border-radius: 5px;">Original</button>'
            text += '           <button id="cssci4140-done" style="display: inline; background-color: #5BA4AD; color: white; border-color: green; padding: 10px 20px; font-size: 16px; cursor: pointer; margin: 10px 0; border-radius: 5px;">Done</button>'
            text += '           <button id="cssci4140-cancel" style="display: inline; background-color: #5BA4AD; color: white; border-color: green; padding: 10px 20px; font-size: 16px; cursor: pointer; margin: 10px 0; border-radius: 5px;">Cancel</button>'
            text += '        </div>'
            text += '   </div>'
            div.innerHTML = text;
            var section = document.querySelector('#editCamanJsDiv');
            section.appendChild(div);
            addCamanJs();
            addHandlers();
}

function addCamanJs(){
    // Create canvas
    var canvas = document.getElementById('image-canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    // Set crossOrigin to anonymous to avoid CORS issues

    img.onload = function() {
        // Set canvas size
        var width = canvas.width;
        var height = canvas.height;


        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
        console.log("Image drawn onto canvas");

        // initialize CamanJS
        Caman('#image-canvas', function() {
            this.render();
        });
    };

    // Set the source of the image
    img.crossOrigin = 'anonymous';

    fetch('https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg', {
        mode: 'no-cors'
    }).then(res => {
        console.log('response', res);
        // Create a blob URL from the response stream
        b = res;
        return res;
    }).then(blob => {
        console.log('blob', blob);
        a = blob;
        // Create a URL for the blob object
        var imgURL = URL.createObjectURL(blob);
        // Set the image source to the blob URL
        img.src = imgURL;
    }).catch(error => {
        console.error('Error fetching the image:', error);
    });
            
    }

function addHandlers(){
    var brightness = document.getElementById('cssci4140-brightness');
    brightness.addEventListener('change', function(){
        changeCanvas();
        console.log("Brightness changed");
    });
    var contrast = document.getElementById('cssci4140-contrast');
    contrast.addEventListener('change', function(){
        changeCanvas();
        console.log("Contrast changed");
    });
    var saturation = document.getElementById('cssci4140-saturation');
    saturation.addEventListener('change', function(){
        changeCanvas();
        console.log("Saturation changed");
    });
    var cancel = document.getElementById('cssci4140-cancel');
    cancel.addEventListener('click', function(){
        cancelEdit();
        console.log("Edit cancelled");
    });
    var original = document.getElementById('cssci4140-original');
    original.addEventListener('click', function(){
        originalCanvas();
        console.log("Original clicked");
    });
    var done = document.getElementById('cssci4140-done');
    done.addEventListener('click', function(){
        doneEdit();
        console.log("Edit done");
    });
}

function changeCanvas(){
    var brightness = parseInt(document.getElementById('cssci4140-brightness').value);
    var contrast = parseInt(document.getElementById('cssci4140-contrast').value);
    var saturation = parseInt(document.getElementById('cssci4140-saturation').value);
    Caman("#image-canvas", function(){
        this.revert(false); 
        this.brightness(brightness);
        this.contrast(contrast);
        this.saturation(saturation);
        this.sinCity();
        this.render();
    });

}

function cancelEdit(){
    // clear canvasDiv
    var div = document.querySelector('.camanjs-editor');
    div.remove();
    // show hidden button
    var button = document.getElementById('editCamanJs');
    button.style = 'background-color: #5BA4AD; color: white; border-color: green; padding: 10px 20px; font-size: 16px; cursor: pointer; margin: 10px 0; border-radius: 5px;';
}

function originalCanvas(){
    Caman("#image-canvas", function(){
        this.revert(false);
        this.render();
    });
}

function doneEdit(){
    var file = chrome.runtime.getURL('tmp.js');
    console.log(file);
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    document.head.appendChild(script);
    setTimeout(function(){
        script.remove();
    }, 500);
    


    // var canvas = document.querySelector('#image-canvas');
    // console.log(getChevereto());
    // canvas.toBlob(function(blob) {
    //     // Assume the original file had a name and you want to preserve it
    //     var originalFileName = execGetCHVUploader();
    //     // Create a new file from the blob
    //     var newFile = new File([blob], originalFileName, {type: blob.type});
    //     // Replace the original file object with the new one
    //     execGetCHVUploader() = newFile;
        
    //     // Continue with the upload or whatever process you need
    //     CHV.fn.uploader.upload();
    // });
    // document.querySelector('a[data-target="anywhere-upload-paste-url"]').click();
    // document.querySelector('#fullscreen-modal-body > div > textarea').value = "blob:http://localhost:8080/4bc5538c-1ccd-4d4d-b110-b39430b91612";
    // document.querySelector('#fullscreen-modal-box > form > div.btn-container > button').click();
    // console.log("Image uploaded");
}





