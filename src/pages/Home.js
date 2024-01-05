import React, { Component, Use } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import { MapInteractionCSS } from 'react-map-interaction';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapIcon from '@mui/icons-material/Map';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Calendar from './calendar_webtest.png';
import HomeButton from "./buttons";
import Thirteen from './13.png';
import Otc from './open_to_collaborate.png';
import Ss from './tk_ss.png';
import Tk from './tk.png';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: .26,
                translation: { x: 100, y: 50 }
            }
        };
    }

    render() {
        const { scale, translation } = this.state;

        return (

            <><div className="title">IZZI PEOPLE ECOLOGICAL AND COSMIC CALENDAR</div>

                <div className="containercalendar">

                    <div className="menu">
                        <div className="about">
                            <div className="descr">Ecological and cosmic calendars are living knowledge systems that continuously incorporate the body-cosmos relationship that stems from generations of experiential knowledge and shared insights within community contexts. These are grounded in the understanding of time and cosmological phenomenologies in relation to ecological processes and the movement of celestial bodies.<br />Like any Indigenous people, the Izzi people have their own calendar, which is presented here graphically with the aim of documenting and transmitting their knowledge.<br /> <br />The calendar is drawn with Izzi People cultural leaders through the scientific coordination and documentation work of Dr. Okezie Kelechukwu. Instructions on how to read the calendar are given in the legend.<br /><br /></div>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails>
                                    Izzi people have 13 calendar months and five weekdays, which are market names (<i>Azua, Onuvu, Okpo, Nkwegu</i>, and <i>Ohoke</i>)<br /><br /><img src={Thirteen} style={{ width: 90 }} /><br /><br /><br />
                                    1. Plants drop their leaves and sparrows (<i>Obe, Karaka</i>) appear. This is evidence the farming season has arrived.<br /><hr /><br />
                                    2. Before planting, farmers slash land and allow the leaves to remain in the soil. Leaf droppings serve for mulching and manures.<br /><hr /><br />
                                    3. Welding the special large hoe known as the <i>Abakaliki hoe</i>, farmers pile soil into large mounds according to soil characteristics to grow yam, the region's leading staple food. Yam mounds in swampy areas could be high as 118 cm and have a circumference of about 540 cm.<br /><hr /><br />
                                    4. Mounds are sown with <i>Diascorrea spp</i>. Yams are intercropped with <i>Capsicum Spp</i> and <i>Colocasia Xanthosoma</i>, known locally as <i>Ede</i>. More recently, <i>Manihot spp</i> has also been introduced for intecropping.<br /><hr /><br />
                                    5. Yams harvesting<br /><hr /><br />
                                    6. Yams are sorted, cleaned and kept in the barns, known locally as <i>Obaji</i> barns <br /><hr /><br />
                                    A. Ojiiji festival<br /><hr /><br />
                                    B. Otutara festival<br /><hr /><br />
                                    C. Okemini is a peace festival, aiming to bumper harvest and to ask for protection and prosperity. Masquerades and cultural war dances are performed.<br /><hr /><br />
                                    D. The Okpuruke fishing festival takes place at the natural lake of Okpuru uke, near Inyimagu. Rituals are performed involving the women living in the nine villages that constitute the Inyimagu community.
                                    <br /><br /><img src={Ss} style={{ width: 30 }} /><br />TK Secret / Sacred<br /><p style={{ fontSize: 12, lineHeight: 1.15 }}>Specific knowledge linked to festival rituals are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.</p><br /><hr /><br />
                                    E. During the Ogba Aji festival of the Inyimegu community, gifts are exchanged, cultural dances and masquerade are performed.<br /><hr /><br />
                                    F. During the Ikpuru achi festival that takes place in Nkaliki Achara unuhu, traditional rain making and dances are performed, while fishing skills are demonstrated.
                                    <br /><br /><img src={Ss} style={{ width: 30 }} /><br />TK Secret / Sacred<br /><p style={{ fontSize: 12, lineHeight: 1.15 }}>Specific knowledge linked to festival rituals are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.</p><br /><br /><br /><br />
                                    <hr style={{ height: 4, color: "#8dc63f", backgroundColor: "#8dc63f", border: "none" }}></hr>Farming season<br /><br />
                                    <hr style={{ height: 4, color: "#1c75bc", backgroundColor: "#1c75bc", border: "none" }}></hr>Raining season<br /><br />
                                </AccordionDetails>
                            </Accordion>

                            <div className="detail"><br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                                <Link style={{ fontSize: 14 }} to="/Ojiiji"><AddCircleOutlineIcon />  (A) OJIIJI FESTIVAL</Link><br />
                                <Link style={{ fontSize: 14 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA FESTIVAL</Link><br /><br /><br /><br />
                            </div>

                            <div className="detail"><br /> <br /><b>MAPS</b><hr /><br />
                                <Link to="/Language"  target="_blank"><MapIcon style={{ width: 20 }} />  Boundaries of the Izzi language-speaking areas</Link><br /><br /><br /><br />
                            </div>

                            <div className="related">
                                <b>NOTICES AND RELATED RESEARCH PAPERS</b><hr />
                                <br /><img src={Otc} style={{ width: 30 }} /><br /><b>Open to Collaborate</b><br />The involved researchers are committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br />
                                <br /><img src={Tk} style={{ width: 30 }} /><br /><b>Traditional Knowledge</b><br />The TK (Traditional Knowledge) Notice is a visible notification that there are accompanying cultural rights and responsabilities that need further attention for any future sharing and use of this material.<br /><br />Local Contexts Project ID : 6914414e-a315-4e5c-8b2f-839de7d93509<br /><hr />
                                <br /><a href="">Okezie Kelechukwu (2024), Ecological and Climate Memory of Yam Cultivation of Izzi People, Southeast Nigeria<br /><SaveAltIcon /></a><br /><br />
                            </div>

                        </div>
                    </div>

                    <div className="calendar">
                        <MapInteractionCSS
                            showControls
                            value={this.state.value}
                            onChange={(value) => this.setState({ value })}
                            minScale={0.1}
                            maxScale={1}
                            btnClass={"aoa"}
                        >
                            <img src={Calendar} />
                        </MapInteractionCSS>
                    </div>

                    <HomeButton />

                </div ></>
        );
    }
}

export default Home;
