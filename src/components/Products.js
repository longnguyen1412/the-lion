import React from 'react';
import { Row } from 'reactstrap';

import './Products.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="Products">
                <div className="container">
                    <Row>
                        <h2>Sản phẩm của chúng tôi</h2>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Products;