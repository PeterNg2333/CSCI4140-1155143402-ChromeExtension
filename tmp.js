try {
   

    if (document.querySelector('#image-canvas') != null) {
        var canvas = document.querySelector('#image-canvas');
        canvas.toBlob(function(blob) {
            // Assume the original file had a name and you want to preserve it
            var originalFileName = CHV.fn.uploader.files[0];
            // Create a new file from the blob
            var newFile = new File([blob], originalFileName, {type: blob.type});
            // Replace the original file object with the new one
            CHV.fn.uploader.files[0] = newFile;
            // Change the img of canvas by new file
            var canvas = document.querySelector('#anywhere-upload-queue canvas.canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image();
            var imgURL = window.URL.createObjectURL(newFile);
                
            img.onload = function() {
                // Draw the image onto the canvas
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            
            // Set the source of the image to the object URL
            img.src = imgURL;
            // clear canvasDiv
            var div = document.querySelector('.camanjs-editor');
            var message = document.createElement('p');
            message.id = 'message';
            if (document.querySelector('#message') != null) {
                document.querySelector('#message').remove();
            }
            message.textContent = 'Click [Edit] button to edit the image again with the original image';
            message.style = 'color: red; font-size: 16px; font-weight: bold;';
            div.parentElement.appendChild(message);
            div.remove();
            // show hidden button
            var button = document.getElementById('editCamanJs');
            button.style = 'background-color: #5BA4AD; color: white; border-color: green; padding: 10px 20px; font-size: 16px; cursor: pointer; margin: 10px 0; border-radius: 5px;';
        });
    }
} catch (e) {
    console.log(e);
}