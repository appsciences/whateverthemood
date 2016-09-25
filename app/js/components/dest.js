
import React from 'react';

const Destination = React.createClass({


    render() {
        let destInfo = {
            'Tyler-Clayton':{
                title:'Tyler Clayton',
                description:"eet Tyler Clayton Appel. We were compelled to bring his tone on board for our first event after we heard him playing the streets of Astoria. His music is beautiful and he is a determined advocate for the paid artist. We definitely stand behind and support that mood. Hear him for yourself, he'll be playing the streets of Astoria this Sunday.",
                letter:'M',
                challenge:"Stay a while, he's worth every second. Shoot a video or picture, don't forget to tip"
            }
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


                    </div>

                </div>
            </div>
        );

    }
});

export default Destination;
