import React from 'react';
import { Row, Button } from 'reactstrap';

import Product from './Product';

import './Products.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.products = [
            {
                id: "product1",
                src: require("../img/product1.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product2",
                src: require("../img/product2.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product3",
                src: require("../img/product3.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product4",
                src: require("../img/product4.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product5",
                src: require("../img/product5.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product6",
                src: require("../img/product6.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product7",
                src: require("../img/product7.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
            {
                id: "product8",
                src: require("../img/product8.jpg"),
                productName: "Máy vi tính",
                informations: [
                    ["key1", "key1"],
                    ["key2", 'key2'],
                    ["key3", "key3"]
                ]
            },
        ]
    }

    render() {
        return (
            <section className="Products">
                <div className="container">
                    <Row>
                        <h2 className="col title">Sản phẩm của chúng tôi</h2>
                    </Row>
                    <Row>
                        {
                            this.products.map( (product, index) => <Product { ...product } key={index} /> )
                        }
                    </Row>
                    <Row>
                        <Button className="btn-all">Xem tất cả</Button>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Products;