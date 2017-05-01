var basketA = document.getElementById("basketAmount");
var basketA1 = document.getElementById("basketAmount1");
var itemsCont = document.getElementById("basketItem2");
var checkOutButton = document.getElementById("checkOut");
var checkDC =  document.getElementById("checkDC");
var discountTB = document.getElementById("discountCodeTB");
var basketItem = [document.getElementById("item0"),document.getElementById("item1"),document.getElementById("item2"),document.getElementById("item3"),document.getElementById("item4"),document.getElementById("item5")];

basketA1.innerHTML = basket.total;
showItems();
checkOutButton.addEventListener("click",ckeckOutFunction);
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

function showItemBasket(container,item,quantity)
{
    container.innerHTML = "<div><p style='float: left; clear: left'><img src="+item.imageSrc+" height='250px' width='250'></p></div>"+
                                                     "<div  ><br><br><h2>"+item.description[0]+"</h2>" + 
                                                     "<h1 style='color:red'> $ "+item.price+"</h1> "+
                                                     "<ul>"+
                                                     " <li>"+item.description[1]+"</li>"+
                                                     " <li>"+item.description[2]+"</li>"+
                                                     " <li>"+item.description[3]+"</li>"+
                                                     " <li>"+item.description[4]+"</li></ul><br><br>"+
                                                     "<button id= 'w" +item.idNum+ "' style='float:right' >Remove</button>"+ "<input type='text' id= a" +item.idNum+"  style='width :20px;float:right'> <hr> </div>";
    document.getElementById( "w"+item.idNum ).addEventListener("click",function(){removeFromBasket(basket,item.idNum,0)});
    document.getElementById(  "a" +item.idNum ).value = quantity;
}

function removeFromBasket(basket,id)
{
	basket.items[id]--;
	calcTotal(basket);
	basketA.innerHTML = basket.total;
	basketA1.innerHTML = basket.total;
	localStorage.basketLS = JSON.stringify(basket);
	showItems();
}//remove basket

//check out
function ckeckOutFunction()
{
   
	if(basket.total>0)
	{
		if(isLoggedIn=="true")
		{
			
			if(checkDC.checked  == true)
                       {   var  discCodePosition = checkDiscCode(discountArray,discountTB.value.toUpperCase());
                            
                            if(discCodePosition>=0)
                            {
                                discountArray.splice(discCodePosition, 1);
                                localStorage.discountArrayLS = JSON.stringify(discountArray);
                                var bill = "Thanks for purshising \n Congratulations you have a discount of 10%\n"
						+"Your billed a total of : $" + (basket.total -(basket.total*(0.1)) )
						+"\nYour items are ready for collection";
                                alert(bill);
                                basket.total = 0;
                                basket.items = [0,0,0,0,0,0];
                                basket.itemsID = new Array();
                                basket.itemsPrice = new Array();
                                localStorage.basketLS = JSON.stringify(basket);
                                location.replace("index.html");
                            }
                            else
                            {
                                alert("Invalid Discoun Code please TRy again.");
                            }
			}
                        else
                        {
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
                        }
			
		}else
		{
                    alert("please Log In or Register");
                    location.replace("RegisterLogIn.html");
		}
	}else
	{
            alert("Basket Empty please Select some Items");
		
	}
}//checkOut

function checkDiscCode(discArray,discCode)
{
    var posFound = -1;
    var pos = -1;
    var found = false;
    while(pos < discArray.length -1 && found == false)
    {
            if(discArray[++pos] === discCode)
            {
                found = true;
            }
    }

    if(found)
    {
        posFound = pos;
    }
    return posFound;
}