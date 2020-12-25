import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import Select from '../../FormWidget/Select';
import { useBracingTypeListContext } from '../../BracingTypeListProvider';
import DatePicker from '../../FormWidget/DatePicker';

export default function PRDInspectionHistory() {

    const bracingTypeListSubject = useBracingTypeListContext();

    const content = React.useMemo(
        () => (
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                </Grid>

                <Grid item xs={12} md={6}>
                    <DatePicker
                        name={['']}
                        label="PRD Pop-Test Results"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Pop-Test Results"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Leakage Results"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Inpection Effectiveness"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Overhauuled during the Inspection"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD replaced with new PRD in lieu of overhaul"
                        name=""
                        subject={bracingTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>
            </Grid>
        ),
        [bracingTypeListSubject]
    );
    return (
        <Accordion>
            <AccordionSummary style={{backgroundColor: "#02bfa6"}} expandIcon={<ExpandMoreIcon />}>
                <Typography style={{color: "White"}} variant="h6">PRD Inspection History</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
    );
}
