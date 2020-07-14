import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                />
            </div>
        </form>
    );
}

// https:material-ui.com/components/text-fields/

// https://www.npmjs.com/package/react-schedule-selector