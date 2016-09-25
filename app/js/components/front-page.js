import React from 'react';
import { Link } from 'react-router';


const FrontPage = React.createClass({


    render() {

        return (

            <div className="page animated fadeinright">

                {/*<!-- Event Fullscreen Header -->*/}
                <div className="event-header bg-v-6">
                    <div className="opacity-overlay"></div>
                    <div className="bottom p-20">
                        <div className="social-share-author m-0 animated fadeinup delay-4">
                            {/*<img src="../../img/user2.jpg" alt="" className="avatar big"/>*/}
                                {/*<span className="white-text">Lora Bell</span>*/}
                        </div>
                        <div className="animated fadeinup delay-2">
                            <h3 className="title white-text">What is your mood?</h3>
                            <p className="white-text m-0">May be some explanation.</p>
                            <br/>
                            <p className="white-text m-0">
                                <Link
                                    to={`/categories`}
                                    className="btn-large"
                                    style={{background:"rgba(255, 255, 255, 0.3)"}}
                                >
                                    Adventure
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link
                                    to={`/categories`}
                                    className="btn-large"
                                    style={{background:"rgba(255, 255, 255, 0.3)"}}
                                >Explore</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
                );

    }
});

export default FrontPage;
