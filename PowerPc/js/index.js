var myIndex= 0;
slideShow();

function slideShow() 
{
	var i;
	var slide = document.getElementsByClassName("mySlides");
	var randomNum = Math.floor(Math.random() * slide.length);
		
	for (i = 0; i < slide.length; i++) 
	{
		slide[i].style.display = "none";  
	}
		
	myIndex++;

	if (myIndex > slide.length) 
	{
		myIndex = 0
	}  
	
	slide[myIndex = randomNum].style.display = "block";  
	
	setTimeout(slideShow, 2000); // change 2 second
}//slide show