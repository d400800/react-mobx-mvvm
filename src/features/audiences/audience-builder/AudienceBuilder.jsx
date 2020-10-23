import {observer} from "mobx-react";
import React from 'react';

import {Box, Button, useTheme} from '@material-ui/core';

import { useAudienceBuilderStateContext} from './AudienceBuilderContext';
import AudienceConditions from './AudienceConditions';
import AudienceName from './AudienceName';

const AudienceBuilder = observer(() => {
    const audienceBuilderStateContext = useAudienceBuilderStateContext();

    const theme = useTheme();

    return (
        <>
            <Box mb={4}>{JSON.stringify(audienceBuilderStateContext.audienceViewModel)}</Box>

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
                <SaveAudience/>
            </Box>
        </>
    );
});

export default AudienceBuilder;

function SaveAudience() {
    const audienceVm = useAudienceBuilderStateContext().audienceViewModel;

    return (
        <Button
            onClick={() => audienceVm.saveAudience()}
            variant="contained" color="primary">
            Save audience
        </Button>
    );
}