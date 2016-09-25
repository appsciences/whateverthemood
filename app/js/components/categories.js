import React from 'react';
import DestinationSection from './dest-section';

const Categories = React.createClass({

    render() {

        const adventure={
            'Featured Tone Setter': {
                'Lillian':'Challenge',
                'Kelsey':"She's an angel, just say hi"
            },
            'Adventure': {
                'A Saxophone Player':'Stay a while, he\'s worthe every second. Shoot a video or picture, don\'t forget to tip',
                'Kaylyn Marie':'Just go the the park at lunch and she\'ll take care of the rest',
            },
        };

        //TODO Andrew and Frienks
        // const shops= {
        //
        // };

        const dest = {
            'explore':{
                'Food':{
                    'Delicious Deli':"",
                    'test':""
                },
                'Drink':{
                    'Mosaic':"",
                    'The Bonnie':"",
                    '60 Bean':"",
                    'Cafe 23':"",
                    'Flattopps':'',
                    'Sparrow Tavern':''
                },
                'Shop':{
                    'Ditmas Flowers and Gifts':"",
                    'The Brass Owl':"",
                    'The Little Soap Shop':"",
                    'Zhicay Shoe Repair':"",
                    'The Stonework':"",
                    'Inside Astoria':""
                },
                'Hobby':{
                    'Luludi':""
                },
                'Co-work':{
                    'Tyler Clayton':"Stay a while, he's worth every second. Shoot a video or picture, don't forget to tip"
                },
                'Wellness':{
                    'Oak Point Health and Vitality Centre':""
                },
                'Bar':{
                    'Tyler Clayton':"Stay a while, he's worth every second. Shoot a video or picture, don't forget to tip"
                }},
            'adventure':{
                'Tone Setters':{
                    'Lillian':'',
                    'Kelsey':""
                },
                'Music':{
                    'Tyler Clayton':"",
                    'Kaylyn Marie':""
                }
            }
        }[this.props.params.type];

        const categoryNav = Object.keys(dest).map((category, i) =>
            <li className="tab col s3"><a className="active" href={'#'+category}>
                {category}
            </a></li>);

        const categoryList = category =>
            Object.keys(dest[category]).map((shopName, i) =>
                <DestinationSection
                    category={category}
                    title={shopName}
                />);

        const categories =
            Object.keys(dest).map((category) =>
                <div id={category}>
                    {categoryList(category)}
                </div>);

        return (

            <div className="page animated fadeinright">

                <ul className="tabs">
                    {categoryNav}
                </ul>

                {categories}

                <div className="clr"></div>

            </div>
        );
    }
});

export default Categories;
