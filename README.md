# SnowViewer

A simple JavaScript viewer focused on snow and winter scenes. The user can navigate throughout images using arrows and dots, while the displayed image and text update dinamically

## Features
- Image viewer with snow-themed images
- Navigation using left and right arrows
- Navigation using clickable dots
- Dynamic text displayed over the image
- All elements are syncronized using an index

## How it works
- The project uses an array of objects to store the image src, its text, and it corresponding circle or dot
- A variable index controls the currently visible image
- When the user interacts with the arrows or with the dots, the index changes and the image the text and the dot are updated
