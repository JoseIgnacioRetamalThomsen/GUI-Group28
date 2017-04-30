var basketA = document.getElementById("basketAmount");

var i1Con = document.getElementById("i1");
var i2Con = document.getElementById("i2");

updateBasket(basket);
showItem(i1Con,itemArray[2]);
showItem(i2Con,itemArray[3]);

function showItem(container,item) 
{
	container.innerHTML += "<div class='items'><div><p style='float: left; clear: left'><img src="+item.imageSrc+" height='350px' width='350px'></p></div>"+
							 "<div><br><br><h2>"+item.description[0]+"</h2>" + 
							 "<h1 style='color:red'> $ "+item.price+"</h1> "+
							 "<ul >"+
							 "<li>"+item.description[1]+"</li>"+
							 "<li>"+item.description[2]+"</li>"+
							 "<li>"+item.description[3]+"</li>"+
							 "<li>"+item.description[4]+"</li></ul><br><br>"+
							 "<button id= w" +item.idNum+" >Add To Basquet</button>"+ "<hr></div> </div>";
							 
	 

	document.getElementById( "w"+item.idNum ).addEventListener("click",function(){addToBasket(basket,item.idNum,item.price);console.log("working"+item.idNum)});
}

function addToBasket(basket,id,price)
{
	basket.itemsID.push(id);
	basket.itemsPrice.push(price);
	basket.items[id]++;
	calcTotal(basket);
	
	basketA.innerHTML = basket.total;
	localStorage.basketLS = JSON.stringify(basket);
}//add to basket

function calcTotal(basketP){
	basket.total =0;
	for (var i = 0; i < 6; i++)
	{
		for(var j = 0 ; j < basketP.items[i]; j++)
		{
			basketP.total+= itemArray[i].price;
		}
	}
}
function updateBasket(basketP)
{
	basketA.innerHTML = basketP.total;
}