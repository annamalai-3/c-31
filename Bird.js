class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = []
    this.image2 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var pos = [this.body.position.x,this.body.position.y];

    if(this.body.position.x >200){
    this.path.push(pos);
    }
    for( var i=0;i<this.path.length;i++){
    image(this.image2,this.path[i][0],this.path[i][1]);
     

    }
 
    super.display();
  }
}
