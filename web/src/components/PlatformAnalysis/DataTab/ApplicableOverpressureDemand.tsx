import { Typography } from '@material-ui/core';
import { Accordion } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useBracingTypeListContext } from '../../BracingTypeListProvider';
import Select from '../../FormWidget/Select';
import TextField from '../../FormWidget/TextField';
import { useNumberOfLegsTypeListContext } from '../../NumberOfLegsTypeListProvider';

export default function ApplicableOverpressureDemand() {
    const bracingTypeListSubject = useBracingTypeListContext();

    const numberOfLegsTypeListSubject = useNumberOfLegsTypeListContext();

    const content = React.useMemo(
        () => (
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<BracingType>
                        label="Overpressure demand case"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Overpressure like to occur"
                        unit="MPa"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="PRD COF to open associated with the jth overpressure demand"
                        unit="MPa"
                    />
                </Grid>

            </Grid>
        ),
        [numberOfLegsTypeListSubject, bracingTypeListSubject]
    );

    return (
        <Accordion>
            <AccordionSummary style={{backgroundColor: "#02bfa6"}} expandIcon={<ExpandMoreIcon />}>
                <Typography style={{color: "White"}} variant="h6">Applicable Overpressure Demand Case</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
    );
}
