class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options ={
restitution : 0.8,
friction : 3,
density : 30
	}
	
		
		this.body=Bodies.rectangle(x,y,50,50 ,options)
		World.add(world, this.body);

	}
	display()
	{

			var pos = this.body.position;	
            var angle = this.body.angle;	
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
			rect(0,0,50,50);

			pop()
            
	}

}