var add =  function(){
    var counter =0;
    return function (){
        return counter++;
    }

}();

console.log(add())
console.log(add())
console.log(add())

var Person = function(name){
    var name =name;
    return {
            getName: function(){
                return name;
            },
            setName: function(newName){
                name = newName;
            }
    }
};

var person = Person("Jeevan");
var person2 = Person("Alice");

console.log(person.getName())
person.setName("gopu");
console.log(person2.getName())