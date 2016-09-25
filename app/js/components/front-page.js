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
                            <h3 className="title white-text">What's the mood?</h3>
                            <p className="white-text m-0"><a href="https://www.facebook.com/events/576581589196477/">Click here for event information</a></p>
                            {/*<h3 className="title white-text">The world will not be the same.</h3>*/}
                            {/*<p className="white-text m-0"><a href="https://www.facebook.com/events/576581589196477/">Sept 25th, 11 am. Ditmas Blvd and 19th St, Atoria</a></p>*/}
                            {/*<br/>*/}
                            {/*<p className="white-text m-0"><a href="https://www.facebook.com/events/576581589196477/">Click for more info</a></p>*/}
                            <br/>
                            <p className="white-text m-0">
                                <Link
                                    to={`/categories/adventure`}
                                    className="btn-large"
                                    style={{background:"rgba(255, 255, 255, 0.3)"}}
                                >
                                    Adventure
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link
                                    to={`/categories/explore`}
                                    className="btn-large"
                                    style={{background:"rgba(255, 255, 255, 0.3)"}}
                                >Not sure</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
                );

    }
});

export default FrontPage;
