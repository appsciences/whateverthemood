
import React from 'react';

const ToolBar = React.createClass({


    render() {

        return (

            <div id="toolbar" className="primary-color">
                <div className="title">Whatever the Mood</div>
                <div className="open-right" id="open-right" data-activates="slide-out">
                    <i className="ion-android-menu"></i>
                </div>
            </div>        );

    }
});

export default ToolBar;
