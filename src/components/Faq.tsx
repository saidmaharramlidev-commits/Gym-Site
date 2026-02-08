import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Reviews() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
            console.log(event)
        };









    return (
        <div id="mainFaq">
            <span id="faqTag">FAQ</span>

            <h1 id="headerOfFaq">Got Questions? We’ve Got Answers</h1>

            <div id="mainAccordion">

                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{ backgroundColor: "#121212", color: "white" }}

                >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={expanded === "panel1" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />} >
                        <Typography component="span">What membership plans do you offer?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            We offer flexible plans designed for different goals, including monthly, quarterly, and annual memberships. Each plan gives full access to our training areas and facilities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel2" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content"
                        id="panel1d-header">
                        <Typography component="span">Can I cancel or freeze my membership?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Yes. You can cancel or freeze your membership according to the terms of your plan. Freezing options are available for vacations or special circumstances.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel3" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">Do you offer personal training?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            Absolutely. Our certified trainers provide one-on-one and group training sessions tailored to your fitness level and goals.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel4" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">Is the gym suitable for beginners?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            100%. Whether you’re just starting or experienced, our trainers and programs are designed to support all fitness levels.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel5" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">What are your opening hours?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            We’re open early and close late to fit your schedule. Exact hours may vary by location—check our schedule for details.
                        </Typography>
                    </AccordionDetails>
                </Accordion>




                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ backgroundColor: "#121212", color: "white" }}>
                    <AccordionSummary
                        expandIcon={expanded === "panel6" ? <RemoveCircleOutlineIcon sx={{ color: "white" }} /> : <AddCircleOutlineIcon sx={{ color: "white" }} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span">Are there any hidden fees?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "silver" }}>
                        <Typography>
                            No hidden fees. All pricing is transparent, and everything included in your plan is clearly explained before you join.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    )
}

export default Reviews