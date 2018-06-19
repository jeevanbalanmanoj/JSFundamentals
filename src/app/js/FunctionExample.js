var testObject ={
    value :0,
    incrementMethod: function(){
        this.value++;
    }
    
}
AnotherObject = function (){
    this.value=0;
    that =this;


    // As this is not a method but an inner function it can't directly access value. This will have to be stored into some other variable and passed
    function incrementFunction(that){
        that.value++;
    }

    // Since this is a method of the function, it has access to value
    this.incrementMethod= function(){
        this.value++;
        incrementFunction(that)
    }
}

testObject.incrementMethod()
var anotherObject = new AnotherObject();
anotherObject.incrementMethod()

console.log(anotherObject.value)