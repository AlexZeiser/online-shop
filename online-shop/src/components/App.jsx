import React, { Component } from 'react';
import Product from './product';
import Navbar from './navbar';
import Footer from './footer';
import ShoppingCart from './shoping-cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Imprint from './imprint';

class App extends Component {
    state = {
        items: [],
        cartVisible: false,
        searchTerm: '',
        products: [
            {
                id: 1,
                name: "Äpfel",
                price: 2.49,
                weight: "1 kg",
                img: "/assets/img/apples.jpg"
            },
            {
                id: 2,
                name: "Kirschen",
                price: 3.99,
                weight: "100 g",
                img: "/assets/img/cherrys.jpg"
            },
            {
                id: 3,
                name: "Pfirsiche",
                price: 2.22,
                weight: "500 g",
                img: "/assets/img/peach.jpg"
            },
            {
                id: 4,
                name: "Erdbeeren",
                price: 2.79,
                weight: "300 g",
                img: "/assets/img/strawberries.jpg"
            },
            {
                id: 5,
                name: "Kiwi",
                price: 0.49,
                weight: "1 Stk",
                img: "/assets/img/kiwi.jpg"
            },
            {
                id: 6,
                name: "Birnen",
                price: 1.95,
                weight: "1 kg",
                img: "/assets/img/birnen.jpg"
            },
            {
                id: 7,
                name: "Himbeeren",
                price: 1.35,
                weight: "250 g",
                img: "/assets/img/raspberries.jpg"
            },
            {
                id: 8,
                name: "Produkt",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 9,
                name: "Produkt2",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 10,
                name: "Produkt3",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 11,
                name: "Produkt4",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 12,
                name: "Produkt5",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 13,
                name: "Produkt6",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 14,
                name: "Produkt7",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 15,
                name: "Produkt8",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 16,
                name: "Produkt9",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 17,
                name: "Produkt10",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 18,
                name: "Produkt11",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 19,
                name: "Produkt12",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 20,
                name: "Produkt13",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 21,
                name: "Produkt14",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 22,
                name: "Produkt15",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 23,
                name: "Produkt16",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 24,
                name: "Produkt17",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 25,
                name: "Produkt18",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 26,
                name: "Produkt19",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 27,
                name: "Produkt20",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            }
        ]
    }

    addItem = (amount, name, price, img, event) => {
        let currentItems = [...this.state.items];
        let existingItem = currentItems.find(item => item.name === name);

        if (existingItem) {
            existingItem.amount += amount;
            existingItem.totalPrice = (existingItem.amount * existingItem.price);
        } else {
            currentItems.push({
                amount,
                name,
                price,
                totalPrice: (amount * price),
                img
            });
        }

        const clickX = event.clientX;
        const clickY = event.clientY;

        this.setState({ items: currentItems }, () => {
            const addButton = document.getElementById('addButton');
            if (addButton) {
                addButton.classList.remove('hidden');
                addButton.classList.add('visible');
            }

            this.flyItem(img, clickX, clickY);
        });
    }

    removeItem = (name) => {
        let currentItems = [...this.state.items];
        let existingItem = currentItems.find(item => item.name === name);

        if (existingItem) {
            if (existingItem.amount > 1) {
                existingItem.amount -= 1;
                existingItem.totalPrice = (existingItem.amount * existingItem.price);
            } else {
                currentItems = currentItems.filter(item => item.name !== name);
            }

            this.setState({ items: currentItems }, () => {
                const addButton = document.getElementById('addButton');
                const shoppingCart = document.getElementById('shopping-cart');

                if (currentItems.length < 1) {
                    this.setState({ cartVisible: false });
                    addButton.classList.remove('visible');
                    addButton.classList.add('hidden');
                    shoppingCart.classList.remove('visible');
                    shoppingCart.classList.add('hidden');
                } else {
                    addButton.classList.remove('hidden');
                    addButton.classList.add('visible');
                    shoppingCart.classList.remove('hidden');
                    shoppingCart.classList.add('visible');
                }
            });
        }
    }


    flyItem = (productImage, startX, startY) => {
        const flyingItem = document.createElement('img');
        flyingItem.src = productImage;
        flyingItem.className = 'fly-effect';
        document.body.appendChild(flyingItem);

        flyingItem.style.position = 'fixed';
        flyingItem.style.borderRadius = '12px';
        flyingItem.style.left = startX + 'px';
        flyingItem.style.top = startY + 'px';

        const rect = flyingItem.getBoundingClientRect();
        const x = window.innerWidth - rect.width - 20;
        const y = 40;

        flyingItem.style.transition = 'transform 1s ease, opacity 1s ease';
        flyingItem.style.transform = `translate(${x - startX}px, -${startY - y}px)`;

        flyingItem.addEventListener('transitionend', () => {
            flyingItem.classList.add('hide');
            setTimeout(() => flyingItem.remove(), 600);
        });
    }


    clearCart = () => {
        const addButton = document.getElementById('addButton');
        const shoppingCart = document.getElementById('shopping-cart');

        this.setState({ items: [], cartVisible: false });

        shoppingCart.classList.remove('visible');
        shoppingCart.classList.add('hidden');

        addButton.classList.remove('visible');
        addButton.classList.add('hidden');
    }

    pay = () => {
        const payMessage = document.getElementById('payMessage');

        this.clearCart();
        payMessage.classList.remove('hidden');
        payMessage.classList.add('visible');

        setTimeout(() => {
            payMessage.classList.remove('visible');
            payMessage.classList.add('hidden');
        }, 3000);
    }

    handleSearch = (event) => {
        const value = event.target.value.replace(',', '.');
        this.setState({ searchTerm: value });
    }

    toggleCartVisibility = () => {
        this.setState({ cartVisible: !this.state.cartVisible });
    }

    getTotalAmount = () => {
        return this.state.items.reduce((total, item) => total + item.amount, 0);
    }

    getTotalPrice = () => {
        return this.state.items.reduce((total, item) => total + parseFloat(item.totalPrice), 0).toFixed(2);
    }

    render() {
        const filteredProducts = this.state.products.filter(product =>
            product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            product.price.toString().includes(this.state.searchTerm)
        );
        return (
            <Router>
                <React.Fragment>
                    <Navbar
                        toggleCartVisibility={this.toggleCartVisibility}
                        cartVisible={this.state.cartVisible}
                        totalAmount={this.getTotalAmount()}
                        totalPrice={this.getTotalPrice()}
                    />

                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Finden Sie Ihr Produkt"
                            value={this.state.searchTerm}
                            onChange={this.handleSearch}
                        />
                    </div>

                    <Routes>
                        <Route path="/" element={
                            <div className='main-container'>
                                <div className='product-container'>
                                    {filteredProducts.map(product => (
                                        <Product
                                            key={product.id}
                                            onAdd={(event) => this.addItem(1, product.name, product.price, product.img, event)}
                                            title={product.name}
                                            price={product.price}
                                            img={product.img}
                                            weight={product.weight}
                                        />
                                    ))}
                                </div>
                                {this.state.cartVisible &&
                                    <ShoppingCart
                                        items={this.state.items}
                                        onRemoveItem={this.removeItem}
                                        onAddItem={(amount, name, price, img, event) => this.addItem(amount, name, price, img, event)}

                                        pay={this.pay}
                                        clearCart={this.clearCart} />}
                            </div>
                        } />

                        <Route path="/impressum" element={<Imprint />} />
                    </Routes>

                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;