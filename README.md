# NES Editor
## Tools for building NES assets / games

This is in a very earlier stage and doesn't do much. There is a lot of work to be done.
The original goal of creating a simple sprite based canvas pixel editor and saving it
to a 2bpp planar file that the NES could understand does work. I would like to see far
functionality. Including using web audio API to create a tracker like sound / music editor
that can also be output to NES format.

## Running

`yarn install` or `npm install`

`yarn dev` or `npm run dev`

in a separate terminal window you run the node server if you need to save `yarn start` or `npm start`

## NES

this project currently is using nesasm to compile .nes files from .asm files.
In the example folder is a some basic NES testing code. It is currently set to
compile using the exported .chr data in data/sprite1.chr. These and more will
eventually be more automated and configurable.

I'm hoping to have a full editor for NES games. I'd like to make an all-in-one tool
that will make NES game creation more accessible to others.

## Compiling NESASM3
Current setup here is for nesasm compile. It is a 6502 compile that has special features sepecific to NES.
I was using it in this project for Linux. You can also compile it on Mac OS and of course Windows.
Need to add a post-install script for NPM that can detect OS and fetch the proper verison of nesasm (in the future).
For now, you can manually git the makefiles for each OS.

- Linux - https://github.com/toastynerd/nesasm
- Mac OS - https://github.com/cesarparent/NESAsm-3.1-Mac

### Very early stage
