import * as React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import MapIcon from '@mui/icons-material/Map';

import Thirteen from './13.png';
import Schema from './schema.png';
import Otc from './open_to_collaborate.png';
import Ss from './tk_ss.png';
import Tk from './tk.png';
import Tka from './tk_a.png';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
};

export default function HomeButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='button'>
            <Button onClick={handleOpen}>INFOS AND LEGEND</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="overf">
                        <div className="about">
                            <div className="descr">Ecological and cosmological calendars are living knowledge systems that continuously incorporate the body-cosmos relationship that stems from generations of experiential knowledge and shared insights within community contexts. These are grounded in the understanding of time and cosmological phenomenologies in relation to ecological processes and the movement of celestial bodies.<br />Like any Indigenous people, the Izzi people have their own calendar, which is presented here graphically with the aim of documenting and transmitting their knowledge.<br /> <br />The calendar is drawn with Izzi People cultural leaders through the scientific coordination and documentation work of Dr. Okezie Kelechukwu. Instructions on how to read the calendar are given in the legend.<br /><br /></div>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <b>HOW TO READ AND LEGEND</b>
                                </AccordionSummary><hr />
                                <AccordionDetails style={{ backgroundColor: "#d9dddc50" }}>
                                    Distance from the centre defines the cosmological relationship. The closer the event/practice/manifestation is represented to the centre, the more it relates to the beings of the underworld; the further away it is, the stronger the relationship with the beings of the sky/cosmos. At the centre of the calendar is the pot that Izzi view as the Source of Life.<br /><br /><img src={Schema} style={{ width: 200 }} /><br /><br /><br />
                                    Izzi people have 13 calendar months and five weekdays, which are market names (<i>Azua, Onuvu, Okpo, Nkwegu</i>, and <i>Ohoke</i>).<br /><br /><img src={Thirteen} style={{ width: 200 }} /><br /><br /><br />
                                    For ease of understanding, please read the calendar clockwise from the beginning of the farming season (October):<br /><br /><br />1. Plants drop their leaves and sparrows (<i>Obe, Karaka</i>) appear. This is evidence the farming season has arrived.<br /><hr /><br />
                                    2. Before planting, farmers slash land and allow the leaves to remain in the soil. Leaf droppings serve for mulching and manures.<br /><hr /><br />
                                    3. Welding the special large hoe known as the <i>Abakaliki hoe</i>, farmers pile soil into large mounds according to soil characteristics to grow yam, the region's leading staple food. Yam mounds in swampy areas could be high as 118 cm and have a circumference of about 540 cm.<br /><hr /><br />
                                    4. Mounds are sown with <i>Diascorrea spp</i>. Yams are intercropped with <i>Capsicum Spp</i> and <i>Colocasia Xanthosoma</i>, known locally as <i>Ede</i>. More recently, <i>Manihot spp</i> has also been introduced for intecropping.<br /><hr /><br />
                                    5. Yams harvesting<br /><hr /><br />
                                    6. Yams are sorted, cleaned and kept in the barns, known locally as <i>Obaji</i> barns <br /><hr /><br />
                                    <Link to="/Ojiiji">A. Ojiiji festival <u>(open the page with details)</u></Link><br /><hr /><br />
                                    <Link to="/Otutara">B. Otutara festival <u>(open the page with details)</u></Link><br /><hr /><br />
                                    C. Okemini is a peace festival, aiming to bumper harvest and to ask for protection and prosperity. Masquerades and cultural war dances are performed.<br /><hr /><br />
                                    D. The Okpuruke fishing festival takes place at the natural lake of Okpuru uke, near Inyimagu. Rituals are performed involving the women living in the nine villages that constitute the Inyimagu community.
                                    <br /><br />
                                    {/* <p style={{border:"1px solid #88888850", padding:"5px"}}><img src={Ss} style={{ width: 30 }} /><br />TK Secret / Sacred<br /><p style={{ fontSize: 12, lineHeight: 1.15 }}>Specific knowledge linked to festival rituals are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.</p></p><hr /><br /> */}
                                    E. During the Ogba Aji festival of the Inyimegu community, gifts are exchanged, cultural dances and masquerade are performed.<br /><hr /><br />
                                    F. During the Ikpuru achi festival that takes place in Nkaliki Achara unuhu, traditional rain making and dances are performed, while fishing skills are demonstrated.
                                    <br /><br />
                                    {/* <p style={{border:"1px solid #88888850", padding:"5px"}}><img src={Ss} style={{ width: 30 }} /><br />TK Secret / Sacred<br /><p style={{ fontSize: 12, lineHeight: 1.15 }}>Specific knowledge linked to festival rituals are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.</p></p><br /><br /> */}
                                    <hr style={{ height: 4, color: "#8dc63f", backgroundColor: "#8dc63f", border: "none" }}></hr>Farming season<br /><br />
                                    <hr style={{ height: 4, color: "#1c75bc", backgroundColor: "#1c75bc", border: "none" }}></hr>Raining season<br /><br />
                                </AccordionDetails>
                            </Accordion><br /><br /><br />

                            <div className="detail" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}><br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                                <Link style={{ fontSize: 14 }} to="/Ojiiji"><AddCircleOutlineIcon />  (A) OJIIJI FESTIVAL</Link><br />
                                <Link style={{ fontSize: 14 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA FESTIVAL</Link><br /><br /><br /><br />
                            </div>

                            <div className="detail" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}><br /> <br /><b>MAPS</b><hr /><br />
                                <Link to="/Language" target="_blank"><MapIcon style={{ width: 20 }} />  Boundaries of the Izzi language-speaking areas</Link><br /><br /><br /><br />
                            </div>

                            <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}>
                                <b>NOTICES AND RELATED RESEARCH PAPERS</b><hr />
                                <br /><img src={Otc} style={{ width: 30 }} /><br /><b>Open to Collaborate</b><br />The involved researchers are committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br />
                                <br /><img src={Tk} style={{ width: 30 }} /><br /><b>Traditional Knowledge</b><br />The TK (Traditional Knowledge) Notice is a visible notification that there are accompanying cultural rights and responsabilities that need further attention for any future sharing and use of this material.<br /><br />Local Contexts Project ID : 6914414e-a315-4e5c-8b2f-839de7d93509<br /><hr />
                                <br />* Okezie Kelechukwu, Alessandro Musetta (2024), Eco-Climate Memory of Yam Production of Izzi People, Southeast Nigeria{/* <SaveAltIcon /> */}<br />
                                <br /><a href="https://www.alessandromusetta.com/cloud/CALENDARIO_ECOCOSMOLOGICO/CALENDARIO_ECOCOSMOLOGICO.pdf">** Multilingual instructions to create an eco-cosmological calendar<br /><SaveAltIcon /></a><br /><br />
                            </div>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}



export function OjiijiButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='button'>
            <Button onClick={handleOpen}>INFOS AND LEGEND</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="overf">
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

                            <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}>
                                <b>TRADITIONAL KNOWLEDGE LABELS</b><hr />
                                {/* <br /><img src={Tka} style={{ width: 30 }} /><br /><b>TK Attribution</b><br />Any knowledge and histories referring to the Ojiiji festival, including the masquerades and the <i>okweregede</i> war dance must be attributed to the Izzi people.<br /><br />
                                <br /><img src={Ss} style={{ width: 30 }} /><br /><b>TK Secret / Sacred</b><br />Specific knowledge linked to festival rituals and the geographical location of the shrines are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.<br /> */}
                            </div>

                            <div className="related" style={{ border: "1px solid #88888850", padding: "5px", marginBottom: "5px" }}>
                                <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                                <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                                <Link style={{ fontSize: 15 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA FESTIVAL</Link><br /><br /><br /><br />
                            </div>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}


export function OtutaraButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='button'>
            <Button onClick={handleOpen}>INFOS AND LEGEND</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="overf">
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
                </Box>
            </Modal>
        </div>
    );
}