# JavaScriptStarterKit

Welcome to your first JavaScript project!

This is all set up so you can hit the ground running on your first JavaScript project!

## Writing Code with ES6
[ES6](https://www.w3schools.com/js/js_es6.asp) makes life easier!
This is set up so you can use ES6 syntax by default. (Look into [babel](https://babeljs.io/) if you want to see why/how!
Right now, just know that that means you can use pretty much anything that you find on StackOverflow!

## Testing
You can run your tests with `$ npm run test`
The test runner is Jest. Documentation on syntax is available [here](https://jestjs.io/docs/en/expect).
Per Jest standards, tests are in the `__tests__/` folder.

## Linting
You can lint your code with `$ npm run lint`
This uses AirBnB's defaults. Feel free to change this in the `.eslintrc.js` file

## Browser
This sets you up to make a basic [single page application](https://en.wikipedia.org/wiki/Single-page_application) without the heavy lifting up front.

The entry point to your app is [`dist/index.html`](dist/index.html). This is where you can write HTML directly.
The entry point to your JavaScript is [`src/index.js`](src/index.js). This is where you can tell your app what to do and how to change. We'll talk about testing this file later. 
All the main [business logic](https://en.wikipedia.org/wiki/Business_logic) of your app should be in separate files. This has an example file called [`numbers`](src/numbers.js). Be sure to TDD everything in these files!
The _actual_ JavaScript that the brower reads is automatically generated, and is in `dist/main.js`. Don't make changes to this directly, you can just change the JavaScript in your `src/` folder! Note: `dist/index.html` refers to this file, not the ones you change, as the browser can only understand old, hard to read and write JavaScript.


## To get up and running
- In a terminal window, get Webpack to watch your files for changes with `$ npm run watch`
- In an other terminal window, open your app with `$ open dist/index.html` - this will open a browser
- Each time you make a change, you'll need to refresh the browser window, but you don't need to do anything else in the terminall
- We can set it up to automatically refresh later in the week if you find refreshing annoying :)

Once you feel comfortable, branch off master (so you can refer back to it if need be) and code away! Remember to have fun, and [ask for help!](https://8thlight.com/blog/chris-peak/2013/09/20/i-am-not-an-island.html)
