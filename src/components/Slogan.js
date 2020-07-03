import React from 'react';

import anh1 from '../img/anh1.jpg';
import anh2 from '../img/anh2.jpg';
import './Slogan.css';

class Slogan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOne: true
        }
    }

    render() {
        return (
            <div className="Slogan">
                <div className="cac-slide">
                    <div className="slide">
                        <img src={anh1} alt="load-err" />
                    </div>
                    <div className="slide active">
                        <img src={anh2} alt="load-err" />
                    </div>
                </div>
                <div className="nut-slide">
                    <div id="btn-prev"><i class="fas fa-angle-left"></i></div>
                    <div id="btn-next"><i class="fas fa-angle-right"></i></div>
                </div>
            </div>
        )
    }
}

export default Slogan;