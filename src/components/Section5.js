import React from 'react';
import { Button } from 'reactstrap';

import './Section5.css';

class Section5 extends React.Component {
    render() {
        return (
            <section className="Section5 container-fluid" id="lien-he">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <ul className="information">
                            <li><i className="fas fa-map-marker-alt"></i>Address: Tầng 10, 360 Giải Phóng, Phương Liệt, Thanh Xuân, Hà Nội</li>
                            <li><i className="fas fa-envelope"></i>Email: thelion252company@gmail.com</li>
                            <li><i className="fas fa-phone"></i>Phone: 0986621252</li>
                        </ul>
                        <ul className="social-icon">
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-google-plus-square"></i></li>
                        </ul>
                        <p>Chúng tôi cung cấp dịch vụ tư vấn miễn phí, nếu bạn có bất kì thắc mắc hay câu hỏi nào, chúng tôi sẽ sẵn sàng tư vấn và giải đáp.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-4">
                                    <label>Name</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" placeholder="Your name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label>Email</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label>Message</label>
                                </div>
                                <div className="col-8">
                                    <textarea name="" id="" cols="30" rows="3" placeholder="Your message"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <Button className="btn-all" >Send It</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section5;