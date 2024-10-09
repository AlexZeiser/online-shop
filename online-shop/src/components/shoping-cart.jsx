import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = {
        menuVisible: false,
    };

    toggleMenu = () => {
        this.setState(prevState => ({ menuVisible: !prevState.menuVisible }));
    };

    getTotalPrice = () => {
        return this.props.items.reduce((total, item) => total + parseFloat(item.totalPrice), 0).toFixed(2);
    }

    render() {
        const totalPrice = this.getTotalPrice();
        const { menuVisible } = this.state;

        return (
            <div className='shopping-cart' id='shopping-cart'>
                <div className='shopping-cart-title'>
                    <h2>Warenkorb</h2>
                    <img src="./../../assets/img/cart.png" />
                    <img className='menu-vertical' src="./../../assets/img/menu-vertical.png" onClick={this.toggleMenu} />
                </div>
                {menuVisible && (
                    <div className='confirm-menu multi-color-c'>
                        <p>Warenkorb leeren?</p>
                        <button className='menu-yn-btns' onClick={this.props.clearCart}>Ja</button>
                        <button className='menu-yn-btns' onClick={this.toggleMenu}>Nein</button>
                    </div>
                )}

                <div className='shopping-cart-sb'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Produkt</th>
                                <th>Anzahl</th>
                                <th>Einzelpreis (€)</th>
                                <th>Summe (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item, index) => (
                                <tr key={item.id || index}>
                                    <td>
                                        <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px' }} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button className='delete-icon' onClick={() => this.props.onRemoveItem(item.name)}>
                                            <img src="./../../assets/img/delete-icon.png" />
                                        </button>
                                        {item.amount}
                                        <button className='add-icon' onClick={() => this.props.onAddItem(1, item.name, item.price, item.img)}>
                                            <img src="./../../assets/img/add-icon.png" />
                                        </button></td>

                                    <td>{item.price.toFixed(2).replace(".", ",")}€</td>
                                    <td>{item.totalPrice.toFixed(2).replace(".", ",")}€</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='cart-config'>
                        <div className='total-price-div'>
                            <div className='total-price'>
                                <strong>Gesamtpreis: {totalPrice.replace(".", ",")}€</strong>
                            </div>
                        </div>
                        <div className='pay-div'>
                            <button className='pay-div-button ' onClick={this.props.pay}>Bezahlen <img className='pay-icon' src="./../../assets/img/pay-icon.png" /></button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default ShoppingCart;