import React from 'react';
import { Col } from 'reactstrap';

import './Item.css';

class Item extends React.Component {
    render() {
        return (
            <Col className="Item" lg="2" sm="4" xs="12">
                <div className="icon">
                    <i className={this.props.icon}></i>
                </div>
                <h5>
                    { this.props.title }
                </h5>
                <p>
                    { this.props.content }
                </p>
            </Col>
        )
    }
}

export default Item;