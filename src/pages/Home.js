import React, { Component } from "react";
import '../index.css';
import { MapInteractionCSS } from 'react-map-interaction';

import Calendar from './calendar_webtest.png';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: .26,
                translation: { x: 50, y: 50 }
            }
        };
    }

    render() {
        const { scale, translation } = this.state;

        return (

            <><div className="title">IZZI PEOPLE ECOLOGICAL CALENDAR</div>

                <div className="containercalendar">

                    <div className="menu">
                        then use the `scale`, `translation`, and `onChange` props.
                    </div>

                    <div className="calendar">
                        {/* <MapInteractionCSS>
                            <img src={Calendar} />
                        </MapInteractionCSS> */}
                        <MapInteractionCSS 
                            showControls
                            value={this.state.value}
                            onChange={(value) => this.setState({ value })}
                            minScale={0.1}
                            maxScale={1}
                        >
                            <img src={Calendar}  />
                        </MapInteractionCSS>

                    </div>

                </div></>
        );
    }
}

export default Home;
