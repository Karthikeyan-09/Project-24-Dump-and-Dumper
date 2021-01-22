class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction :0.5,
            density : 1.2
        }
        this.paperObject = Bodies.circle(x,y,radius,options);
        World.add(world,this.paperObject);
        this.radius = radius;
        
    }

    display() {
        var pos = this.paperObject.position;
        push();
        translate(pos.x,pos.y);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}