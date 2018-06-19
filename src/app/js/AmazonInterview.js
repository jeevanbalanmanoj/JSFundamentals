(function(){
    String.prototype.repeatify = function(n){
       let repeatedValue = "";
        for( let i=0;i<n;i++)
            repeatedValue+=this;
        return repeatedValue;
        }
    console.log("hello".repeatify(3));



    function sum (x){
        return function(y){
           return x+y;
        }
    }
    console.log(sum(3)(2));

}


)();
