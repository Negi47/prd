import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import Select from '../../FormWidget/Select';
import { useBracingTypeListContext } from '../../BracingTypeListProvider';
import TextField from '../../FormWidget/TextField';

export default function StructuralDetailsFieldset() {

    const bracingTypeListSubject = useBracingTypeListContext();

    const content = React.useMemo(
        () => (
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Rated Capacity of PRD"
                        unit="Kg/hr"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="PRD Inlet Size"
                        unit="inch"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Cost of the fluid"
                        unit="$/Kg"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="PRD Inlet Size"
                        unit="inch"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Environmental clean-up costs due to a PRD
                        leakage"
                        unit="$"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD leakage can be tolerated?"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Cost of shutdown to repair PRD"
                        unit="$"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Daily production margin on the unit"
                        unit="$/day"
                        nullable
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Number of days required to shut a unit down
                        to repair a leaking or stuck open PRD"
                        unit="$"
                        nullable
                    />
                </Grid>
            </Grid>
        ),
        [bracingTypeListSubject]
    );
    return (
        <Accordion>
            <AccordionSummary style={{backgroundColor: "#02bfa6"}} expandIcon={<ExpandMoreIcon />}>
                <Typography style={{color: "White"}} variant="h6">Consequence of Failure of Leakage</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
    );
}
