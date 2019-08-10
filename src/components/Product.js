import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';

export default class Product extends Component {
    render() {
        const {id, title, img, info, description} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <ProductConsumer>
                        {
                            (value) => (
                                <div className="card">
                                    <div className="card-body" onClick={() => value.handleDetail(id)}>
                                        <h5 className="card-title">{ title }</h5>
                                        <p className="card-text">{ description }</p>
                                        
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/details" onClick={() => value.handleDetail(id)}>Show Full Details</Link>
                                        {/* <Link to={"/cart/" + id }>cart</Link>   */}
                                    </div>
                                </div>
                            )
                        }
                    </ProductConsumer>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover {
    .card {
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0.2);
    }
    .card-footer {
        background: rgba(247, 247, 247);
    }
}
`;