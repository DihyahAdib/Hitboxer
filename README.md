## Hitboxer — Sprite Sheet hitbox creation tool.

Hitboxer is a desktop tool built with Electron + React + TypeScript designed for artists, developers, and modders who need a fast, clean way to create hitboxes, edit them with an abundant of stats & data, and export results as a json file ready to be parsed by an game engine.

It supports independent scrolling panels, color-coded metadata, dynamic UI scaling, A butt load of settings, and a focused layout for productivity.

Hitboxer was built out of the frustration alot of fellow game developers run into when making 2D games and dealing with 2D art animations be it drawn HD or pixel art and thats the creation, managing, and usage of hitboxes.
In my case I- like others were exporting json aseprite spritesheets data, and using their "slice" tool as a bootleg hitbox outline so that it can be parsed by our game engines. but it was an absolute positioning from the origin for the dimensions of the hitbox and not relative to IT'S specific frame, this pretty much ruined the entire experince for me aseprite seem to have forgotten about the communities request.

I looked around and found others who created something like mine but most of theirs are out of date builds and I wanted to create an updated project for the people that I might maintain.

So with that, I truly hope you enjoy Hitboxer!

## ✨ Features

### 🖼 Image Viewer

Scrollable image panel with independent scrolling

Scales up to 16×

Accurate width/height readings

Automatic recalculation of scaled dimensions

### 🎚 Scaling Slider

MUI slider restyled to match app’s green theme

Custom square thumb

Smooth scale adjustment between 1–16×

Color-coded metadata:

Green = normal

Yellow = scaled value matches original

Red = max scale reached

### 📐 Metadata Panel

Fixed left panel that scrolls independently

Displays:

Original width/height

Scaled width/height

Divider line separating original vs scaled values

### 💬 Tooltip Banner

Full-width bar above the image viewer

Shows contextual hints

Smooth animation & fade-out

### 🖲 Tool Panel

Change-image buttons

Social buttons that link to your platforms

Centered icon + text alignment

Clean, green-theme styling

### 📁 File Handling

Supports PNG, JPG, WEBP, etc.

Gracefully shows fallback icon when image fails to load

Safe path handling using Electron preload
