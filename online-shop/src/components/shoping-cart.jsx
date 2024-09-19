import React, { Component } from 'react';

class ShoppingCart extends Component {
    getTotalPrice = () => {
        return this.props.items.reduce((total, item) => total + parseFloat(item.totalPrice), 0).toFixed(2);
    }

    render() {
        const totalPrice = this.getTotalPrice();
        
        return (
            <div className='shopping-cart' id='shopping-cart'>
                <h2>Warenkorb</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Anzahl</th>
                            <th>Summe (€)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(item => (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.totalPrice}€</td>
                            </tr>
                        ))}
                    </tbody>
                </table>        
            </div>
        );
    }
}

export default ShoppingCart;
