function showItems(){
			for( var i =0 ; i<6 ; i++)
			{
				if(basket.items[i]>0)
				{
					itemArray[0].showItemBasket(basketItem[i],itemArray[i],basket.items[i]);
				}
				else
				{
					basketItem[i].innerHTML = "";
				}
			}
			}
showItems();