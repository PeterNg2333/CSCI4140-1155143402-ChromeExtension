# CSCI4140-1155143402-ChromeExtension

## Github Link
- https://github.com/PeterNg2333/CSCI4140-1155143402-ChromeExtension

## Introduction
This assignment involves creating a Chrome extension for a Web Instagram application. The extension will enhance the functionality of the Web Instagram application, allowing users to perform advanced editing on their images and save any image they like to their album from any website they are browsing.

## Key Files
- manifest.json
- csci4140-assignment2-master: docker config file (using linuxserver/chevereto and mariadb)
- popup.html: show the popup page when the icon in externsion tool bar is clicked
- setting.html: setting page for storing the target Cheeverto URL (you can open through popup.html)
- background.js: service worker for the extension
- content.js: content script for injecting Dom in the target page
- tmp.js: the script to be injected into Cheeverto in order the update the uploaded image
- testing.mkv: Demo video in case the extension cannot work in other environment

## Building the System
A Manifest V3 extension is implemented

## Completed Parts
- Task 1:  Setting up Chevereto in Your Local Machine
    1.  Chevereto is deployed on a local machine for testing the functionality of the Chrome extension. However, since I cannot use nmtan/chevereto in my window version docker, I decided to use linuxserver/chevereto (please check the docker document)

- Task 2: Extension Setting
  - You can modify the Cheeverto URL via this URL (popup.html). 
  - You can click "Set" button to save in local storage and reload next time.

- Task 3: Enhancing Chevereto’s Photo Editing Feature
  - Injecting Edit with CamanJS button and showing the Photo Editor for the selected image
  - Photo Editor - 3 Filters
  - Photo Editor - Done, Original, Cancel
  - Uploading the edited images to Chevereto server after injecting tmp.js and update the uploaded images

- Task 4: Uploading Web Images with Right Click
  - Adding option in context menu which allow uploading image to Chevereto via URL 
  - Web images must be REAL url can be uploaded instead of blob image and base64 url
