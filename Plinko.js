class Plinko {
    constructor(x,y){
var options={
    isStatic:true,
    resitution:2.0,
    friction:1.0,
    //density:9.0
}
this.x =x;
this.y=y;
this.r=10;
this.body=Bodies.circle(this.x,this.y,10,options)
World.add(world,this.body);
    }

    display(){
       // var paperpos=this.body.position;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER)
        strokeWeight(3);
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop();
    }
}