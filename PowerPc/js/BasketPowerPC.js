var basketA = document.getElementById("basketAmount");
var basketA1 = document.getElementById("basketAmount1");
var itemsCont = document.getElementById("basketItem2");
var checkOutButton = document.getElementById("checkOut");

var checkDC =  document.getElementById("checkDC");
var discountTB = document.getElementById("discountCodeTB");
			
var basketItem = [document.getElementById("item0"),document.getElementById("item1"),document.getElementById("item2"),document.getElementById("item3"),document.getElementById("item4"),document.getElementById("item5")];

basketA1.innerHTML = basket.total;
function showItems(){
			for( var i =0 ; i<6 ; i++)
			{
				if(basket.items[i]>0)
				{
					showItemBasket(basketItem[i],itemArray[i],basket.items[i]);
				}
				else
				{
					basketItem[i].innerHTML = "";
				}
			}
			}
showItems();
function showItemBasket(container,item,quantity)
		 {
		 
			container.innerHTML = "<div><p style='float: left; clear: left'><img src="+item.imageSrc+" height='350px' width='350px'></p></div>"+
									 "<div><br><br><h2>"+item.description[0]+"</h2>" + 
									 "<h1 style='color:red'> $ "+item.price+"</h1> "+
									 "<ul >"+
									 "<li>"+item.description[1]+"</li>"+
									 "<li>"+item.description[2]+"</li>"+
									 "<li>"+item.description[3]+"</li>"+
									 "<li>"+item.description[4]+"</li></ul><br><br>"+
									 "<button id= w" +item.idNum+" >Remove</button>"+ "<input type='text' id= a" +item.idNum+"  style='width :20px'>  </div><hr>";
									 
			 
		
			document.getElementById( "w"+item.idNum ).addEventListener("click",function(){removeFromBasket(basket,item.idNum,0);console.log("working"+item.idNum)});
			
			document.getElementById(  "a" +item.idNum ).value = quantity;//.addEventListener("click",function(){console.log("working1"+item.idNum)});
}
function removeFromBasket(basket,id,price){
					
	basket.items[id]--;

	calcTotal(basket);

	basketA.innerHTML = basket.total;
	basketA1.innerHTML = basket.total;
	
	localStorage.basketLS = JSON.stringify(basket);
	showItems();
}//add to basket

//check out
function ckeckOutFunction()
{
	if(basket.total>0)
	{
		if(isLoggedIn=="true")
		{
			
			if(checkDC.checked  == true)
			{
				if(discountTB.value.toUpperCase() == discountArray[1] )
				{
					totalWD = basket.total - basket.total*(0.1);
					alert(totalWD);
					
				}
			}
			var bill = "Thanks for purshising \n"
						+"Your billed a total of : €" + basket.total
						+"\nYour items are ready for collection";
			alert(bill);
			basket.total = 0;
			basket.items = [0,0,0,0,0,0];
			basket.itemsID = new Array();
			basket.itemsPrice = new Array();
			localStorage.basketLS = JSON.stringify(basket);
			location.replace("index.html");
			
			
		}else
		{
			alert("please Log In or Register please");
			location.replace("RegisterLogIn.html");
		}
	}else
	{
		alert("Basket Empty please Select some Items");
		
	}
}
checkOutButton.addEventListener("click",ckeckOutFunction);
//checkOut