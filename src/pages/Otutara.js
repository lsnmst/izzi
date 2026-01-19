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
import { OtutaraButton } from "./buttons";

import Otc from './open_to_collaborate.png';
import Ss from './tk_ss.png';
import Tk from './tk.png';
import Tka from './tk_a.png';

class Otutara extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: .25,
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

                            <div className="titledetail">OTUTARA FESTIVAL</div>

                            <Accordion defaultExpanded={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails className="Ojiijicss">
                                    The ceremony of the Otutara festival is used to invoke the blessings of the ancestors and parents of the living members of the family. Otutara is done twice in year.<br />The first one called the lesser Otutara is done between March and April and it is known as the <i>utara onanwu</i>. It is more of an immediate family affair.<br />The main Otutara is done in September and is mainly a two day event. The feeding and slaughter of animals to feed late father and mother and ancestors is done on the first day while the second day is more of festival and merriment where masquerades are displayed, cooking competition and recognition of best cook.<br /><br /><br />
                                    1. Otuara is celebrated on <i>Nkwegu</i> market day (4th day of the week), after the new moon is sighted.<br />The eldest member of the family conducts the rites and prayers on behalf of the entire members of the family. A special soup made of from <i>akparata</i> seed is prepared with meat and fish.<br /><hr /><br />
                                    2. The day after Otutara, <i>Ohoke</i> market day (5th day of the week), is the <i>Okpo</i> day, when village is cleaned and wizards, witches and witchcrafts are drived away<br /><br />
                                </AccordionDetails>
                            </Accordion>

                            {/* <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}>
                                <b>TRADITIONAL KNOWLEDGE LABELS</b><hr />
                                <br /><img src={Tka} style={{ width: 30 }} /><br /><b>TK Attribution</b><br />Any knowledge and histories referring to the Otutara festival must be attributed to the Izzi people.<br /><br />
                                <br /><img src={Ss} style={{ width: 30 }} /><br /><b>TK Secret / Sacred</b><br />Specific knowledge linked to festival rituals are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.<br />
                            </div> */}

                            <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}>
                                <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                                <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                                <Link style={{ fontSize: 15 }} to="/Ojiiji"><AddCircleOutlineIcon />  (B) OJIIJI FESTIVAL</Link><br /><br /><br /><br />
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
                            <img src={Otutaraimg} />
                        </MapInteractionCSS>
                    </div>

                    <OtutaraButton />

                </div></>
        );
    }
}

export default Otutara;
