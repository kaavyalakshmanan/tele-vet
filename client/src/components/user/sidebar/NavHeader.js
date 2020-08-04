import React, {useState} from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CardMedia from "@material-ui/core/CardMedia";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {updateProfilePicture} from "../../../actions";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    }
}));

const getUsernameAndEmail = ( collapsed, userName, email ) => {
    return collapsed ? null : (
        <>
            <div style={{ paddingBottom: 16 }} />
            <Typography variant={"h6"} noWrap>
                { userName }
            </Typography>
            <Typography color={"textSecondary"} noWrap gutterBottom>
                { email }
            </Typography>
        </>
    );
}


export default function NavHeader({collapsed} ) {
    const classes = useState()
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [previewFile, setPreviewFile] = React.useState(null);
    const [previewName, setPreviewName] = React.useState(null);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onProfileClick = (e) => {
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setPreviewFile(null);
    };

    const handleSubmitProfile = () => {
        if (previewFile) {
            dispatch(updateProfilePicture(previewFile, user));
        }
        handleCloseDialog();
    }

    const handlePreview = (e) => {
        setPreviewName(e.target.files[0].name);
        if (e.target.files) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                setPreviewFile(event.target.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (<>
            <div style={{padding: collapsed ? 8 : 16, transition: "0.3s"}}>
                <a>
                    <Avatar
                        style={{
                            width: collapsed ? 40 : 80,
                            height: collapsed ? 40 : 80,
                            transition: "0.3s"
                        }}
                        src={user.profilePicture}
                        onClick={onProfileClick}
                    />
                </a>
                {getUsernameAndEmail(collapsed, user.username, user.email)}
            </div>
            <Divider/>
            <Dialog open={dialogOpen} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload a Profile Picture</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {previewName}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitProfile} color="primary">
                        Upload
                    </Button>
                    <Button color="primary"
                            variant="contained"
                            component="label"
                    >
                        Browse
                        <input
                            type="file"
                            style={{display: "none"}}
                            onChange={handlePreview}
                        />
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}