var basketA = document.getElementById("basketAmount");

var i1Con = document.getElementById("i1");
var i2Con = document.getElementById("i2");

updateBasket(basket);
function calcTotal(basketP){
	basket.total =0;
	for (var i = 0; i< 6; i++)
	{
		for(var j = 0 ; j<basketP.items[i]; j++)
		{
			basketP.total+= itemArray[i].price;;
		}
	}
	
}
function updateBasket(basketP)
{
	basketA.innerHTML = basketP.total;
}