import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Item from './Item';
import './AboutUs.css';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.products = [
            {
                icon: "fab fa-get-pocket",
                title: "Sản phẩm",
                content: "Mẫu mã đa dạng nhiều chủng loại"
            },
            {
                icon: "fa fa-anchor",
                title: "Hướng dẫn",
                content: "Sử dụng đúng cách an toàn nhất"
            },
            {
                icon: "fas fa-cogs",
                title: "Sử dụng",
                content: "An toàn không độc hại, không chịu ảnh hưởng"
            },
            {
                icon: "fa fa-truck",
                title: "Vận chuyển",
                content: "Hỗ trợ vận chuyển cả trong tỉnh và ngoài tỉnh"
            },
            {
                icon: "fa fa-phone-square",
                title: "Tư vấn",
                content: "Vui lòng gọi 0986621252 để được hỗ trợ tốt nhất"
            },
            {
                icon: "fa fa-paper-plane",
                title: "Phương châm",
                content: "Xây cuộc sống mới - Dựng môi trường xanh"
            }
        ]
    }

    render() {
        return (
            <section className="AboutUs">
                <Container>
                    <Row>
                        <h2 className="col">Về chúng tôi</h2>
                    </Row>
                    <Row>
                        <p className="gioi-thieu col-xs-12 col-sm-12  col-md-8 offset-md-2">
                            Công ty TNHH sản xuất và thương mại The Lion chuyên phân phối
                             máy vi tính, các thiết bị ngoại vi và phần mềm.
                        </p>
                    </Row>
                    <Row>
                        {
                            this.products.map( (item) => <Item {...item} />)
                        }
                    </Row>
                </Container>
            </section>
        )
    }
}

export default AboutUs;