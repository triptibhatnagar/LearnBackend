// NPM understanding
// installing and uninstalling anything basics and advanced
// understand node_modules
// dependencies
// dev dependencies
// scripts - understanding default scripts PATH and custom scripts

// NPM - initially, node package manager
// initially, only node packages, different pkgs also came, now its just npm
// place where different codebases or packages are available

// node js core m jo installed ata h, i.e. module
// jo npm se download krte h, i.e. package
// EG - text to speech - accessibility package


// INSTALL -> npm i <pkgname>
// UNINSTALL -> npm uninstall <pkgname>
// installing particular version of pkg
// npm i <pkgname@version>

// NODE-MODULES
// koi mtlb nhi h hme isse
// yha pr jo packages hm install krte h vo aur uski jo dependencies h vo sb install ho jata h
// dependencies ki dependencies b install hoti h

// dependencies - pkgs and pkgs jinpe dep h
// devdepenedencies - pkgs jo sirf dev m kaam aynge pr jb app bnjayega aur deploy honjayega , then we will not use it, EG - npm i nodemon --save-dev


// scripts
// Q - kyi baar aap koi script chlate ho, then you write:-
// npm start
// npm run dev
// npm run concurrent
// npm test
// 2 script - start, test
// when you install node and npm, start and end cmds have been written in our OS in a table
// iske alwa kuch aur likhte ho -> usko run krne k liye 'run' lgana pdta h, means find it in the "scripts"
// you can make your own scripts in package.json
// I made "tripti", to run it:- npm run tripti
// write npm start in terminal
// for colourful texts - install chalk pkg

console.log("object")