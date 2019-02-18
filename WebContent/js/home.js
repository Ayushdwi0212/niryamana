//Setup for display of User Profile logo
var user = true;//Replace with firebase.auth().currentUser during actual implementation

var profileIcon = document.getElementById("userProfile");
if (user) {
	profileIcon.style.display = "block";
}
else {
	profileIcon.style.display = "none";
}


//Functions for opening and closing sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "13.5em";
    document.getElementById("main").style.marginLeft = "13.5em";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}