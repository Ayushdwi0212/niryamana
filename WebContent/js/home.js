var user = firebase.auth().currentUser;

var profileIcon = document.getElementById("userProfile");
if (user) {
	profileIcon.style.display = "block";
}
else {
	profileIcon.style.display = "none";
}

new Vue({
    el: '#log',
      data: {
        email: '',
        password: '',
        displayName: null,
        newPassword: null,
        authUser: null,
    },

    methods: {
        signIn () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
        },

        signOut () {
            firebase.auth().signOut()
        },
    },
})

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