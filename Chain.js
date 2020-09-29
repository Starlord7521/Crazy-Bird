class Chain{
    constructor(bodyA, bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.1,
    }
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    }
    display(){
     var Harry = this.chain.bodyA.position;
     var Porter = this.chain.bodyB.position;
     line(Harry.x,Harry.y,Porter.x,Porter.y);   
    }
}