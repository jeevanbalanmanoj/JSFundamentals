(function(){

    function Outer (){
    
        self = this;
        this.name ="Jeevan"
        function inner(){
            console.log(self.name);
        };
        inner();
        /**
         * Need for self assignment avoided by using arrow functions
         * 
         */
        innerWithArrow = ()=>{
            console.log(this.name);
        }
        innerWithArrow();
    }
    Outer();


    Person = function(){
        this.name ="Jeevan";
        this.setName=function(name){
            this.name=name;
        }
        this.anotherSetNameTest = function (name){
            anotherSetName(name)
        }
        /**
         * Instead of passing this in some self variable we are directly able to change the this properties by using arrow functions
         */
        anotherSetName = (name)=>{
            this.name=name;
        }
    }
    person = new Person();
    anotherPerson = new Person();

    person.setName("Alice");
    console.log(person.name)
    anotherPerson.anotherSetNameTest("Alice");
    console.log(anotherPerson.name)



})
();