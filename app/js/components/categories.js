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
            'explore': {
                'Food': {
                    'Delicious Deli': "",
                    '60 Beans': "",
                    'Cafe 23': "",
                },
                'Drink': {
                    'Mosaic-Craft-Cocktail-and-Beer-Lounge': "",
                    'The Bonnie': "",
                    'Flattopps': '',
                    'Sparrow Tavern': ''
                },
                'Co-work': {
                    'Wework': ""
                },
                'Shop': {
                    'Ditmars Flowers and Gifts': "",
                    'The Brass Owl': "",
                    'The Little Soap Shop': "",
                    'Zhicay Shoe Repair': "",
                    'The Stonework': "",
                    'Inside Astoria': ""
                },
                'Hobby': {
                    'Luludi': ""
                },
                'Wellness': {
                    'Oak Point Health and Vitality Centre': ""
                }
            },
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
            <li key={i} className="tab col s3"><a className="active" href={'#'+category}>
                {category}
            </a></li>);

        const categoryList = category =>
            Object.keys(dest[category]).map((shopName, i) =>
                <DestinationSection
                    category={category}
                    title={shopName}
                    key={i}
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
