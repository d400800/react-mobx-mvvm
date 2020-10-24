import {observer} from "mobx-react";
import React from 'react';

import {Grid, Box, Button, useTheme} from '@material-ui/core';

import {useAudienceBuilderStateContext} from './AudienceBuilderContext';
import AudienceConditions from './AudienceConditions';
import AudienceName from './AudienceName';

const AudienceBuilder = observer(() => {
    const audienceVm = useAudienceBuilderStateContext().audienceViewModel;

    const theme = useTheme();

    return (
        <>
            <Grid container spacing={10}>
                <Grid item md={8}>
                    <Box mb={8}>
                        <AudienceName />
                    </Box>

                    <Box mb={8}>
                        <AudienceConditions
                            color={theme.palette.success.light}
                            label="Include"
                            clusivity="included"
                        />
                    </Box>

                    <Box>
                        <AudienceConditions
                            color={theme.palette.error.light}
                            label="Exclude"
                            clusivity="excluded"
                        />
                    </Box>

                    <Box mt={4} display="flex" justifyContent="flex-end">
                        <Button
                            onClick={() => audienceVm.saveAudience()}
                            variant="contained" color="primary">
                            Save audience
                        </Button>
                    </Box>
                </Grid>

                <Grid item md={4}>
                    <pre mb={4}>{JSON.stringify(audienceVm, null, '\t')}</pre>
                </Grid>
            </Grid>
        </>
    );
});

export default AudienceBuilder;