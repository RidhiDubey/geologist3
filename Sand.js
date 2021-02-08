class Sand{
    constructor(x,y,radius){
        var options={
            'restitution':1.3,
            'density':1,
            'friction':5
        }

        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
      translate(pos.x, pos.y);
      
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0, this.radius);
      pop();
    }
    
}