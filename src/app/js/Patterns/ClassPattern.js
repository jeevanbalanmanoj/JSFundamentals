class person {
    constructor(x,y) {
        this.x =x;
        this.y =y;
    }
    getX() {
        console.log(this.x);
    }
}
let p = new person(2,1);
p.getX();