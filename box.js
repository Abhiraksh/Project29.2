class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,30,50 , options);
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        stroke("black");
        strokeWeight(2);
        
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 30,50);
        pop();
      }
}