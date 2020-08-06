import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Map from "./Map/Map";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchVets} from "../../actions";
import VetProfilePage from "../VetProfilePage/VetProfilePage";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Use Material UI styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

// EFFECTS: RENDERS THE VET FINDER PAGE
// REQUIRED PROPS: NONE
// LOCATION: /find/vets
// CREDIT: This component is based on sample code from https://material-ui.com/
export default function VetFinder() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [vetProfileView, setVetProfileView] = React.useState(null);
    const dispatch = useDispatch();
    const vetList = useSelector(state => state.vetList);

    useEffect(() => {
        dispatch(fetchVets())
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickVet = vet => {
        setVetProfileView(vet);
    }

    if (vetProfileView) {
        return (<VetProfilePage vet={vetProfileView}/>);
    } else {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Map" {...a11yProps(0)} />
                        <Tab label="Vets" {...a11yProps(1)} />
                        <Button style={{"float": "right", "color": "white"}} href='/start'>Login</Button>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Map className={classes.map} markers={vetList}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={4}>
                        {vetList.map((vet, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card} onClick={() => handleClickVet(vet)}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={vet.profilePicture}
                                        title={vet.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {vet.name}
                                        </Typography>
                                        <Typography>
                                            {vet.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            </div>
        );
    }
}