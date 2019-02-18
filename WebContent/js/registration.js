var regExpEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
var regExpPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var email = document.getElementById("email");
var pass = document.getElementsByTagName("password");
var passConf = document.reg.passwordConfirm.value;

email.addEventListener("invalid", function(event) {
    if(email.validity.patternMismatch) {
        email.setCustomValidity("Your e-mail address is invalid. Please enter a valid e-mail address.");
    }
    else {
        email.setCustomValidity("");
    }
})

new Vue({
    el: '#reg',
    data: {
        email: '',
        password: '',
        authUser: null
    },

    methods: {
        register () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
        },
    },
})