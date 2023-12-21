import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import { MapInteractionCSS } from 'react-map-interaction';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Ojiijimg from './ojiiji.png';
import { OjiijiButton } from "./buttons";

class Ojiiji extends Component {

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

                            <div className="titledetail">OJIIJI CELEBRATION</div>

                            <Accordion defaultExpanded={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails className=" ">
                                    1. After the new moon is sighted, the Ishiuke visit the forest (sacred natural site?) for a week<br /><br />
                                    2. A week before the Ojiiji, four Ndiuke from Amagu and two Ndiuke from Ebia assemble at Ohoke Anmegu and, from there, go the Enya Ojiiji shrine<br /><br />
                                    3. Ojiiji is celebrated on Onuvu market day (2nd day of the week)<br /><br />
                                </AccordionDetails>
                            </Accordion><hr />

                            <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                            <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                            <Link style={{ fontSize: 15 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA CELEBRATION</Link><br /><br /><br /><br />

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
                            <img src={Ojiijimg} />
                        </MapInteractionCSS>
                    </div>

                    <OjiijiButton />

                </div></>
        );
    }
}

export default Ojiiji;
