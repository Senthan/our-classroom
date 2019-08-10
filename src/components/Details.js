import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import YouTube from './YouTube';
import parse from 'html-react-parser';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {id, company, img, info, price, title, url} = value.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <h1>{title}</h1>
                                </div>
                                <div className="row">
                                <YouTube video={url} autoplay="0" rel="0" modest="1" />
                                </div>
                                <div className="row">
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0"> Some info about Product: </p>
                                </div>
                                <div className="row">
                                    <div className="text-muted lead">{parse(info)}</div>
                                </div>
                                <div className="row">
                                <Link to="/">
                                    <ButtonContainer>Back to Classroom</ButtonContainer>
                                </Link>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        );
    }
}
