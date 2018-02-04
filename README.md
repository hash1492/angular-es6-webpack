### Description

This is a simple angular app which experiments with Webpack, ES6, and thus Babel.

While development, the code is separated into individual files like my-controller.controller.js and app.js.
However, before pushing to production, the code should be bundled using webpack.

### ES6

This app uses es6 features like classes, es6 modules etc. 

### Why use Babel

As this app uses ES6 features, it is required to transpile to code to ES5 using Babel. The babel-loader is using within Webpack's configuration to achieve this.

### Plugins used

Uglify - To minify the code in the bundle.js file, we used the uglify plugin of webpack.
Banner - To add a banner on top of the bundle.js file, we used the BannerPlugin