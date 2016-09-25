
import React from 'react';
import { Link } from 'react-router';


const Destination = React.createClass({

    render() {
        // let img1 = require(`../../img/dest/${this.props.image}`);
        let img2 = this.props.image2 && require(`../../img/dest/${this.props.image2}`);

        let destId = this.props.title.replace(/ /g, "-");

        let img1 = require(`../../img/dest/${this.props.title.replace(/ /g, "-")}-small.jpg`);

        return (

                <div className="product half">
                    {/*<!-- Slider -->*/}
                    <div className="swiper-container slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Link to={`/dest/${destId}`}><img src={img1} alt=""/></Link>
                            </div>
                            { this.props.image2 &&
                                <div className="swiper-slide">
                                    <a href="product.html"><img src={img2} alt=""/></a>
                                </div>
                            }
                        </div>
                        {/*<!-- Add Pagination -->*/}
                        <div className="swiper-pagination"></div>
                    </div>
                    {/*<!-- End of Slider -->*/}
                    <div className="product-info">
                        <span className="small grey-text">{this.props.category}</span>
                        <h5 className="m-0"><strong>{this.props.title}</strong></h5>
                        {/*<!-- Rating -->*/}
                        <div className="rating">
                            <i className="ion-star active"></i>
                            <i className="ion-star active"></i>
                            <i className="ion-star active"></i>
                            <i className="ion-star active"></i>
                            <i className="ion-star active"></i>
                        </div>
                    </div>
                </div>





                    );

    }
});

export default Destination;
