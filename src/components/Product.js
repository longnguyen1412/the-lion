import React from 'react';
import { Col } from 'reactstrap';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import './Product.css';

class Product extends React.Component {
    render() {
        return (
            <Col className="Product" lg="3" sm="6">
                <div className="img-container" id={this.props.id}>
                    <img src={ this.props.src } alt="load-err"/>
                </div>
                <div className="productName">
                    <div className="overline"></div>
                    <div className="name">
                        { this.props.productName }
                    </div>
                </div>
                <UncontrolledPopover className="popover" trigger="hover" placement="top" target={this.props.id}>
                    <PopoverHeader>
                        { this.props.productName }
                    </PopoverHeader>
                    <PopoverBody>
                        {
                            this.props.informations.map((item, index) => 
                                <div key={index}>
                                    <b>{ item[0] }: </b>
                                    <span>{ item[1] }</span>
                                </div>
                            )
                        }
                    </PopoverBody>
                </UncontrolledPopover>
            </Col>
        )
    }
}

export default Product;