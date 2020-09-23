import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default function AppLayout(props) {
    return (
        <>
            <Box mt={10} px={2}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box p={2}>
                            {props.children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}