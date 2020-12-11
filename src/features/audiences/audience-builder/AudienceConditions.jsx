import React from 'react';

import {Box, makeStyles,    Typography,  Divider} from '@material-ui/core';

import {useAudienceBuilderStateContext} from './AudienceBuilderContext';
import SegmentSelector from './segments/SegmentSelector';
import SegmentsTree from './segments/SegmentsTree';

const useStyles = makeStyles(theme => ({
    root: props => ({
        borderWidth: '2px',
        borderStyle: 'solid',
        position: 'relative',
        borderColor: props.color,
        padding: theme.spacing(3)
    }),
    label: props => ({
        left: '-2px',
        color: '#fff',
        bottom: '100%',
        marginBottom: '1px',
        position: 'absolute',
        display: 'inline-block',
        borderRadius: '4px 4px 0 0',
        backgroundColor: props.color,
        padding: theme.spacing(.25, 1.5)
    })
}));

const AudienceConditions = ({label='', color='#000', clusivity}) => {
    const classes = useStyles({label, color});
    const audienceVm = useAudienceBuilderStateContext().audienceViewModel;
    
    return (
        <Box className={classes.root}>
            <Typography variant="caption" className={classes.label}>{label}</Typography>

            <Box>
                {audienceVm[clusivity] && audienceVm[clusivity].length > 0 ?
                    audienceVm[clusivity].map((segmentGroup, i) => (
                        <Box key={i}>
                            <Box>
                                <SegmentsTree segmentGroup={segmentGroup} segmentGroupIndex={i} clusivity={clusivity}/>
                            </Box>

                            <Box mt={3}>
                                <SegmentSelector segmentGroupIndex={i} clusivity={clusivity} />
                            </Box>

                            <Box my={2}>
                                <Divider />
                            </Box>
                        </Box>
                    ))
                    :
                    <Box mt={3}>
                        <SegmentSelector clusivity={clusivity} />
                    </Box>
                }
            </Box>
        </Box>
    );
};

export default AudienceConditions;