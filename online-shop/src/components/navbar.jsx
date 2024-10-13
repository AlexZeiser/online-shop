import React, { Component } from 'react';

class Navbar extends Component {
    scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    render() {
        return (
            <nav className="navbar multi-color-c navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand navbar-logo-div" onClick={this.scrollToTop}><img className='logo-icon' src="./../../assets/img/logo-fruit.png" /></div>
                    <div className='links-div'>
                        <div className="nav-link nav-links-div" onClick={this.scrollToTop}><span id='span-home-text'>Home</span><img className='home-icon' src="./../../assets/img/shop-icon.png" /></div>
                        <div className="nav-link nav-links-div" onClick={this.scrollToBottom}>Kontakt<img className='message-icon' src="./../../assets/img/message-icon.png" /></div>
                    </div>
                    <button id='addButton' className='hidden' onClick={this.props.toggleCartVisibility}>
                        <div className='cartCount'>{this.props.totalAmount}</div>
                        <div className='cart-button-text'>Bestellung {this.props.cartVisible ? "verstecken" : "ansehen"}</div>
                        <div className='cart-button-price'>{this.props.totalPrice.replace(".", ",")}€</div>
                    </button>
                    <div id='payMessage' className='hidden'>
                        <span>Bestellung abgeschlossen! Vielen Dank für Ihren Einkauf.</span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;