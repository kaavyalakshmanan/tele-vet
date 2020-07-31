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
import {addData, deleteImage, editImage} from "../../../actions";
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
    const [uploadDialogOpen, setUploadDialogOpen] = React.useState(false);
    const [editDialogOpen, setEditDialogOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState({
        src: "",
        title: "",
        description: ""
    });
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [preview, setPreview] = React.useState(null);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const DATA_TYPE_IMAGES = "images";

    const handleClose = () => {
        setUploadDialogOpen(false);
        setTitle("");
        setDescription("");
        setPreview(null);
    };

    const handleSubmit = (e) => {
        if (preview) {
            const newImage = {
                src: preview,
                title: title,
                description: description
            };
            dispatch(addData(DATA_TYPE_IMAGES, newImage, user));
        }
        handleClose();
    }

    const handlePreview = (e) => {
        if (e.target.files) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                setPreview(event.target.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleDelete = (index) => {
        dispatch(deleteImage(user.images[index], user));
    }

    const handleOpenEdit = (index) => {
        setCurrentImage(user.images[index]);
        setEditDialogOpen(true);
    }

    const handleCloseEdit = () => {
        setEditDialogOpen(false);
        setTitle("");
        setDescription("");
    }

    const handleSaveEdit = (e) => {
        const newTitle = title !== '' ? title : currentImage.title;
        const newDescription = description !== '' ? description : currentImage.description;
        dispatch(editImage({
            src: currentImage.src,
            title: newTitle,
            description: newDescription
        }, user));
        handleCloseEdit();
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
                                <Button variant="contained" color="primary" onClick={() => setUploadDialogOpen(true)}>
                                    Upload Photos
                                </Button>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {user.images.map((image, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={ image.src }
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
                                        <Button size="small" color="primary" onClick={ () => handleOpenEdit(index) }>
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
            <Dialog open={uploadDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload and share photos with your vet</DialogTitle>
                <DialogContent>
                    <CardMedia
                        className={ classes.cardMedia }
                        image={ preview }
                        title={ 'preview' }
                    />
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
                            onChange={ handlePreview }
                        />
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={editDialogOpen} onClose={ handleCloseEdit } aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit the title and description</DialogTitle>
                <DialogContent>
                    <CardMedia
                        className={classes.cardMedia}
                        image={ currentImage.src }
                        title={ 'preview' }
                    />
                    <DialogContentText>
                        Add a title and description to your photo
                    </DialogContentText>
                    <TextField
                        className={classes.textField}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        defaultValue={ currentImage.title }
                        onChange={(e) => { setTitle(e.target.value); }}
                        fullWidth
                    />
                    <TextField
                        className={classes.textField}
                        id="description"
                        placeholder="Description"
                        defaultValue={ currentImage.description }
                        onChange={(e) => { setDescription(e.target.value) }}
                        multiline
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleCloseEdit }>
                        Cancel
                    </Button>
                    <Button onClick={ handleSaveEdit }>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}