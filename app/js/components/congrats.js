import React from 'react';
import { Link } from 'react-router';


const Congrats = React.createClass({


    render() {

        return (

            <div className="page animated fadeinright">

                <div className="hero-header bg-3 animated fadeindown">
                    <div className="floating-button animated bouncein delay-3">
                        {/*<span className="btn-floating resize btn-large waves-effect waves-light accent-color btn z-depth-1">*/}
                          {/*<i className="ion-android-bookmark"></i>*/}
                        {/*</span>*/}
                    </div>
                </div>

                <div className="animated article fadeinup delay-1">
                    <div className="p-20">
                        <h2 className="title">{this.props.title}</h2>

                        <h3>Well done!</h3>
                        <p className="text-flow"> <Link
                            to={`/`}
                            className="btn-large"
                        >On to next adventure</Link> </p>


                    </div>

                </div>
            </div>
        );

    }
});

export default Congrats;
