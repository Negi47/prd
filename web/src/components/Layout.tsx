import MAppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { styled, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Match } from '@reach/router';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Drawer from './Drawer';
import ProjectIcon from './icons/Project';
import SiteIcon from './icons/Site';

const StyledAppBar = styled(MAppBar)(
    ({ theme, open }: { theme: Theme; open?: boolean }) => {
        return {
            zIndex: theme.zIndex.drawer + 1,
            ...{
                open: {
                    width: `calc(100% - ${theme.shape.drawerWidth}px)`,
                    marginLeft: theme.shape.drawerWidth,
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
                close: {
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                },
            }[open ? 'open' : 'close'],
        };
    }
);

function ResourceAvatar() {
    return (
        <Box clone display="block" mr={4} ml={1}>
            <Avatar>
                <Match path="/dashboard/rbui">
                    {(props) => props.match && <ProjectIcon />}
                </Match>
                <Match path="/dashboard/sites">
                    {(props) => props.match && <SiteIcon />}
                </Match>
            </Avatar>
        </Box>
    );
}

function ResourceTitle() {
    return (
        <Box clone fontWeight={800}>
            <Typography variant="h4">
                <Match path="/dashboard/projects">
                    {(props) => props.match && 'Project List'}
                </Match>
                <Match path="/dashboard/rbui">
                    {(props) => props.match && 'PRD Dashboard'}
                </Match>
            </Typography>
        </Box>
    );
}

function ResourceCaption() {
    return (
        <Box>
            <Typography variant="body1">
                <Match path="/dashboard/projects">
                    {(props) =>
                        props.match && 'List all projects that you can view.'
                    }
                </Match>
                <Match path="/dashboard/rbui">
                    {(props) =>
                        props.match && 'PRD Dashboard'
                    }
                </Match>
            </Typography>
        </Box>
    );
}

export default function Layout({ children }: any) {
    const [open, setOpen] = React.useState(false);

    return (
        <Box display="flex">
            <StyledAppBar color="secondary" position="fixed" open={open}>
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => {
                            setOpen((value) => !value);
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        PRD TITLE
                    </Typography>
                </Toolbar>
            </StyledAppBar>
            <Drawer open={open} />
            <Box clone bgcolor="grey.100" minHeight="100vh">
                <Grid container alignContent="flex-start">
                    <Grid item xs={12}>
                        <Toolbar />
                        <Container maxWidth="xl">
                            <Breadcrumbs />
                            <Box
                                display="flex"
                                alignItems="center"
                                pt={1}
                                pb={4}
                            >
                                <ResourceAvatar />
                                <Box>
                                    <ResourceTitle />
                                    <ResourceCaption />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="xl">{children}</Container>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
