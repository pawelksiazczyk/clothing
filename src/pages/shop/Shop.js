import React, { Component } from 'react';
import SHOP_DATA from "./shop.data";
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

class Shop extends Component {

    state = {
        collections: SHOP_DATA
    };

    
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...other}) => {
                    return <PreviewCollection key={id} {...other}/>
                })}
            </div>
        )
    }
}

export default Shop
