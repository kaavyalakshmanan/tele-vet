import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from "react-redux";
import {addData, deleteDocument} from "../../../actions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DescriptionIcon from '@material-ui/icons/Description';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

export default function DocumentList() {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const [uploadDialogOpen, setUploadDialogOpen] = React.useState(false);
    const [description, setDescription] = React.useState("");
    const [previewFile, setPreviewFile] = React.useState(null);
    const [previewName, setPreviewName] = React.useState("");
    const dispatch = useDispatch();
    const DATA_TYPE_DOCUMENTS = "documents";
    const DOWNLOAD_BASE_URL = "http://localhost:9000/users/id/"

    const handleClose = () => {
        setUploadDialogOpen(false);
        setDescription("");
        setPreviewFile(null);
        setPreviewName(null);
    };

    const onSubmit = (e) => {
        try {
            if (previewFile && previewName) {
                dispatch(addData(DATA_TYPE_DOCUMENTS, {
                    id: Date.now(),
                    data: previewFile,
                    title: previewName,
                    description: description
                }, user));
            }
            handleClose();
        } catch (err) {
            console.log("Caught Error")
            console.log(err);
        }
    }

    const handlePreview = (e) => {
        console.log(e.target.files);
        if (e.target.files) {
            setPreviewName(e.target.files[0].name);
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                setPreviewFile(event.target.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleDelete = (file) => {
        dispatch(deleteDocument(file, user));
    }

    const downloadDocument = (file) => {
        let element = document.createElement('a');
        element.setAttribute('href', file.data);
        element.setAttribute('download', file.title);
        element.click();
        // document.body.removeChild(element);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Your Documents
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Upload and download documents
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Button variant="contained" color="primary" onClick={() => setUploadDialogOpen(true)}>
                                    Upload Documents
                                </Button>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div className={classes.list}>
                    <List>
                        {user.documents.map((file) =>
                            (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <DescriptionIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={file.title}
                                    secondary={file.description}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={ () => downloadDocument(file)}>
                                        <GetAppIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={ () => handleDelete(file)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </main>
            <Dialog open={uploadDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload a document to share with your vet </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {previewName}
                    </DialogContentText>
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
                    <Button onClick={onSubmit} color="primary">
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
        </React.Fragment>
    );
}