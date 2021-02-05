import {observer} from "mobx-react";
import React from 'react';

import {Grid, Box, Button, Fade, CircularProgress, useTheme} from '@material-ui/core';

import {useAudienceBuilderStateContext} from './AudienceBuilderContext';
import AudienceConditions from './AudienceConditions';
import AudienceName from './AudienceName';

const AudienceBuilder = observer(() => {
    const {audienceViewModel: audienceVm, loaded} = useAudienceBuilderStateContext();

    const theme = useTheme();

    console.log('hello');

    if (!loaded) return (
        <Box display="flex" justifyContent="center" mt={10}>
            <CircularProgress/>
        </Box>
    );

    return (
        <Fade in={loaded} timeout={{enter: 800}}>
            <Grid container spacing={10}>
                <Grid item md={8}>
                    <Box mb={8}>
                        <AudienceName />
                    </Box>

                    <Box mb={8}>
                        <AudienceConditions
                            color={theme.palette.success.light}
                            label="Include"
                            clusivity="includedSegments"
                        />
                    </Box>

                    <Box>
                        <AudienceConditions
                            color={theme.palette.error.light}
                            label="Exclude"
                            clusivity="excludedSegments"
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
                    <pre mb={4}>{JSON.stringify({
                        ...audienceVm,
                        includedSegmentIds: audienceVm.includedSegmentIds,
                        excludedSegmentIds: audienceVm.excludedSegmentIds
                    }, null, '\t')}</pre>
                </Grid>
            </Grid>
        </Fade>
    );
});

export default AudienceBuilder;