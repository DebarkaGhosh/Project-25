class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=90;
		this.body=Bodies.circle(x,y,90, options)
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			stroke("blue")
			fill("red")
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}