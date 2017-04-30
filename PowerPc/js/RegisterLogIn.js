//register
var regFirstName = document.getElementById("regFirstName");
var regSurname = document.getElementById("regSurname");
var regEmail = document.getElementById("regEmail");
var regPasswordFirst = document.getElementById("regPasswordFirst");
var regPasswordConfirm = document.getElementById("regPasswordConfirm");
var regPhoneNumber = document.getElementById("regPhoneNumber");
var registerButton = document.getElementById("registerButton");
var firstNameAT = document.getElementById("firstNameAT");
var surenameameAT = document.getElementById("surenameameAT");
var emailAT = document.getElementById("emailAT");
var passLenghtActionText = document.getElementById("passLenghtActionText"); 
var passMatchActionText = document.getElementById("passMatchActionText"); 
var phoneNumberAT = document.getElementById("phoneNumberAT");

regFirstName.addEventListener("blur",checkFirstName);
regSurname.addEventListener("blur",checkLastName);
regEmail.addEventListener("blur",checkEmail);
regPasswordFirst.addEventListener("keyup",checkPaswordLength);
regPasswordConfirm.addEventListener("keyup",checkPaswordMatch);
regPhoneNumber.addEventListener("keyup",checkCardNumber);//
registerButton.addEventListener("click",register);

var allCheck = [false,false,false,false,false];
//--------------------------------------------------------------
//
function checkFirstName()
{
	if(regFirstName.value=="")
	{
		firstNameAT.innerHTML = "<br><span style='color:red'>Please fill this<span>";
		allCheck[0]=false;
	}else
	{
			firstNameAT.innerHTML = "<br><span style='color:green'>Good<span>";
			allCheck[0]=true;
	}
	
}
function checkLastName()
{
	if(regSurname.value=="")
	{
		surenameameAT.innerHTML = "<br><span style='color:red'>Please fill this<span>";
		allCheck[1]=false;
	}else
	{
			surenameameAT.innerHTML = "<br><span style='color:green'>Good<span>";
			allCheck[1]=true;
	}
}

function checkEmail()
{
	var str = regEmail.value;
	var check1 = str.includes("@");
	var check2 = str.endsWith(".com");
	var check3 = true;
	var char0 = str.charAt(0);
	console.log(char0);
	if(char0=='@')
	{
		check3 = false;
	}
	console.log(check1);
	console.log(check2);
	console.log(check3);
	if(check1&&check2&&check3)
	{
		emailAT.innerHTML ="<br><span style='color:green'>Good<span>";
		allCheck[2]=true;
	}else
	{
		emailAT.innerHTML ="<br><span style='color:red'>Please enter a Email<span>";
		allCheck[2]=false;
	}
}

function checkPaswordLength()
{
	var str = regPasswordFirst.value;
	console.log(str.length);
	if(str.length>=6)
	{
		passLenghtActionText.innerHTML = "<span style='color:green'>Good<span>";
	}

	//console.log("key down pas lenght");
}

function checkPaswordMatch()
{
	var pasOne = regPasswordFirst.value;
	var pasTwo = regPasswordConfirm .value;
	
	if(pasTwo.length>=6&&pasOne==pasTwo)
	{
		passMatchActionText.innerHTML = "<span style='color:green'>Good<span>";
		allCheck[3]=true;
	}else
	{
		passMatchActionText.innerHTML = "<span style='color:red'>Passsword not match<span>";
		allCheck[3]=false;
	}
	
}

function checkCardNumber()
{
	var pN = regPhoneNumber.value;
	if(isNaN(pN))
	{
            
		phoneNumberAT.innerHTML= "<br><span style='color:red'>Please enter a valid card number<span>";
		allCheck[4]=false;
	}
	else
	{
            if(pN.length==16)
            {
		allCheck[4]=true;
                phoneNumberAT.innerHTML="<br><span style='color:green'>Good<span>";
            }
            else
            {
                phoneNumberAT.innerHTML="<br><span style='color:red'>Please enter a valid card number<span>"
            }
	}	
}

