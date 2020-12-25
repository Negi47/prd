import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import TextField from '../../FormWidget/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useBracingTypeListContext } from '../../BracingTypeListProvider';
import Select from '../../FormWidget/Select';

export default function StructuralDetailsFieldset() {

    const bracingTypeListSubject = useBracingTypeListContext();
    
    const content = React.useMemo(
        () => (
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <Select<BracingType>
                        label="Multiple PRDs protecting fixed equipment"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Orifice area of the PRD"
                        unit="MPa"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Total installed orifice area of a multiple PDRs
                        installation"
                        unit="MPa"
                    />
                </Grid>

            </Grid>
        ),
        [bracingTypeListSubject]
    );

    return (
        <Accordion>
            <AccordionSummary style={{backgroundColor: "#02bfa6"}} expandIcon={<ExpandMoreIcon />}>
                <Typography style={{color: "White"}} variant="h6">Consequence of Failure Input Data</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
    );
}
