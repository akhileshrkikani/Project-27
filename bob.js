class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          'friction':0.8,
          'density':2
      }
      this.body =Matter. Bodies.circle(x, y, radius, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      fill("violet");
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };
  ;