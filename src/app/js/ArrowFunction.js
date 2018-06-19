(function(){

    var person ={
        name :'',
        setName: function(){
            /** 
             * Arrow function doesn't have this. So here this is same as it's parent
            */
            let nameSetter = ()=>{
                this.name ="Jeevan";
            }
           nameSetter();
        }
    }
    person.setName()
    console.log(person.name)

})
();