function register()
{
    if(allCheck[0]&&allCheck[1]&&allCheck[2]&&allCheck[3]&&allCheck[4])
    {
            console.log("register click");

            loadMainUserArray();
            addNewUser(regFirstName.value,regSurname.value, regEmail.value,regPasswordConfirm .value,regPhoneNumber.value);//*****
            SeasonData.isLogedIn = true;
            SeasonData.userName = regFirstName.value;
            SeasonData.pos = mainUserArray.length -1;
            saveMainUserArray();
            loginAction();
            location.replace("index.html");
    }else
    {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkPaswordLength();
        checkPaswordMatch();
        checkCardNumber();
    }
}
//register

//login*******************************************************************************
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginButton = document.getElementById("loginButton");
var loginEmailAT = document.getElementById("loginEmailAT");
var loginPasswordAT = document.getElementById("loginPasswordAT");
var loginFail = document.getElementById("loginFail");


loginEmail.addEventListener("blur",checkEmailRegister);
loginButton.addEventListener("click",tryLogin);


function tryLogin()
{
    var loginEmailStr = loginEmail.value.toLowerCase();
    var loginPasswordStr = loginPassword.value;
    console.log(loginEmailStr);
    console.log(loginPasswordStr);

    loadMainUserArray();

    var pos = -1;
    var found = false;
    while(pos < mainUserArray.length -1 && found == false)
    {
            if(mainUserArray[++pos].email.toLowerCase() == loginEmailStr)
            {
                    found = true;
            }
    }

    if(found)
    {
            if(mainUserArray[pos].password == loginPasswordStr )//login
            {
                    console.log("susssss1");
                    SeasonData =  JSON.parse(localStorage.seasonLS);
                    SeasonData.isLogedIn = true;
                    alert(mainUserArray[pos].firstName);
                    SeasonData.userName = mainUserArray[pos].firstName;
                    SeasonData.pos = pos;
                    saveMainUserArray();
                    loginAction();
                    localStorage.seasonLS = JSON.stringify(SeasonData);
                    location.replace("index.html");

            }else
            {
                loginFail.innerHTML  = "<br><span style='color:red'>Email or password incorrect.<span><br>";
            }
    }else
    {
        loginFail.innerHTML = "<br><span style='color:red'>Email or password incorrect.<span><br>";
            
    }

}//tryLogin

function checkEmailRegister()
{
	var str = loginEmail.value;
	var check1 = str.includes("@");
	var check2 = str.endsWith(".com");
	var check3 = true;
	var char0 = str.charAt(0);

	if(char0=='@')
	{
		check3 = false;
	}
	if(check1&&check2&&check3)
	{
		loginEmailAT.innerHTML ="";
	}else
	{
		loginEmailAT.innerHTML ="<br>Please enter a valid email";
	}
}
//login*********************************************************************************

//common functions*******************************************************************
//load and save to local
function saveMainUserArray()
{
	localStorage.mainArrayLS = JSON.stringify(mainUserArray);
	localStorage.seasonLS = JSON.stringify(SeasonData);
}//save

function loadMainUserArray()
{
	mainUserArray = JSON.parse(localStorage.mainArrayLS);
}

function addNewUser(firstP, lastP, emailP, passwordP, cardNumberP)
{
	mainUserArray.push(new User( firstP,lastP,  emailP, passwordP, cardNumberP));
}
function checkIfLogin()
{
	var isLogin = localStorage.isLoginLS;
}
function loginAction()
{
	localStorage.isLoggedInLS = "true";
	
}
function readUserOne()
{
	userOne = JSON.parse(localStorage.userOneLS);
}
function setUserOne(nameP, emailP,posArrayP)
{
	var userT = {name: nameP,email :emailP, posArray: posArrayP };
	localStorage.userOneLS = JSON.stringify(userT);
}
	
//slideshow
var myIndex = 0;
		carousel();

		function carousel() 
	{
		var i;
		var x = document.getElementsByClassName("mySlides1");
		var randomNum = Math.floor(Math.random() * x.length);
    
			for (i = 0; i < x.length; i++) 
			{
			x[i].style.display = "none";  
			}
    
		myIndex++;
		if (myIndex > x.length) {myIndex = 0}    
		x[myIndex = randomNum].style.display = "block";  
		setTimeout(carousel, 2000); // Change image every 2 seconds
	}

//common functions************