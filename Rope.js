class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {  
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = { 
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        this.bodyA = body1;
        this.bodyB = body2;
        this.pointB = 
        World.add(world,this.rope);  

    }
 
    display(){
        var pointB = this.rope.bodyB.position
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, pointB.x+this.offsetX, pointB.y +this.offsetY);
    }

}