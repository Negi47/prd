import Grid from '@material-ui/core/Grid';
import { styled, Theme } from '@material-ui/core/styles';
import { RouteComponentProps, useMatch } from '@reach/router';
import React from 'react';
import '../modules/Subject';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { usePlatformList } from './PlatformListProvider';
import { Link } from '@reach/router';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
            '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
  

  
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const StyledLink = styled(Link)({ textDecoration: 'underline', padding : 'unset' });

export default function ProjectList(_: RouteComponentProps) {

    const platformList = usePlatformList();
    const [platforms, setPlatforms] = React.useState<Platform[] | null>();

    const handlePlatformList = (state: State<Platform[] | null>) => {
        setPlatforms(state.value);
    };

    let projectId: number | undefined;

    const fetch = React.useCallback(() => {
        if (projectId) {
            platformList.subject.list({
                filter: {
                    project: projectId,
                },
            });
        } else {
            platformList.subject.list(undefined);
        }
    }, [projectId, platformList.subject]);

    React.useEffect(() => {
        platformList.subject.attach(handlePlatformList);
        fetch();
        return () => platformList.subject.detach(handlePlatformList);
    }, [fetch, platformList.subject]);

    console.log("I am in prd page ==", platforms)
    const classes = useStyles();
    
    return ( 
        <div>
            <Grid item container spacing={1}>
                <Grid item xs={12}>
                <TableContainer component={Paper}>
                    
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead >
                            <TableRow>
                                <StyledTableCell style={{minWidth: 120}} align="center" >S No.</StyledTableCell>
                                <StyledTableCell style={{minWidth: 120}} align="center">PRD Name</StyledTableCell>
                                <StyledTableCell style={{minWidth: 120}} align="center">PRD Function</StyledTableCell>
                                
                            </TableRow>
                            <TableRow>
                                <StyledTableCell style={{minWidth: 120}} align="center"></StyledTableCell>
                                <StyledTableCell style={{minWidth: 120}} align="center"></StyledTableCell>
                                <StyledTableCell style={{minWidth: 120}} align="center"></StyledTableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {platforms?.map((platform) => (
                            <StyledTableRow key={platform.id}>
                                
                                <StyledTableCell align="center" component="th" scope="row">
                                    <StyledLink to={`/dashboard/platforms/${platform.id}/analysis`}>
                                        {platform.PRD_identification_number}
                                    </StyledLink> 
                                </StyledTableCell> 
                                        
                                <StyledTableCell align="center">HELLO</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>  
            </Grid>           
        </div>         
            
    );
}