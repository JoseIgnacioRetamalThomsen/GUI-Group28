var loginOrLogout = document.getElementById("loginOrLogout");
var registerOrName = document.getElementById("registerOrName");

//main runing code
if(isLoggedIn =="false")
{
	registerLink();
	logInLink();
 }else
 {
	userNameLink();
	logoutButton();
 }
//main runing code

function logoutButton()
{
    var str = "Logout";
    var link = "<a href='index.html' id ='topLinkLogout'>Logout</a>"

    loginOrLogout.innerHTML = link;
    (document.getElementById("topLinkLogout")).addEventListener("click",logoutAction);
}

function userNameLink()
{
    var str = SeasonData.userName;
    var link = "<a href='ChangeDetails.html' id ='topLink'>"+ str+"</a>";
    registerOrName.innerHTML = link;
}

function logInLink()
{
    var str = "Login";
    var link = "<a href='registerLogIn.html' id ='topLink'>Login</a>"
    loginOrLogout.innerHTML = link;
}
function registerLink()
{
	var str = "Register";
	var link = "<a href='registerLogIn.html' id ='topLink'>Register</a>"
	registerOrName.innerHTML = link;
}

function checkIfLogin()
{
	isLoggedIn = SeasonData.isLoggedIn;
}
function loginAction()
{
	localStorage.isLoginLS = "true";
}
function logoutAction()
{
    localStorage.isLoggedInLS = "false";
    localStorage.seasonLS = JSON.stringify(SeasonData);s
}