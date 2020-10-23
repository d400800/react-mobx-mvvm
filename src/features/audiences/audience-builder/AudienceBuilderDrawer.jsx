import React from 'react';

import {Drawer, Box, IconButton, makeStyles} from '@material-ui/core';
import IconClose from '@material-ui/icons/Close';

import AudienceBuilder from './AudienceBuilder';
import {AudienceBuilderContextProvider} from './AudienceBuilderContext';

const useStyles = makeStyles(theme => ({
    close: {
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(3)
    }
}));

export default function AudienceBuilderDrawer({open, onClose}) {
    const classes = useStyles();
    
    return (
        <Drawer anchor="right" open={open}>
            <Box width="60vw" py={7} px={6}>
                <IconButton onClick={onClose} className={classes.close}>
                    <IconClose/>
                </IconButton>

                <AudienceBuilderContextProvider>
                    <AudienceBuilder/>
                </AudienceBuilderContextProvider>
            </Box>
        </Drawer>
    );
}