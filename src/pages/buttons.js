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

import Thirteen from './13.png';
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
                            <div className="descr">Ecological and cosmic calendars are living knowledge systems that continuously incorporate the relationship bodies-cosmo and embody ancestrality. Like any Indigenous people, the Izzi people have their own calendar, which is presented here graphically with the aim of documenting and transmitting their knowledge.<br /> <br />The calendar is drawn with Izzi People cultural leaders through the scientific coordination and documentation work of Dr. Okezie Kelechukwu. Instructions on how to read the calendar are given in the legend.<br /><br /></div>

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
                                <Link style={{ fontSize: 15 }} to="/Ojiiji"><AddCircleOutlineIcon />  (A) OJIIJI FESTIVAL</Link><br />
                                <Link style={{ fontSize: 15 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA FESTIVAL</Link><br /><br /><br /><br />
                            </div>

                            <div className="related">
                                <b>NOTICES AND RELATED RESEARCH PAPERS</b><hr />
                                <br /><img src={Otc} style={{ width: 30 }} /><br /><b>Open to Collaborate</b><br />The involved researchers are committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br />
                                <br /><img src={Tk} style={{ width: 30 }} /><br /><b>Traditional Knowledge</b><br />The TK (Traditional Knowledge) Notice is a visible notification that there are accompanying cultural rights and responsabilities that need further attention for any future sharing and use of this material.<br />
                                <br /><a href="">Okezie Kelechukwu (2024), Ecological and Climate Memory of Yam Cultivation of Izzi People, Southeast Nigeria<br /><SaveAltIcon /></a><br /><br />
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

                            <div className="related">
                                <b>TRADITIONAL KNOWLEDGE LABELS</b><hr />
                                <br /><img src={Tka} style={{ width: 30 }} /><br /><b>TK Attribution</b><br />Any knowledge and histories referring to the Ojiiji festival, including the masquerades and the <i>okweregede</i> war dance must be attributed to the Izzi people.<br /><br /> 
                                <br /><img src={Ss} style={{ width: 30 }} /><br /><b>TK Secret / Sacred</b><br />Specific knowledge linked to festival rituals and the geographical location of the shrines are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.<br />
                            </div>

                            <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                            <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                            <Link style={{ fontSize: 15 }} to="/Otutara"><AddCircleOutlineIcon />  (B) OTUTARA FESTIVAL</Link><br /><br /><br /><br />

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
                                The ceremony of the Otutara festival is used to invoke the blessings of the ancestors and parents of the living members of the family.<br /><br /><br />
                                    1. Otuara is celebrated on <i>Nkwegu</i> market day (4th day of the week), after the new moon is sighted.<br />The eldest member of the family conducts the rites and prayers on behalf of the entire members of the family. A special soup made of from <i>akparata</i> seed is prepared with meat and fish.<br /><hr /><br />
                                    2. The day after Otutara, <i>Ohoke</i> market day (5th day of the week), is the <i>Okpo</i> day, when village is cleaned and wizards, witches and witchcrafts are drived away<br /><br />
                                </AccordionDetails>
                            </Accordion>

                            <div className="related">
                                <b>TRADITIONAL KNOWLEDGE LABELS</b><hr />
                                <br /><img src={Tka} style={{ width: 30 }} /><br /><b>TK Attribution</b><br />Any knowledge and histories referring to the Otutara festival must be attributed to the Izzi people.<br /><br /> 
                                <br /><img src={Ss} style={{ width: 30 }} /><br /><b>TK Secret / Sacred</b><br />Specific knowledge linked to festival rituals are considered sacred, secret or private, and only certain people or families can and should have access to them. This label indicates that there is additional knowledge about a certain subject that cannot be shared on the website.<br />
                            </div>

                            <br /> <br /><b>CALENDAR DETAILS</b><hr /><br />
                            <Link style={{ fontSize: 15 }} to="/"><AddCircleOutlineIcon />  CALENDAR OVERVIEW</Link><br />
                            <Link style={{ fontSize: 15 }} to="/Ojiiji"><AddCircleOutlineIcon />  (B) OJIIJI FESTIVAL</Link><br /><br /><br /><br />

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}