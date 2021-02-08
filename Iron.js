class Dummy{
    constructor(x,y,width,height){
        var options={
            'restitution':0.3,
            'density':5,
            'friction':5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
      stroke("black");
      fill("red");
        fill("grey");
        rect(0,0,this.width,this.height);
        pop()
    }
}