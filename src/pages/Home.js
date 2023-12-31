import React, { Component, Use } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import { MapInteractionCSS } from 'react-map-interaction';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Calendar from './calendar_webtest.png';
import HomeButton from "./buttons";
import Otc from './open_to_collaborate.png';


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
                            <div className="descr">Ecological and cosmic calendars are living knowledge systems that continuously incorporate the relationship bodies-cosmo and embody ancestrality. Like any Indigenous people, the Izzi people have their own calendar, which is presented here graphically with the aim of documenting and transmitting their knowledge.<br /> <br />The calendar is drawn with Izzi People cultural leaders through the scientific coordination and documentation work of Dr. Okezie Kelechukwu<br /><br /></div>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails>
                                    1. Certain plants (?) dropping leaves and sparrow (Obe, Karaka) appears. Farming season has arrived<br /><br />
                                    2. Waiting for leap droppings for mulching and manures<br /><br />
                                    3. Welding with the use of the Abakaliki hoe<br /><br />
                                    4. Sowing<br /><br />
                                    5. Harvesting<br /><br />
                                    6. Conservation for consumption<br /><br />
                                    A. Ojiiji celebration<br /><br />
                                    B. Otutara celebration<br /><br /><br /><br />
                                    <hr style={{ height: 4, color: "#8dc63f", backgroundColor: "#8dc63f", border: "none" }}></hr>Farming season<br /><br />
                                    <hr style={{ height: 4, color: "#1c75bc", backgroundColor: "#1c75bc", border: "none" }}></hr>Raining season<br /><br />
                                </AccordionDetails>
                            </Accordion>

                            <div className="detail"><br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                                <Link style={{ fontSize: 15 }} to="/Ojiiji"><AddCircleOutlineIcon />  (A) OJIIJI CELEBRATION</Link><br />
                                <Link style={{ fontSize: 15 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA CELEBRATION</Link><br /><br /><br /><br />
                            </div>

                            <div className="related">
                                <b>NOTICES AND RELATED RESEARCH PAPERS</b><hr />
                                <br /><img src={Otc} style={{ width:30 }} /><br /><b>Open to Collaborate</b><br />The involved researchers are committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br />
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