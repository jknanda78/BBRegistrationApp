require('core-js/es5');
var context = require.context('./test/components/', true, /-test\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
