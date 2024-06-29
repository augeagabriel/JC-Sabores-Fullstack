new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'Asado', description: 'Delicioso asado argentino', price: 15.00, image: 'img/plato_principal/300x300/asado-300x300.png' },
            { id: 2, name: 'Hamburguesa XXL', description: 'Hamburguesa grande y jugosa', price: 12.00, image: 'img/plato_principal/300x300/burguer-300x300.png' },
            { id: 3, name: 'Matambre a la pizza', description: 'Matambre con salsa de pizza', price: 14.00, image: 'img/plato_principal/300x300/matambre-a-la-pizza-300x300.png' },
            { id: 4, name: 'Teokkbokki', description: 'Plato coreano picante', price: 10.00, image: 'img/plato_principal/300x300/teokkbokki-300x300.png' },
            { id: 5, name: 'Papas fritas', description: 'Papas fritas crujientes', price: 5.00, image: 'img/guarniciones/300x300/papas-bacon.png' },
            { id: 6, name: 'Babatas fritas', description: 'Babatas fritas dulces', price: 5.00, image: 'img/guarniciones/300x300/Batatas-fritas.png' },
            { id: 7, name: 'Lemon Pie', description: 'Tarta de limón', price: 6.00, image: '/img/postres/300x300/lemon-pie-300x300.png' },
            { id: 8, name: 'Cheesecake', description: 'Pastel de queso', price: 6.00, image: 'img/postres/300x300/cheesecake-300x300.png' },
            { id: 9, name: 'Flan con crema', description: 'Flan con crema y caramelo', price: 5.00, image: 'img/postres/300x300/flan-300x300.png' },
            { id: 10, name: 'Gaseosa', description: 'Bebida gaseosa', price: 2.00, image: 'img/bebidas/300x300/gaseosa-300x300.png' },
            { id: 11, name: 'Jugo', description: 'Jugo natural', price: 3.00, image: 'img/bebidas/300x300/jugo-300x300.png' },
            { id: 12, name: 'Agua', description: 'Agua mineral', price: 1.00, image: 'img/bebidas/300x300/agua-300x300.png' }
        ],
                cart: [],
                deliveryMethod: 'local',
                deliveryAddress: '',
                deliveryBell: '',
                deliveryExtras: '',
                paymentMethod: 'cash',
                cardNumber: '',
                cardHolderName: '',
                cardExpiryDate: '',
                cardCVC: '',
                orderNumber: ''
            },
            computed: {
                totalPrice() {
                    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
                }
            },
            methods: {
                addToCart(product) {
                    const cartItem = this.cart.find(item => item.product.id === product.id);
                    if (cartItem) {
                        cartItem.quantity++;
                    } else {
                        this.cart.push({ product, quantity: 1, comment: '' });
                    }
                },
                removeFromCart(productId) {
                    this.cart = this.cart.filter(item => item.product.id !== productId);
                },
                generateOrderNumber() {
                    return 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
                },
                checkout() {
                    if (this.validateForm()) {
                        const orderDetails = {
                            items: this.cart,
                            total: this.totalPrice,
                            deliveryMethod: this.deliveryMethod,
                            deliveryAddress: this.deliveryAddress,
                            deliveryBell: this.deliveryBell,
                            deliveryExtras: this.deliveryExtras,
                            paymentMethod: this.paymentMethod,
                            cardDetails: {
                                cardNumber: this.cardNumber,
                                cardHolderName: this.cardHolderName,
                                cardExpiryDate: this.cardExpiryDate,
                                cardCVC: this.cardCVC
                            }
                        };
                        console.log('Order Details:', orderDetails);
                        this.orderNumber = this.generateOrderNumber();
                        alert('Compra realizada con éxito. Tu número de pedido es ' + this.orderNumber);
                    }
                },
                validateForm() {
                    if (this.deliveryMethod === 'delivery' && (!this.deliveryAddress || !this.deliveryBell || !this.deliveryExtras)) {
                        alert('Por favor, complete todos los campos de entrega.');
                        return false;
                    }
                    if (this.paymentMethod === 'card' && (!this.cardNumber || !this.cardHolderName || !this.cardExpiryDate || !this.cardCVC)) {
                        alert('Por favor, complete todos los campos de la tarjeta.');
                        return false;
                    }
                    return true;
                },
                resetOrder() {
                    this.cart = [];
                    this.deliveryMethod = 'local';
                    this.deliveryAddress = '';
                    this.deliveryBell = '';
                    this.deliveryExtras = '';
                    this.paymentMethod = 'cash';
                    this.cardNumber = '';
                    this.cardHolderName = '';
                    this.cardExpiryDate = '';
                    this.cardCVC = '';
                    this.orderNumber = '';
                }
            },
            filters: {
                currency(value) {
                    return `$${value.toFixed(2)}`;
                }
            }
        });
        