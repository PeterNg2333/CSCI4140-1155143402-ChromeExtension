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
            div.innerHTML = '<div class="camanjs-editor" style="margin-top: 8px;">'
            div.innerHTML += '  <div style="display: flex;justify-content: center;flex-wrap: wrap;"><h2> CamanJS editor</h2></div>'
            div.innerHTML += '  <div style="display: flex;justify-content: center;flex-wrap: wrap;"><canvas id="image-canvas" width="800px" height="400px" ></canvas></div>'

            div.innerHTML += '  <!-- Controls for brightness, contrast, and saturation -->'
            div.innerHTML += '  <div class="controls" style="display: flex;justify-content: center;flex-wrap: wrap;">'
            div.innerHTML += '      <div> <button id="editCamanJs>Edit with CamanJs</button> </div>'
            div.innerHTML += '      <div> <button class="apply-contrast">Contrast</button> </div>'
            div.innerHTML += '      <div> <button class="apply-saturation">Saturation</button> </div>'

            div.innerHTML += '      <!-- Buttons for applying or canceling edits -->'
            div.innerHTML += '      <div> <button class="original-image">Original Image</button> </div>'
            div.innerHTML += '      <div> <button class="done-editing">Done</button> </div>'
            div.innerHTML += '      <div> <button class="cancel-editing">Cancel</button> </div>'
            div.innerHTML += '  </div>'
            div.innerHTML += '</div>'

            var section = document.querySelector('#editCamanJsDiv');
            section.appendChild(div);
            addCamanJs();
}

function addCamanJs(){
            // create canvas
            var canvas = document.getElementById('image-canvas');
            var ctx = canvas.getContext('2d');
            var img=new Image();
            img.src = "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg"
            var width = 800;
            var height = 400;
            var imgWidth = img.width;
            var imgHeight = img.height;
            ctx.drawImage(img, 0, 0, imgWidth, imgHeight, 0, 0, width, height);
            console.log("appending canvasDiv");
}