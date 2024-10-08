import React, { Component } from 'react';

class Product extends Component {
    state = {}

    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <img src={this.props.img} className="card-img-top" alt={this.props.title} />
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.price.toFixed(2).replace(".", ",")} € / {this.props.weight}
                    </p>
                    <div className='btn-div'>
                        <button id='addToCart' onClick={this.props.onAdd} className="btn btn-primary">In den Warenkorb</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;