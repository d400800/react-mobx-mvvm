import React from 'react';

import {Box, Grid, Typography, IconButton} from '@material-ui/core';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import {useAudienceBuilderStateContext} from "../AudienceBuilderContext";

const SegmentsTree = ({clusivity, segmentGroup, segmentGroupIndex}) => {
    const {audienceViewModel: audienceVm} = useAudienceBuilderStateContext();

    function shouldPrintOperator(segmentGroupIndex, i) {
        // omit operator if it is the 1st child of the 1st parent
        return !(segmentGroupIndex === 0 && i === 0);
    }

    function removeCondition(segmentId) {
        audienceVm.removeCondition(clusivity, segmentGroupIndex, segmentId);
    }

    return (
        <Box>
            {segmentGroup.map((segment, i) => (
                <Box key={segment.id} mb={1}>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item xs={1}>
                            <Box color="primary.main" mr={2} operator-box="true">
                                {shouldPrintOperator(segmentGroupIndex, i) &&
                                    <Typography variant="subtitle2">
                                        {i === 0 ? 'or' : 'and'}
                                    </Typography>
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={11}>
                            <Box display="flex" alignItems="center">
                                <Typography id={segment.id + '-text'} variant="h6">{segment.name}</Typography>

                                <Box>
                                    <IconButton aria-label="delete"
                                                size="small"
                                                onClick={() => removeCondition(segment.id)}>
                                        <DeleteOutline />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default SegmentsTree;