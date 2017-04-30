var isData, SeasonData;
var isLoggedIn;
var itemArray = new Array();

var mainUserArray = new Array();

var discountArray = ["PC3627458","DL02082013"] 
var basket = {itemsID : [],items :[0,0,0,0,0,0],itemsPrice: [],total : 0.0};
//main runing code
if(localStorage.getItem("isDataLS") === null)
{
	isLoggedIn = "false";
	isData = true;
	//items
	localStorage.isLoggedInLS = isLoggedIn;
	localStorage.isDataLS = isData;
	loadItems();
	//user
	addNewUser("guestName","guestSurena","guest@email.com","123456","1234123412341234");
	localStorage.mainArrayLS = JSON.stringify(mainUserArray);
	SeasonData = {isLogedIn : "false",userPosition : -1,userName : "noLogedIn"};
	localStorage.seasonLS = JSON.stringify(SeasonData);
	//baseket
	localStorage.basketLS = JSON.stringify(basket);
	//output to consle
	
}else
{
    
	isLoggedIn = localStorage.isLoggedInLS;
	isData = localStorage.isDataLS;
	SeasonData = JSON.parse(localStorage.seasonLS);
	mainUserArray = JSON.parse(localStorage.mainArrayLS);
	itemArray = JSON.parse(localStorage.itemArrayLS);
	basket = JSON.parse(localStorage.basketLS);
	
}
//main runing code

//item object
function Item(idNum,price, image, stock, title,description2,description3,description4,description5)
{
	this.idNum = idNum,
	this.price = price,
	this.imageSrc = image,
	this.stock = stock,
	this.description = [title,description2,description3,description4,description5]
}
	
	Item.prototype.showItem = function(container,item)
 {
 
	container.innerHTML = "<div><p style='float: left; clear: left'><img src="+item.imageSrc+" height='350px' width='350px'></p></div>"+
							 "<div><br><br><h2>"+item.description[0]+"</h2>" + 
							 "<h1 style='color:red'> $ "+item.price+"</h1> "+
							 "<ul >"+
							 "<li>"+item.description[1]+"</li>"+
							 "<li>"+item.description[2]+"</li>"+
							 "<li>"+item.description[3]+"</li>"+
							 "<li>"+item.description[4]+"</li></ul><br><br>"+
							 "<button id= w" +item.idNum+" >Add To Basquet</button>"+ "<hr></div>";
							 
	 

	document.getElementById( "w"+item.idNum ).addEventListener("click",function(){console.log("working"+item.idNum)});
}
function loadItems()
{
    itemArray[0] = new Item(0,1349.99,"images2/HpOne.jpg",5,"HP Pavilion x360 13-u062sa 13.3 2 in 1","Achieve: Fast computing with the latest tech","Windows 10","Intel Core i5-6200U Processor","RAM: 8 GB / Storage: 128 GB SSD");
    itemArray[1] = new Item(1,1349.99,"images2/HpTwo.jpg",5,"HP ENVY x360 15-aq055na 15.6 2 in 1 ","Create: Run the most demanding software at its best","Windows 10","Intel Core i7-6560U processor","RAM: 8 GB / Storage: 1 TB HDD & 128 GB SSD");
    itemArray[2] = new Item(2,1699.99,"images2/LenovoOne.jpg",5,"LENOVO YOGA 910 13.9 4K 2 in 1","Windows 10","Intel Core i5-7200U Processor","RAM: 8 GB / Storage: 256 GB SSD","Laptop and tablet functionality");
    itemArray[3] = new Item(3,749.99,"images2/LenovoTwo.jpeg",5,"LENOVO YOGA Book 10.1 2 in 1 ","Create: Run the most demanding software at its best","Windows 10","Intel Atom x5-Z8500 Processor","RAM: 4 GB / Storage: 64 GB eMMC");
    itemArray[4] = new Item(4,1499.00,"images2/DellOne.jpg",5,"DELL XPS 13 Laptop","Create: Run the most demanding software at its best","Windows 10","Intel Core i5-7200U Processor","RAM: 8 GB / Storage: 256 GB SSD");
    itemArray[5] = new Item(5,1499.00,"images2/DellTwo.jpg",5,"DELL Inspiron 15 7000 15.6 Laptop ","Windows 10","Intel Core i7-7500U Processor","RAM: 16 GB / Storage: 256 GB SSD","Graphics: NVIDIA GeForce 940MX");
    localStorage.itemArrayLS = JSON.stringify(itemArray);
}

//user object
function User(firstP,lastP,  emailP, passwordP, cardNumberP)
{
	this.firstName = firstP;
	this.lastName = lastP; 
	this.email = emailP; 
	this.password = passwordP; 
	this.cardNumber = cardNumberP;
}//user

function addNewUser(firstP, lastP, emailP, passwordP, cardNumberP)
{
	mainUserArray.push(new User( firstP,lastP,  emailP, passwordP, cardNumberP));
}



