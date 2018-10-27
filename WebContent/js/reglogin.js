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
        signIn () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert('🤕' + error.message))
        },

        signOut () {
            firebase.auth().signOut()
        },
    },
})