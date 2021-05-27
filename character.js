class Character{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height);
    
        World.add(world,this.body);
    }
     display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }
   
} 