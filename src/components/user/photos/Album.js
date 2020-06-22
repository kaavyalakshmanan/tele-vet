import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from "react-redux";
import {addImage, deleteImage} from "../../../actions";
import { DropzoneDialog } from "material-ui-dropzone";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
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

export default function Album() {
    const classes = useStyles();
    const [photoFormOpen, setPhotoFormOpen] = React.useState(false);
    // const [photoDropzoneOpen, setPhotoDropzoneOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState(null);
    const dispatch = useDispatch();
    const uploadedImages = useSelector(state => state.images);
    const handleClose = () => {
        setPhotoFormOpen(false);
        setTitle("");
        setDescription("");
    };

    const handleSubmit = (e) => {
        if (image) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                dispatch(addImage({
                    file: {
                        src: event.target.result,
                    },
                    title: title,
                    description: description
                }));
            });
            reader.readAsDataURL(image);
        }
        handleClose();
    }

    const handleDelete = (index) => {
        console.log(uploadedImages.list[index]);
        dispatch(deleteImage(uploadedImages.list[index]));
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Your Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Upload pictures of your pets and concern areas.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Button variant="contained" color="primary" onClick={() => setPhotoFormOpen(true)}>
                                    Upload Photos
                                </Button>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {uploadedImages.list.map((image, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={ image.file.src }
                                        title={ image.title }
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { image.title }
                                        </Typography>
                                        <Typography>
                                            { image.description }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <Button size="small" color="primary" onClick={ () => handleDelete(index) }>
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Dialog open={photoFormOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a title and description to your photo
                    </DialogContentText>
                    <TextField
                        className={classes.textField}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        onChange={(e) => { setTitle(e.target.value); }}
                        fullWidth
                    />
                    <TextField
                        className={classes.textField}
                        id="description"
                        placeholder="Description"
                        onChange={(e) => { setDescription(e.target.value) }}
                        multiline
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Upload
                    </Button>
                    <Button color="primary"
                            variant="contained"
                            component="label"
                    >
                        Browse
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={ (e) => {
                                console.log(e.target.files);
                                setImage(e.target.files[0]);
                            }}
                        />
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}