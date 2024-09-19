import React, { Component } from 'react';
import Product from './product';
import Navbar from './navbar';

class App extends Component {
    state = {}
    render() {
        return <React.Fragment>
            <Navbar></Navbar>
            <div className='product-container'>
                <Product title="Äpfel" description="Frische Äpfel aus regionalem Anbau, ideal für Snacks oder als Zutat in verschiedenen Gerichten." img="/assets/img/apples.jpg"/>
                <Product title="Kirschen" description="Süße, saftige Kirschen, perfekt für Desserts oder einfach zum Knabbern." img="/assets/img/cherrys.jpg"/>
                <Product title="Pfirsiche" description="Zarte und aromatische Pfirsiche, ideal für Smoothies oder zum direkten Verzehr." img="/assets/img/peach.jpg"/>
                <Product title="Erdbeeren" description="Reife Erdbeeren mit intensivem Geschmack, ausgezeichnet für Kuchen, Joghurt oder als gesunder Snack." img="/assets/img/strawberries.jpg"/>
            </div>

        </React.Fragment>
    }
}

export default App;