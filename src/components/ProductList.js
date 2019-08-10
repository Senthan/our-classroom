import React, {Component } from 'react';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../Context';
import Product from './Product';
 
export default class ProductList extends Component {
  state={
    products: storeProducts
  }
  render() {
    console.log('storeProducts ', this.state.products);
    return (
      <React.Fragment>
        <div className="PY-5">
          <div className="container">
            <Title name="our" title="classroom" />
            <p><b>This web site is under construction</b></p>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map( product => {
                    return <Product key={product.id} product={product}></Product>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

