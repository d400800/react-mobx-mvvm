import React from 'react';

import {Box, Grid, Typography} from '@material-ui/core';

const SegmentsTree = ({segmentGroup, segmentGroupIndex}) => {
    function shouldPrintOperator(segmentGroupIndex, i) {
        // omit operator if it is the 1st child of the 1st parent
        return !(segmentGroupIndex === 0 && i === 0);
    }

    return (
        <Box>
            {segmentGroup.map((segment, i) => (
                <Box key={segment.id} mb={1}>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item xs={1}>
                            <Box color="primary.main" mr={2}>
                                {shouldPrintOperator(segmentGroupIndex, i) &&
                                    <Typography variant="subtitle2">
                                        {i === 0 ? 'or' : 'and'}
                                    </Typography>
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={11}>
                            <Typography variant="h6">{segment.name}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default SegmentsTree;