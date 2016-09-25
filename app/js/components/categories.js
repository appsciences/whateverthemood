import React from 'react';
import DestinationSection from './dest-section';

const Categories = React.createClass({

    render() {

        const adventure={
            'Featured Tone Setter': {
                'Lillian':'Challenge',
                'Kelsey':'She]s an angel, just say hi'
            },
            'Adventure': {
                'A Saxophone Player':'Stay a while, he\'s worthe every second. Shoot a video or picture, don\'t forget to tip',
                'Kaylyn Marie':'Just go the the park at lunch and she\'ll take care of the rest',
            },
        };

        // const shops= {
        //     'Bar': {
        //         'Sparrow':'Welcome to Sparrow. It\'s to to wake up. Have a free drink. Take a picture of one of the light fixtures, instagram @sparrow and @whateverthemood',
        //         'The Bonnie':'Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you. @bonnie',
        //         'Flattopps':'Give a dollar to the bartender, bartender picks a song, shoot a music video while sipping on a free slushy'
        //     },
        //     'Co-working':{'Wework':'Go to lunch, talk to Ed'},
        //     'Florist':{'Ditmars Flowers & Gifts':'Welcome to Ditmars Florist. Creatively pose amongst the flowers with your team.'},
        //     'Lounge':{'Mosaic':'Now that you\ve seen the inside it\'s time to see the outside. There is a prive party gong on, so for now just scope it out. Creatively Instagram whatever Mosaic\'s mood may be.' },
        //     "Kitchen & Coffee" : {
        //         "Cafe 23":"Come get some free ice tea. Instagram this lovely cafe and let them know whatever the modd sent them their way.",
        //         "60 Beans":"Welcome to 60 Beans. Try a free coffee. Find out the origin of the name. Instagram the business whatever way the mood strikes you. Get code form Joel."
        //     },
        //     "Food" :{
        //         "Delicious Deli":"Stop by delicius deli, get free fruit. Try discounted juice.",
        //     },
        //     "Bagels": {"The Bagel House":"Top by, say hi, they are absolutely our mood."},
        //     "Butique": {
        //         "Brass Owl":"Challenge",
        //     },
        //     "Health": {
        //         "Oak Point Wellness Center":""
        //     } ,
        //
        //     "Fitness": {
        //         "Versa Fit":"Challenge"
        //     },
        //     "Mensware":{"Stonework":"Speak to Ed at lunch"},
        //     "Shoe Shine":{"Zhicay Shoe Repair":"Speak to Ed at lunch"},
        //     "Tattoo":{"Supernova":"Challenge"},
        //     "Hobby":{"Luludi":"Challenge"},
        //     "Gift Shop" : {
        //         "Inside Astoria":"Challenge"
        //     },
        //     "Specialty" : {
        //         "The Little Soap Shop" : "Challenge"
        //     }
        // };

        const shops = {
            'Musician':{
                'Tyler Clayton':"Stay a while, he's worth every second. Shoot a video or picture, don't forget to tip"
            }
        };

        const categoryNav = Object.keys(shops).map((category, i) =>
            <li className="tab col s3"><a className="active" href={'#'+category}>Tech
                {category}
            </a></li>);

        const categoryList = category =>
            Object.keys(shops[category]).map((shopName, i) =>
                <DestinationSection
                    category={category}
                    title={shopName}
                />);

        const categories =
            Object.keys(shops).map((category) =>
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
