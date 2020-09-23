import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({title, data, onApprove, onCancel}) {
    return (
        <Dialog
            open={data.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to perform this action?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => onCancel()} color="primary">
                    Cancel
                </Button>

                <Button onClick={() => onApprove(data.todo)} color="primary" autoFocus>
                    Approve
                </Button>
            </DialogActions>
        </Dialog>
    );
}