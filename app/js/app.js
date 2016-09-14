require("../css/index.css");

import React from 'react';
import ReactDOM from 'react-dom';

import Dropzone from 'react-dropzone';
import {Well, Carousel, Button, ButtonToolbar, FormControl, Glyphicon} from 'react-bootstrap';

const Application = React.createClass({

    getInitialState: () => (
    {index:0, direction:null}
    ),

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
            showNo: false
        });
    },

    render() {

        return (
                <Carousel
                    controls={false}
                    style={{
                        height:'100%',
                        width:'100%',
                    marginTop: 40
                }}
                          activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/nature2.jpg"/>

                        <Carousel.Caption>
                            <h1>What is your mood?</h1>

                                <Button
                                    style={{color:'white', background:'none'}}
                                    bsSize="large"
                                    onClick={e=>this.setState({showNo:true}) }
                                >{this.state.showNo?'Not yet':'Explore'}</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button onClick={e=>this.setState({index:1}) }
                                                                        style={{color:'white', background:'none'}} bsSize="large">Guided Journey</Button>
<p>&nbsp;</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/nature1.jpg"/>

                        <Carousel.Caption>
                            <h1>Some questions to set the tone</h1>
                            <p>Batman or Superman?</p>
                            <p>...</p>
                            <Button
                                style={{color:'white', background:'none'}}
                                bsSize="large"
                                onClick={e=>this.setState({index:2}) }
                            >Let'd do this.</Button>
                            <p>&nbsp;</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/nature3.jpg"/>

                        <Carousel.Caption>
                            <h1>Rob a deli and burn it down.</h1>
                            <p>Rob and burn down the deli on Ditmas and 32nd. When done, click to check in below.</p>
                            <Button
                                style={{color:'white', background:'none'}}
                                bsSize="large"
                                onClick={e=>this.setState({index:3}) }
                            >Check in and next</Button>
                            <p>&nbsp;</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/nature4.jpg"/>

                        <Carousel.Caption>
                            <h1>Jump kid for lunch money.</h1>
                            <p>At the nearest playground pick the smallest kid, take lunch money. Ask parents for code and enter below.</p>
                            <p><FormControl style={{height:60, width:500, fontSize:35}} placeholder="Code" type="text"/>
                            </p>
                            <Button
                                style={{color:'white', background:'none'}}
                                bsSize="large"
                                onClick={e=>this.setState({index:0}) }
                            >I'm done, start again.</Button>
                            <p>&nbsp;</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
        );

    }
});

ReactDOM.render(<Application/>, document.getElementById("app-container"));