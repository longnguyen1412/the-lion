import React from 'react';

import anh1 from '../img/anh1.jpg';
import anh2 from '../img/anh2.jpg';
import './Slogan.css';

class Slogan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOne: true,
            pOne: true
        }
    }

    onClickBtn() {
        this.setState({
            pOne: !this.state.pOne
        });
        setTimeout(() => {
            this.setState({
                isOne: !this.state.isOne
            })
        }, 1000);
    }

    componentDidMount() {
        setInterval(this.onClickBtn.bind(this), 10000);
    }

    render() {
        var { isOne, pOne } = this.state;
        var classNameSlide1 = 'slide';
        var classNameSlide2 = 'slide';
        var classNameP1 = '';
        var classNameP2 = '';
        if(pOne) {
            classNameP1 += 'an-chu';
            classNameP2 += 'hien-chu';
        }else {
            classNameP1 += 'hien-chu';
            classNameP2 += 'an-chu';
        }

        if(isOne) {
            classNameSlide2 += ' active';
        }else {
            classNameSlide1 += ' active';
        }

        return (
            <div className="Slogan">
                <div className="cac-slide">
                    <div className={classNameSlide1}>
                        <img src={anh1} alt="load-err" />
                        <p className={classNameP1}> 
                            <strong>CUNG CẤP</strong>
                            SẢN PHẨM TỐT NHẤT
                        </p>
                    </div>
                    <div className={classNameSlide2}>
                        <img src={anh2} alt="load-err" />
                        <p className={classNameP2}>
                            <strong>CHẤT LƯỢNG</strong>
                            THAY VẠN LỜI NÓI
                        </p>
                    </div>
                </div>
                <div className="nut-slide">
                    <div id="btn-prev" onClick={this.onClickBtn.bind(this)}><i class="fas fa-angle-left"></i></div>
                    <div id="btn-next" onClick={this.onClickBtn.bind(this)}><i class="fas fa-angle-right"></i></div>
                </div>
            </div>
        )
    }
}

export default Slogan;