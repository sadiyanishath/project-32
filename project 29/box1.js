class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density':1.0
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.Visibility=255;
    }
    display(){

      if((this.body.speed)<5)
 {
 var pos =this.body.position;
      var angle=this.body.angle;
      push()
      strokeWeight(4)
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill(128,128,128);
      rect(0, 0, this.width, this.height);
      pop()

}else
{
World.remove(world,this.body)
push()
this.Visibility = this.Visibility -5;
tint(255,this.Visibility)
rect(999,999,this.width,this.height);
pop();
} 
     
    }
  };
