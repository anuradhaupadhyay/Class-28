class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.01
        }
        this.chain = Matter.Constraint.create(options);
        
        World.add(world, this.chain);

        //this.pointB=pointB;
    }

    display(){
        push()
     var pointA=this.chain.bodyA.position;
     line(pointA.x,pointA.y,this.chain.pointB.x,this.chain.pointB.y)
     pop();
    }
    
}