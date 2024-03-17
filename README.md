# CSCI4140-1155143402-ChromeExtension
- Support the free version of Chevereto hosted on any server
- Enhance the photo editing feature of Chevereto using CamanJS
- Allow a user to upload web image(s) with right click(s)

## Requirements
- Use the CamanJS image editing JavaScript library to implement the image editor
- You can use any extra libraries (e.g., jQuery) besides CamanJS in this assignment
- Implement a Google Chrome Extension

## Implementation, Grading, and Constraints
- Implement a Manifest V3 extension, since Manifest V2 is deprecated in 2024
- Submit your work by compressing your codes and documents into one single file named as "SID_CSCI4140_assignment2.zip", and then submit it through blackboard
- Do not include the .git repository and any other temporary files in your submission
- Your extension should be able to run on top of Google Chrome 100.0 or above
- There must not be any JavaScript error thrown to the Developer Console from your extension (from the service-worker script or background and popup pages, and content scripts). Otherwise, at least 5 points would be deducted

## Tasks
1. Setting up Chevereto in Your Local Machine
2. Extension Setting
3. Enhancing Chevereto’s Photo Editing Feature
4. Uploading Web Images with Right Click

## Milestones
- Task 1: 0%
- Task 2: 15%
- Task 3: 58%
  - Injecting Edit with CamanJS button and showing the Photo Editor for the selected image: 10%
  - Photo Editor - 3 Filters: 18%
  - Photo Editor - Done and Cancel: 15%
  - Uploading the edited images to Chevereto server: 15%
- Task 4: 27%
  - Adding option in context menu: 12%
  - Uploading to Chevereto: 15%