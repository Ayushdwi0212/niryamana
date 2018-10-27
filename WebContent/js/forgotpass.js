new Vue({
    el: '#log',
      data: {
        email: '',
        password: '',
        displayName: null,
        newPassword: null,
        authUser: null
    },

    methods: {
        var auth = firebase.auth();
        var emailAddress = this.email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {}).catch(function(error) {});
    },
})