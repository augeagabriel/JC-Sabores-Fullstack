document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
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
                const { firstName, lastName, email, password, age } = this.registerData;

                // Validación de la contraseña
                const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
                if (!passwordPattern.test(password)) {
                    alert('La contraseña debe tener entre 6 y 12 caracteres, al menos una letra mayúscula, una letra minúscula y un número.');
                    return;
                }

                // Validación de la edad
                if (age < 18) {
                    alert('Debes tener al menos 18 años para registrarte.');
                    return;
                }

                fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ firstName, lastName, email, password, age })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Registro exitoso');
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
            },
            login() {
                const { email, password } = this.loginData;

                fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.auth) {
                        this.token = data.token;
                        this.isAuthenticated = true;
                        alert('Login exitoso');
                    } else {
                        alert('Login fallido');
                    }
                })
                .catch(error => console.error('Error:', error));
            }
        }
    });
});
