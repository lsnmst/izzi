import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import { MapInteractionCSS } from 'react-map-interaction';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Otutaraimg from './otutara.png';

class Otutara extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: .45,
                translation: { x: 100, y: 50 }
            }
        };
    }

    render() {
        const { scale, translation } = this.state;

        return (

            <><Link to="/"><div className="title">IZZI PEOPLE ECOLOGICAL AND COSMIC CALENDAR</div></Link>

                <div className="containercalendar">

                    <div className="menu">
                        <div className="about">

                            <div className="titledetail">OTUTARA CELEBRATION</div>

                            <Accordion defaultExpanded={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails className="Ojiijicss">
                                    1.  Otuara is celebrated on Nkwegu market day (4th day of the week)<br /><br />
                                    2. The day after Otutara, Ohoke market day (5th day of the week), village is cleaned and wizards, witches and witchcrafts are drived away<br /><br />
                                </AccordionDetails>
                            </Accordion><hr />

                            <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                            <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                            <Link style={{ fontSize: 15 }} to="/Ojiiji"><AddCircleOutlineIcon />  (B) OJIIJI CELEBRATION</Link><br /><br /><br /><br />

                        </div>
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
                            btnClass={"aoa"}
                        >
                            <img src={Otutaraimg} />
                        </MapInteractionCSS>
                    </div>

                </div></>
        );
    }
}

export default Otutara;
