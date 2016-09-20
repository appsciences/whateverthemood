require("../css/index.css");

import React from 'react';
import ReactDOM from 'react-dom';


import {
    Carousel,
    Button,
    FormControl,
    Glyphicon,
    Navbar,
    Nav,
NavItem} from 'react-bootstrap';

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

        const shops= {
            'Bar': {
                'Sparrow':'Challenge',
                'Mosaic':'Challenge'
            },
            'Lounge':{'TBD':'Challenge'},
            'Cafe' : {
                'Cafe 23':'Challenge',

            },
            'Butique': {
                'Brass Owl':'Challenge',

            },
            'Health': {
                'Oak Point Wellness Center':''
            } ,
            'Music': {
              'Alpha School of Music':'Challenge',
                'A Saxophone Player':{}
            },
            'Fitness': {
                'Versa Fit':'Challenge'
            },
            'Mensware':{'TBD':'Challenge'},
            'Show Shine':{'TBD':'Challenge'},
            'Tattoo':{'TBD':'Challenge'},
            'Arts':{'TBD':'Challenge'},
            'Gift Shop' : {
                'Inside Astoria':'Challenge'
            },
            'Specialty' : {
                'The Little Soap Shop' : 'Challenge'

            }
        };

        const buttonColors=[
            'green',
            'blue',
            'red',
            'grey'
        ];


        const categoryButtons = Object.keys(shops).map((category, i) =>
            <button
                onClick={e=>this.setState({index:i + 3})}
                className='round-button'
                style={{borderColor: buttonColors[i % 4]}}
            >
            {category}
            </button>);

        const shopButtons = category =>
            Object.keys(shops[category]).map((shopName, i) =>
                <button
                    onClick={e=>this.setState({index: Object.keys(shops).length +3})}
                    className='round-button'
                    style={{borderColor: buttonColors[i % 4]}}
                >
                    {shopName}
                </button>
            );

            return (
                <div className="full-height">
                    <Navbar inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">Whatever The Mood</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">Share</NavItem>
                                <NavItem eventKey={2} href="#">Contact</NavItem>
                                <NavItem eventKey={3} href="#">Bla</NavItem>


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
            <Carousel
                controls={false}
                indicators={false}

                activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <Carousel.Item className='fullscreen'>

                        <h1>What is your mood?</h1>

                        <Button
                            className="round-button"
                            style={{borderColor:'green'}}
                            onClick={e=>this.setState({showNo:true}) }
                        >{this.state.showNo?'Not yet':'Explore'}</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick={e=>this.setState({index:1}) }
                                className="round-button"
                                style={{borderColor:'green'}} bsSize="large">Guided Journey</Button>
                </Carousel.Item>
                <Carousel.Item className='fullscreen'>

                    <a onClick={e=>this.setState({index:0}) }>
                        <Glyphicon glyph="chevron-left"/>
                    </a>
                    <h1>Some questions to set the tone</h1>
                        <p>Batman or Superman?</p>
                        <p>...</p>
                        <Button
                            className="round-button"
                            style={{borderColor:'green'}}
                            onClick={e=>this.setState({index:2}) }
                        >Let'd do this.</Button>
                </Carousel.Item>
                <Carousel.Item className='fullscreen'>
                    <a onClick={e=>this.setState({index:1}) }>
                    <Glyphicon glyph="chevron-left"/>
                        </a>
                    &nbsp;&nbsp;&nbsp;
                    {categoryButtons}

                </Carousel.Item>

                {Object.keys(shops).map((category,i) =>

                    <Carousel.Item className='fullscreen'>
                        <a onClick={e=>this.setState({index:2}) }>
                        <Glyphicon glyph="chevron-left" />
                            </a>
                        &nbsp;&nbsp;&nbsp;
                        {shopButtons(category)}

                    </Carousel.Item>
                )
                }
                <Carousel.Item className='fullscreen'>
                    <a onClick={e=>this.setState({index:2}) }>
                        <Glyphicon glyph="chevron-left" />
                    </a>
                        <h1>Activity...</h1>
                        <p>Instructions... after completion enter code below</p>
                        <p>
                            <FormControl style={{display: 'inline', height: 60, width: 500, fontSize: 35, borderRadius: 35}}
                                         placeholder="Code" type="text"/>
                        </p>

                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" src="../images/nature3-portrait.jpg"/>

                    <Carousel.Caption>
                        <h1>Rob a deli and burn it down</h1>
                        <p>Rob and burn down the deli on Ditmas and 32nd. When done, click to check in below.</p>
                        <Button
                            style={{color:'white', background:'none'}}
                            bsSize="large"
                            onClick={e=>this.setState({index:3}) }
                        >Check in and next</Button>
                        <p>&nbsp;</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

</div>

    );

    }
    });

    ReactDOM.render(<Application/>, document.getElementById("app-container"));