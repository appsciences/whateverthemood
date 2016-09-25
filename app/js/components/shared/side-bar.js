
import React from 'react';

const SideBar = React.createClass({


    render() {

        return (

            <ul id="slide-out" className="side-nav primary-color collapsible">
                <li>
                    <div className="sidenav-header">

                        {/*<!-- Srearch bar -->*/}
                        <nav className="searchnav">
                            <div className="nav-wrapper">
                                <form>
                                    <div className="input-field">
                                        <input id="search" type="search" required/>
                                        <label htmlFor="search"><i className="ion-android-search"></i></label>
                                        <i className="ion-android-close"></i>
                                    </div>
                                </form>
                            </div>
                        </nav>

                        {/*<!-- Social Bar -->*/}
                        <div className="nav-social">
                            <i className="ion-social-facebook"></i>
                            <i className="ion-social-twitter"></i>
                            <i className="ion-social-tumblr"></i>
                        </div>

                        {/*<!-- Avatar -->*/}
                        <div className="nav-avatar">
                            <img className="circle avatar" src="../../../img/user5.jpg" alt=""/>
                            <div className="avatar-body">
                                <h3>Jetpack</h3>
                                <p>Mobile Template</p>
                            </div>
                        </div>
                    </div>
                </li>

                {/*<!-- Menu -->*/}
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-home-outline"></i> Home <span className="badge">5</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="index.html">Classic</a>
                                <a href="index-sliced.html">Sliced</a>
                                <a href="index-slider.html">Slider</a>
                                <a href="index-drawer.html">Drawer</a>
                                <a href="index-walkthrough.html">Walkthrough</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-browsers-outline"></i> Layout <span className="badge">5</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="hero.html">Hero</a>
                                <a href="left-sidebar.html">Left</a>
                                <a href="right-sidebar.html">Right</a>
                                <a href="dual-sidebar.html">Dual</a>
                                <a href="blank.html">Blank</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-list-outline"></i> Pages <span className="badge">14</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="profile.html">Profile</a>
                                <a href="article.html">Article</a>
                                <a href="event.html">Event</a>
                                <a href="project.html">Project</a>
                                <a href="player.html">Music Player</a>
                                <a href="todo.html">ToDo</a>
                                <a href="category.html">Category</a>
                                <a href="product.html">Product</a>
                                <a href="checkout.html">Checkout</a>
                                <a href="search.html">Search</a>
                                <a href="faq.html">Faq</a>
                                <a href="coming-soon.html">Coming Soon</a>
                                <a href="404.html">404</a>
                                <a href="500.html">500</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-keypad-outline"></i> App <span className="badge">9</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="calendar.html">Calendar</a>
                                <a href="chat.html">Chat</a>
                                <a href="chart.html">Chart</a>
                                <a href="timeline.html">Timeline</a>
                                <a href="login.html">Login</a>
                                <a href="signup.html">Sign Up</a>
                                <a href="lockscreen.html">Lockscreen</a>
                                <a href="forgot.html">Password</a>
                                <a href="notification.html">Notification</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-camera-outline"></i> Portfolio <span className="badge">3</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="portfolio-filter.html">Filter</a>
                                <a href="portfolio-masonry.html">Masonry</a>
                                <a href="portfolio-card.html">Card</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-paper-outline"></i> Blog <span className="badge">2</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="blog.html">Classic</a>
                                <a href="blog-card.html">Card</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="ion-ios-color-filter-outline"></i> Gallery <span className="badge">3</span>
                    </div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <a href="gallery-filter.html">Filter</a>
                                <a href="gallery-masonry.html">Masonry</a>
                                <a href="gallery-card.html">Card</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="shop.html" className="no-child"><i className="ion-ios-cart-outline"></i> Shop</a></li>
                <li><a href="news.html" className="no-child"><i className="ion-ios-paperplane-outline"></i> News</a></li>
                <li><a href="video.html" className="no-child"><i className="ion-ios-film-outline"></i> Video</a></li>
                <li><a href="contact.html" className="no-child"><i className="ion-ios-location-outline"></i> Contact</a></li>
            </ul>
        );

    }
});

export default SideBar;
