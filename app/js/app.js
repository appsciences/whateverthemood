require("../css/index.css");

import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/shared/side-bar';
import ToolBar from './components/shared/tool-bar';
import Footer from './components/shared/footer';
import FrontPage from './components/front-page';
import Categories from './components/categories';
import Destination from './components/dest';
import Congrats from './components/congrats';
import { Router, Route, hashHistory } from 'react-router';

//Jetpack
require("./jetpack/jquery-2.1.0.min.js");
require("./jetpack/jquery.swipebox.min.js");
require("./jetpack/jquery.smoothState.min.js");
require("./jetpack/materialize.js");
require("./jetpack/swiper.min.js");
require("./jetpack/jquery.mixitup.min.js");
require("./jetpack/masonry.min.js");
require("./jetpack/chart.min.js");
require("./jetpack/functions.js");


const App = React.createClass({



    render() {

        return (
            <div id="main">

                <SideBar/>
                <ToolBar/>
                {this.props.children || <FrontPage/>}
            </div>


        );

    }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="categories/:type" component={Categories} />
            <Route path="dest/:id" component={Destination} />
            <Route path="congrats" component={Congrats} />
        </Route>
    </Router>, document.getElementById("app-container"));