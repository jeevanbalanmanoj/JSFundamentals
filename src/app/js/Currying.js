let dragon = 
function (name){
    return function(size){
        return name + " is a dragon which is of size " +size;
    }
}
console.log(dragon("Denver")(100));



function sum (x){
    return function(y){
       return x+y;
    }
}
console.log(sum(3)(2));