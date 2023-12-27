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

import Otc from './open_to_collaborate.png';


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
                </Box>
            </Modal>
        </div>
    );
}