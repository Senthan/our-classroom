import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';

export default class Cart extends Component {
    state={
        products: storeProducts,
        detailProduct: detailProduct
    }

    id =this.props.match.params.id;
    getItem = (id) => {
        console.log('id ', id);
        const product = this.state.products.find(item => item.id === id);
        console.log('product ', product);
        return product;
    }
    id =this.props.match.params.id;
    render() {
        console.log(this.id, this.props.match.params.id, 'product ',  this.getItem(this.id));
        // console.log('id, company, img, info, price, title, url',id, company, img, info, price, title, url);
        return (
            <div>
                <h3>Cart  {this.props.match.params.id}</h3>
            </div>
        )
    }
}
