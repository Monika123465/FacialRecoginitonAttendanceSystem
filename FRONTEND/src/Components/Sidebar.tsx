

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginIcon from '@mui/icons-material/Login';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Avatar } from '@mui/material';

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Openfile = [
    {
        title: 'DashBoard',
        icon: <DashboardIcon />,
        route: "/dashboard",
        open: true,


    },
    {
        title: 'Login',
        icon: <LoginIcon />,
        route: '/login',
        open: true,


    },
    {
        title: 'Attendance',
        icon: <CoPresentIcon />,
        route: '/attendance',
        open: true,


    },



]

const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [attendacnefile, setAttendancefile] = React.useState(Openfile);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleToggleChildren = (title: string) => {
        setAttendancefile((prevOpenFile) =>
            prevOpenFile.map((item) =>
                item.title === title ? { ...item, open: !item.open } : item
            )
        );
    };


    return (
        < >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ bgcolor: 'white', color: 'black' }}>
                    <Toolbar  >
                        <IconButton

                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Avatar   src={'../assets/TulasLogo.jpg'} alt='err' />
                        <Typography variant="h6" noWrap component="div">
                            Tula's Institute
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            bgcolor: "#263238",

                        },
                    }}

                    variant="persistent"
                    anchor="left"
                    open={open}

                >
                    <DrawerHeader>

                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: 'whitesmoke' }} /> : <ChevronRightIcon sx={{ color: 'whitesmoke' }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List sx={{ color: 'whitesmoke', display: 'flex', flexDirection: 'column' }}  >
                        {attendacnefile.map((text) => (
                            <React.Fragment key={text.title}>
                                <ListItem onClick={() => {
                                    handleToggleChildren(text.title)
                                }}

                                    sx={{
                                        cursor: "pointer",
                                        height: '2vw',
                                        "&:hover": {
                                            color: 'white',

                                        },
                                        color: 'whitesmoke',

                                        display: 'flex', flexDirection: 'row',
                                    }}
                                >
                                    <Link key={text.title} to={text.route} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <ListItemIcon sx={{ color: "whitesmoke" }}>{text.icon}</ListItemIcon>
                                        <ListItemText sx={{ color: "whitesmoke" }} primary={text.title} />

                                    </Link>
                                </ListItem>



                            </React.Fragment>
                        ))}

                    </List>

                </Drawer>
                <Main open={open} sx={{ width: "calc(100vw - 320px)" }}>
                    <DrawerHeader />
                    <Box sx={{ bgcolor: "white", height: "87vh", p: 2, width: "100%" }}>
                        <Outlet />
                    </Box>
                </Main>
            </Box>



        </>
    )
}

export default Sidebar