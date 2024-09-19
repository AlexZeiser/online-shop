import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Eat Fruits - Be Happy</a>
                    {/* Der Button zum Umschalten der Warenkorb-Anzeige */}
                    <button id='addButton' className='d-none' onClick={this.props.toggleCartVisibility}>
                        <div className='cartCount'>{this.props.totalAmount}</div><div>Bestellung {this.props.cartVisible ? "verstecken" : "ansehen"}</div><div>{this.props.totalPrice}€</div>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        );
    }
}

export default Navbar;
