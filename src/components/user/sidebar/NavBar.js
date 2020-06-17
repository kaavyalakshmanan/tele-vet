import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from "@material-ui/icons/Pets";
import PublishIcon from '@material-ui/icons/Publish';
import Badge from "@material-ui/core/Badge";
import NavHeader from "./NavHeader";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    badge: {
        float: 'right'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(0),
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const NavBar = ({ handleViewChange, renderView, iconMap, userName, email, currentView, uploadPhoto } ) => {

        const classes = useStyles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };

        let navbarButton;
        if (currentView === 'Photo Gallery') {
            navbarButton = (
                <IconButton color="inherit" style={{"textAlign": "right", margin: "0px 0px 0px auto"}} onClick={uploadPhoto}>
                    <PublishIcon/>
                </IconButton>
            )
        } else {
            navbarButton = (
                <IconButton color="inherit" style={{"textAlign": "right", margin: "0px 0px 0px auto"}}>
                    <Badge badgeContent={4} color="secondary">
                        { /*TODO: Store notifications with redux*/ }
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            )
        }

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            <PetsIcon style={{padding: "5px"}}/>
                            Tele-Vet
                        </Typography>
                        { navbarButton }
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <NavHeader
                        collapsed={ !open }
                        userName={ userName }
                        email={ email }
                    />
                    <Divider/>
                    <List>
                        {Object.keys(iconMap).map((text) => (
                            <ListItem button key={text} onClick={() => {
                                console.log('clicked ' + text);
                                handleViewChange(text);
                            }}>
                                <ListItemIcon>{iconMap[text]}</ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    { renderView() }
                </main>
            </div>
        );
}
