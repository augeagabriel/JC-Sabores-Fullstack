new Vue({
    el: '#app',
    data: {
        isAuthenticated: false,
        registerData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            age: null
        },
        loginData: {
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            // Registro
            axios.post('/api/register', this.registerData)
                .then(response => {
                    alert('Registration successful! Please log in.');
                    this.registerData = {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        age: null
                    };
                })
                .catch(error => {
                    console.error('Error during registration:', error);
                });
        },
        login() {
            // Login 
            axios.post('/api/login', this.loginData)
                .then(response => {
                    alert('Login successful!');
                    this.isAuthenticated = true;
                })
                .catch(error => {
                    console.error('Error during login:', error);
                });
        }
    }
});
