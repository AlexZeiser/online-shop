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
                name: "Beispiel Produkt",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 9,
                name: "Beispiel Produkt2",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 10,
                name: "Beispiel Produkt3",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 11,
                name: "Beispiel Produkt4",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 12,
                name: "Beispiel Produkt5",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 13,
                name: "Beispiel Produkt6",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 14,
                name: "Beispiel Produkt7",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 15,
                name: "Beispiel Produkt8",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 16,
                name: "Beispiel Produkt9",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 17,
                name: "Beispiel Produkt10",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 18,
                name: "Beispiel Produkt11",
                price: 0.00,
                weight: "0 kg",
                img: "/assets/img/default-fruits.jpg"
            },
            {
                id: 19,
                name: "Beispiel Produkt12",
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

    addItem = (amount, name, price, img) => {
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
            });
        }

        this.setState({ items: currentItems }, () => {
            const addButton = document.getElementById('addButton');
            if (addButton) {
                addButton.classList.remove('d-none');
            }

            this.flyItem(img);
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
                const shoppingCart = document.getElementById('shopping-cart')
                if (currentItems.length < 1) {
                    this.setState({ cartVisible: false });
                    addButton.classList.add('d-none');
                    shoppingCart.classList.add('d-none');
                } else {
                    addButton.classList.remove('d-none');
                    shoppingCart.classList.remove('d-none');
                }
            });
        }
    }

    flyItem = (productImage) => {
        const flyingItem = document.createElement('img');
        flyingItem.src = productImage;
        flyingItem.className = 'fly-effect';
        document.body.appendChild(flyingItem);

        const rect = flyingItem.getBoundingClientRect();
        const x = window.innerWidth - rect.width - 40;
        const y = 10;

        flyingItem.style.transition = 'transform 1s ease, opacity 1s ease';
        flyingItem.style.transform = `translate(${x - rect.left}px, ${y - rect.top}px)`;

        flyingItem.addEventListener('transitionend', () => {
            flyingItem.classList.add('hide');
            setTimeout(() => flyingItem.remove(), 600);
        });
    }

    clearCart = () => {
        const addButton = document.getElementById('addButton');
        const shoppingCart = document.getElementById('shopping-cart');

        this.setState({ items: [] });
        this.setState({ cartVisible: false });

        shoppingCart.classList.add('d-none');
        addButton.classList.add('d-none');
    }

    pay = () => {
        const payMessage = document.getElementById('payMessage');

        this.clearCart();

        payMessage.classList.remove('d-none');
        setTimeout(() => {
            payMessage.classList.add('d-none');
        }, 3000);
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
        return (
            <Router>
                <React.Fragment>
                    <Navbar
                        toggleCartVisibility={this.toggleCartVisibility}
                        cartVisible={this.state.cartVisible}
                        totalAmount={this.getTotalAmount()}
                        totalPrice={this.getTotalPrice()}
                    />

                    <Routes>
                        <Route path="/" element={
                            <div className='main-container'>
                                <div className='product-container'>
                                    {this.state.products.map(product => (
                                        <Product
                                            key={product.id}
                                            onAdd={() => this.addItem(1, product.name, product.price, product.img)}
                                            title={product.name}
                                            price={product.price}
                                            img={product.img}
                                            weight={product.weight}
                                        />
                                    ))}
                                </div>
                                {this.state.cartVisible && <ShoppingCart items={this.state.items} onRemoveItem={this.removeItem} onAddItem={this.addItem} pay={this.pay} clearCart={this.clearCart} />}
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