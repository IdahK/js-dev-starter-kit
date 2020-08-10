//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesn't understand  
//css files will be treated like an empty function
require.extensions['.css'] =function(){};


