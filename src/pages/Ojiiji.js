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

import Otc from './open_to_collaborate.png';
import Ss from './tk_ss.png';
import Tk from './tk.png';
import Tka from './tk_a.png';


class Ojiiji extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: .15,
                translation: { x: 100, y: 50 }
            }
        };
    }

    render() {
        const { scale, translation } = this.state;

        return (

            <><Link to="/"><div className="title">IZZI PEOPLE ECOLOGICAL AND COSMOLOGICAL CALENDAR</div></Link>

                <div className="containercalendar">

                    <div className="menu">
                        <div className="about">

                            <div className="titledetail">OJIIJI FESTIVAL</div>

                            <Accordion defaultExpanded={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails className=" ">
                                    Ojiji festival is an expression that the outgoing year was favourable and rewarding. It symbolises a year of a bountiful harvest and marks the beginning of the New Year signifying joy for the arrival of the new yam, heralding the end of the famine period.<br /><br /><br />
                                    1. After the new moon is sighted, the elders know as the <i>Ishiuke</i> visit the forest to perform certain rites.<br /><hr /><br />
                                    2. A week before the Ojiiji, four <i>Ndiuke</i> from Amagu and two <i>Ndiuke</i> from Ebia assemble at Ohoke Anmegu and, from there, go the Enya Ojiiji shrine. The Enya Ojiji shrine is located at Anmegu called <i>ntegogu</i>.<br /><hr /><br />
                                    3. Ojiiji is celebrated the next <i>Onuvu</i> market day (2nd day of the week).<br /><br />
                                    The Amagu Cultural Centre is today the hub for the celebration and among the activities done on the day are the roasting, sharing and eating of the yam after prayers and incantations by the <i>Ishiuke</i>. Thereafter, the various masquerades entertain spectators, and the <i>okweregede</i> war dance displays their war tact with machetes.<br /><br />
                                </AccordionDetails>
                            </Accordion>

                            {/* <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}><br /><br />
                                <b>TRADITIONAL KNOWLEDGE LABELS</b><hr />
                                <br /><img src={Tka} style={{ width: 30 }} /><br /><b>TK Attribution</b><br />Any knowledge and histories referring to the Ojiiji festival, including the masquerades and the <i>okweregede</i> war dance must be attributed to the Izzi people.<br /><br />
                                <br /><img src={Ss} style={{ width: 30 }} /><br /><b>TK Secret / Sacred</b><br />Specific knowledge linked to festival rituals and the geographical location of the shrines are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.<br />
                            </div> */}

                            <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}><br /><br />
                                <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                                <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                                <Link style={{ fontSize: 15 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA CELEBRATION</Link><br /><br /><br /><br />
                            </div>

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
