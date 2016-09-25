
import React from 'react';
import { Link } from 'react-router';

const Destination = React.createClass({


    render() {
        let destInfo = {
                'Tyler-Clayton':{
                    title:'Tyler Clayton',
                    description:"eet Tyler Clayton Appel. We were compelled to bring his tone on board for our first event after we heard him playing the streets of Astoria. His music is beautiful and he is a determined advocate for the paid artist. We definitely stand behind and support that mood. Hear him for yourself, he'll be playing the streets of Astoria this Sunday.",
                    letter:'M',
                    challenge:"Stay a while, he's worth every second. Shoot a video or picture, don't forget to tip"
                },
                'Wework':{
                    title:'Wework',
                    description:"e are thrilled to be working with the bright minds at Wework. For visionaries, startups, artists, and entrepreneurs alike; this global and future minded company facilitates and stimulates the passionate creatives of the world. Do what you love and create it here. Wework.",
                    letter:'W',
                    challenge:"Go to lunch, talk to Ed."
                },
                'Kaylyn-Marie':{
                    title:'Kaylyn Marie',
                    description:"eet the magical and talented Kaylyn Marie. Her music is moving and her passion is obvious. Her tone is spreading love and we're fortunate and honored to have her playing for us on the day of our first event. Eat a delicious free lunch and be blown away by her performance as you do.",
                    letter:'M',
                    challenge:"Go the the park at lunch. She'll take care of the rest"
                },
                'The-Bonnie':{
                    title:'Bonnie',
                    description:"ur current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner.",
                    letter:'O',
                    challenge:"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you."
                },
                '60-Beans':{
                    title:'60-Beans',
                    description:"e are honored to be sponsored by and working with a very unique and wonderful vetted tone setter, Mosaic. Whatever your mood may be, Mosaic has never failed to deliver an exceptional and personalized experience. They offer over 140 beers, a fine selection of wines, beautiful cocktails, and service that makes you feel as if you're in an extension of your own home. Come by, drink a cocktail, play some games. Whatever your mood may be, this is a terrific place to be.",
                    letter:'W',
                    challenge:"Welcome to 60 Beans. Try a free coffee. Find out the origin of the name. Instagram the business whatever way the mood strikes you. Get code from Joel."
                },
                'Mosaic-Craft-Cocktail-and-Beer-Lounge':{
                    title:'Mosaic Craft Beer and Cocktail Lounge',
                    description:"t's difficult to capture just how much this wonderful coffee shop means to us but we'll do our best. 60 beans has been our office, our daily support, our center of socializing, and our ambassador of Kwan. We are humbled and honored to have them as a part of our hunt, both as a sponsor and a destination. You must experience this fantastic tone setter.",
                    letter:'I',
                    challenge:"Now that you've seen the inside it's time to see the outside. There is a private party going on, so for now just scope it out. Creatively Instagram whatever Mosaic's mood may be."
                },
                'Cafe-23':{
                    title:'Cafe 23',
                    description:"there  is a new vetted cafe in town and they are great. Stop by for some tea and welcome them to the neighborhood. Great people, quality service, and we're digging their tone.",
                    letter:'T',
                    challenge:"Come get some free ice tea. Instagram this lovely cafe and let them know whatever the mood sent you their way."
                },'Ditmars-Flowers-and-Gifts':{
                    title:'Ditmars Flowers and Gifts',
                    description:"f you need flowers in Astoria look no further than here. We've been getting our flowers here for six years and as far as vetting goes this is our go to place. Family run and beautiful inside and out. Ditmars Flowers & Gifts. We thank them for their generous contribution to the hunt.",
                    letter:'I',
                    challenge:"Welcome to Ditmars Florist. Creatively pose amongst the flowers with your team."
                },
                'Flattopps':{
                    title:'Flattopps',
                    description:"ome one come all to this badass, funky hip hop tone. Flattopps keeps it going and puts you in the dope and fun times zone",
                    letter:'C',
                    challenge:"Give a dollar to the bartender, bartender picks a song, shoot a music video while sipping on a free slushy."
                },
                'The-Little-Soap-Shop':{
                    title:'The Little Soap Shop',
                    description:"t just keeps getting better. Introducing our new, kind and wonderfully crafty vetted tone setter, The Little Soap Shop. We are happy to announce their gracious involvement in our scavenger hunt. If you haven't heard of them yet, you certainly will soon.",
                    letter:'I',
                    challenge:"If they are open, stop by, hi-five the owner and have them direct you to a meaningful photo. FYI they are moving locations soon."
                },
                'The-Brass-Owl':{
                    title:'The Brass Owl',
                    description:"e are elated to welcome yet another incredible sponsor to the vetted Whatever The Mood team. We love Astoria and we love The Brass Owl boutique. The staff is kind, the products are beautiful, and the overall vibe is one of ease and beauty.",
                    letter:'W',
                    challenge:"Welcome to The Brass Owl. Craft a beautiful photo with items that inspire. Make it pretty ... but ask Nicole first."
                },
                'Zhicay-Shoe-Repair':{
                    title:'Zhicay Shoe Repair',
                    description:"eet Gonzalo! He is a wonderful and kind man who is better with a shine and a shoe than any we've met. His tone is sincere and he's ready to repair. Zhicay shoe repair.",
                    letter:'M',
                    challenge:"Speak to Ed at lunch."
                },
                'Kelsey':{
                    title:'Kelsey',
                    description:"eet this wonderfully bright tone setter! Kelsey has been instrumental in our growth and progress and helps us begin each day with grace. We thank her for her commitment and support.",
                    letter:'M',
                    challenge:"She's an angel, just say hi."
                },
                'Luludi':{
                    title:'Luludi',
                    description:"e now have the sincere privilege of partnering with Luludi. They offer terrarium classes and workshops and quality care. To capture the quality of a person and their business in one photo can be quite challenging but we did our best with this image donated from a local artist and friend.",
                    letter:'W',
                    challenge:"enjoy this mood and refer to your printed paper sheet for further instructions."
            },
            'Oak-Point-Health-and-Vitality-Centre':{
            title:'Oak Point Health and Vitality Centre',
                description:"e are beyond humbled to be partnered with the one and only Oak Point Health & Vitality Centre. I had my first acupuncture session with them today and I can say without any doubt it was a special and healing experience. You won't have to choose to trust when you're there, you'll be guided to it with grace and care.",
                letter:'W',
                challenge:"We all need rest and genuine healers need it too. Stop by to see the exterior and get discounts too."
        },
        'Bagel-House':{
            title:'Bagel House',
                description:"hen you go to The Bagel House, you're not just going to get a bagel. The owner, Steve, is a rare man of discipline and pure love. I am overwhelmed by their kindness, community support, and terrific bagels. When you ask for a picture here, Steve comes out from behind the counter and brings the staff and community with him. What a guy and what a place. They couldn't be more of a Whatever The Mood tone setter. We'll be coming here for life.",
                letter:'W',
                challenge:"Breakfast served, from the community, to the community, as honest, disciplined and genuine as a bagel shop can get."
        },
        'Delicious-Deli':{
            title:'Delicious Deli',
                description:"hen you come to Delicious Delicatessen, you're not just coming for a great sandwich or fresh fruit, you're coming for love and long lasting friendship. These guys are well vetted and are truly for the community and spreading love. They have generously donated fruit to the hunt and we're thrilled to support them. Pay them a visit and feel the love. 24th Ave and 28th street. Get there, it's delicious",
                letter:'W',
                challenge:"Stop by delicious deli, thank them for the free fruit, hi-five the owner and enjoy discounted juice."
        },
        'Sparrow-Tavern':{
            title:'Sparrow Tavern',
                description:"his may seem like a strange image to represent a bar, but The Sparrow Tavern isn't your ordinary bar. The interior is eclectic and cool, the owner and staff are real, kind, and artistic human beings. The food is great and they're open until 4am (if that's what you're into). Come by this Astoria original, there are legends everywhere you look.",
                letter:'T',
                challenge:"Welcome to Sparrow. Have a free adult Irish Coffee beverage. Find a light fixture that speaks to you and Instagram it, so we can feel it too."
        },
        'Versa-Fit':{
            title:'Versa Fit',
                description:"e're thrilled to welcome a vetted personable and skilled fitness extraordinaire to our growing team of vetted tone setters. John is a man for the community and from the community and he is definitely an absolute pleasure to be around",
                letter:'W',
                challenge:"After we break bread let's warm up with John. What could be better, let's carry on."
        },
        'Supernova':{
            title:'Supernova',
                description:"Wondering where I got these tattoos? We are belated to announce Supernova as our one and only go-to vetted tattoo artist. Intuition led me to them and I have built a business from these tattoos. I'm humbled and grateful to know them and to have them as a lifetime partner with Whatever The Mood. You must go here and mention us when you do, that's all I need to say.",
                letter:'W',
                challenge:"What is the Supernova buzzer."
        },
        'The-Stonework':{
            title:'The-Stonework',
                description:" brilliant well crafted tone is coming to Ditmars soon and we're so excited to share a tease of what's to come. Take a second to notice the care and craft taken just to cover the windows while they're finishing construction and design. I've already said it and I certainly mean it; we'll be their number one customer.",
                letter:'A',
                challenge:"Need legendary menswear. See Ed over lunch."
        },'Inside-Astoria':{
            title:'Inside Astoria',
                description:"hatever family friendly and locally sourced gift you may need, Inside Astoria is a well vetted tone setter and most certainly is a place to get it. We are so happy to include them in our scavenger hunt and for their generous support! There will be prizes!",
                letter:'W',
                challenge:"As a group, capture the spirit of Astoria using items in the store."
        },'Lillian':{
            title:'Lillian',
                description:"eet our vetted and beautiful friend, Lillian. She is a rare and wonderful spirit who has always provided positivity and love to our cause and to life in general. We are so pleased to guide you to her pleasantness the day of our first event. We love this lady!",
                letter:'M',
                challenge:"Just say hi."
        },



    }[this.props.params.id];

        let img2 = require(`../../img/dest/${this.props.params.id}.jpg`);

        return (


            <div className="page animated fadeinright">

                <div className="hero-header bg-3 animated fadeindown">
                    <img src={img2}/>
                    <div className="floating-button animated bouncein delay-3">
                        {/*<span className="btn-floating resize btn-large waves-effect waves-light accent-color btn z-depth-1">*/}
                          {/*<i className="ion-android-bookmark"></i>*/}
                        {/*</span>*/}
                    </div>
                </div>

                <div className="animated article fadeinup delay-1">
                    <div className="p-20">
                        <h2 className="title">{this.props.title}</h2>

                        <p className="text-flow"><span className="dropcap">{destInfo.letter}</span> {destInfo.description}</p>
                        {/*<blockquote className="primary-border">"{destInfo.quote}"</blockquote>*/}
                        <h3>Objective</h3>
                        <p className="text-flow"> {destInfo.challenge} </p>
                        <p className="text-flow"> <Link
                            to={`/congrats`}
                            className="btn-large"
                        >Check in</Link>
                        </p>


                    </div>

                </div>
            </div>
        );

    }
});

export default Destination;
