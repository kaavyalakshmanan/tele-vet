import React from "react";
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
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [preview, setPreview] = React.useState(null);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onProfileClick = (e) => {
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setPreview(null);
    };

    const handleSubmitProfile = () => {
        if (preview) {
            dispatch(updateProfilePicture(preview, user));
        }
        handleCloseDialog();
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
                    <CardMedia
                        image={preview}
                        title={'preview'}
                    />
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