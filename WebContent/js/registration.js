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