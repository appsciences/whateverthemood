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


const App = React.createClass({



    render() {

        return (
            <div id="main">

                {/*<SideBar/>*/}
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