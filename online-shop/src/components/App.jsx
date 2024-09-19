import React, { Component } from 'react';
import Product from './product';
import Navbar from './navbar';
import ShoppingCart from './shoping-cart';

class App extends Component {
    state = {
        items: [],
        cartVisible: false,
    }

    addItem = (amount, name, price) => {
        let currentItems = [...this.state.items];
        let existingItem = currentItems.find(item => item.name === name);

        if (existingItem) {
            existingItem.amount += amount;
            existingItem.totalPrice = (existingItem.amount * price).toFixed(2);

        } else {
            currentItems.push(
                {
                    amount,
                    name,
                    price,
                    totalPrice: (amount * price).toFixed(2),
                }
            );
        }

        this.setState({ items: currentItems }, () => {        
            const addButton = document.getElementById('addButton');
            if (addButton) {
                addButton.classList.remove('d-none');
            }
        });
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
        return <React.Fragment>
            <Navbar
                toggleCartVisibility={this.toggleCartVisibility}
                cartVisible={this.state.cartVisible}
                totalAmount={this.getTotalAmount()}
                totalPrice={this.getTotalPrice()}
            />
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 0.49)} title="Äpfel" description="Frische Äpfel aus regionalem Anbau, ideal für Snacks oder als Zutat in verschiedenen Gerichten." img="/assets/img/apples.jpg" />
                    <Product onAdd={() => this.addItem(1, 'Kirschen', 1.39)} title="Kirschen" description="Süße, saftige Kirschen, perfekt für Desserts oder einfach zum Knabbern." img="/assets/img/cherrys.jpg" />
                    <Product onAdd={() => this.addItem(1, 'Pfirsiche', 0.95)} title="Pfirsiche" description="Zarte und aromatische Pfirsiche, ideal für Smoothies oder zum direkten Verzehr." img="/assets/img/peach.jpg" />
                    <Product onAdd={() => this.addItem(1, 'Erdbeeren', 1.79)} title="Erdbeeren" description="Reife Erdbeeren mit intensivem Geschmack, ausgezeichnet für Kuchen, Joghurt oder als gesunder Snack." img="/assets/img/strawberries.jpg" />
                </div>
                {this.state.cartVisible && <ShoppingCart items={this.state.items}></ShoppingCart>}
            </div>
        </React.Fragment>
    }
}

export default App;