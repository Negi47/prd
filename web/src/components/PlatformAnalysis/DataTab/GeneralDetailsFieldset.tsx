import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import DatePicker from '../../FormWidget/DatePicker';
import Select from '../../FormWidget/Select';
import TextField from '../../FormWidget/TextField';
import { usePlatformTypeListContext } from '../../PlatformTypeListProvider';

export default function GeneralDetailsFieldset() {
    const platformTypeListSubject = usePlatformTypeListContext();

    const content = React.useMemo(
        () => (
           
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name={['PRD_identification_number']} 
                        label="PRD Identification Number" 
                        required 
                    />
                </Grid>

                <Hidden smDown>
                    <Grid item xs={12} md={6} />
                </Hidden>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['PRD_function']}
                        label="PRD Function"
                        multiline
                    />
                </Grid>

                <Hidden smDown>
                    <Grid item xs={12} md={6} />
                </Hidden>

                <Grid item xs={12} md={6}>
                    <DatePicker 
                        name={['Installation_of_PRD']} 
                        label="Installation of PRD" 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <DatePicker 
                        name={['']} 
                        label="RBI Assessment date" 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Type"
                        name=""
                        subject={platformTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Containing Soft Seats?"
                        name=""
                        subject={platformTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Set Pressure?"
                        name=""
                        subject={platformTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="Service Severity"
                        name=""
                        subject={platformTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="PRD Discharge Location"
                        name=""
                        subject={platformTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Select<PlatformType>
                        label="Environment Factor Modifier"
                        name=""
                        subject={platformTypeListSubject}
                        toOption={(value) => value}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        name={['']}
                        label="Ruputure Disk is installed upstream of PRD"
                        required
                    />
                </Grid>
            </Grid>
        ),
        [platformTypeListSubject]
    );

    return (
        <Accordion defaultExpanded>
            <AccordionSummary style={{backgroundColor: "#02bfa6" }} expandIcon={<ExpandMoreIcon />}>
                <Typography style={{color: "White"}} variant="h6">General Details</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
        </Accordion>
    );
}
