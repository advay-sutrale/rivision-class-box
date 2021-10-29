class Box{
    constructor(x,y){
this.advay=Bodies.rectangle(x,y,50,50)
this.width=50
this.height=50
World.add(world,this.advay);

    }

display(){
//rectMode(CENTER)
rect(this.advay.position.x,this.advay.position.y,this.width,this.height)

}
    
}


