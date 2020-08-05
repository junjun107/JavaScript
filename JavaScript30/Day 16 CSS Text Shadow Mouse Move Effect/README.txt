Day 16 CSS Text Shadow Mouse Move Effect

All about mouse move, move mouse cursor around the title shadeow follows 

set varibles: 
      title div 
	    h1 text 
	    shawow distant

addeventlistern('mousemove' , shadow)

function shadow()
  set varible: 
	width
	height of the div (the thing mouse hovering over) 

set varible: event x
	     event y (where the mouse curser is)

but if we console log x, y we will notice the abonormaity of the number. the event can also be triggered by child element of div. We need to make it so the children is ignored. 
	if(this !== e.target) {  
    	x = x + e.target.offsetLeft
    	y = y + e.target.offsetTop
 	 }

calculate the maximum movements that we want to happen (x,y)
set varible:xwalk, xWalk = (x/width * walk) - (walk/2);
		   ywalk=(y / height * walk) - (walk/2));

once we have the two number from xwalk and ywalk, use css tex-shadow to set effect 


