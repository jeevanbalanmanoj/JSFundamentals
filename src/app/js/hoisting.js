'use strict'
(function(){

A();
function A(){

    console.log("A")
}
/*

Doesn't work because assignment is not hoisted. Only var a gets hoisted
var A = function(){

    console.log("A")
}    
*/

})();