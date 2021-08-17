class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	var options ={
restitution : 0.8,
friction : 0.9,
density : 12
	}
	
		this.width = w
        this.height = h
		this.body=Bodies.rectangle(x,y, this.width,this.height, options)
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
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height);

			pop()
	}

}