import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Testimonials.css';

class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.people = [
            {
                comment: "Chất lượng sản phẩm đảm bảo, thời gian đúng hẹn, phong cách làm việc chuyên nghiệp, đây chính là lý do tôi luôn tin tưởng các bạn",
                name: "Hoàng Thu Trang",
                url: require('../img/person1.jpeg')
            },
            {
                comment: "Điều tôi ấn tượng nhất đó là khả năng liên lạc, phối hợp trong suốt thời gian dự án. The Lion đã chứng minh họ là đội ngũ chuyên môn cao và mang đến cho tôi những giải pháp hoàn hảo. Chắc chắn tôi sẽ tiếp tục chọn The Lion cho những dự án tiếp theo",
                name: "Nguyễn Bình An",
                url: require('../img/person2.jpeg')
            },
            {
                comment: "The Lion không những hỗ trợ và tư vấn về dịch vụ mà còn đưa ra giải pháp tích cực để giúp tối ưu chi phí. Tôi thực sự hài lòng về dịch vụ và thái độ chăm sóc khách hàng của The Lion",
                name: "Nguyễn Văn Mạnh",
                url: require('../img/person3.jpeg')
            },
            
        ]
    }

    render() {
        return (
            <section className="Section4">
                <Container>
                    <Row>
                        <h2 className="col title">Nhận xét của khách hàng</h2>
                    </Row>
                    <Row>
                        {
                            this.people.map( (item, index) => (
                                <Col lg="4" key={index}>
                                    <blockquote>
                                        { item.comment }
                                        <cite>
                                            <img src={ item.url } alt="load-err" /> { item.name }
                                        </cite>
                                    </blockquote>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Testimonial;