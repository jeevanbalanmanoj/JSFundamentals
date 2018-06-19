let cat ={
    name : "Jeevan"
}
let newCat ={}

Object.setPrototypeOf(newCat,cat);
console.log(newCat.__proto__)