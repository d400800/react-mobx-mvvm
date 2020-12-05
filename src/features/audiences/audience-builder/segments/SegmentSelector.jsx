import React, {useState} from 'react';

import {Box, makeStyles,  Popover,  Typography} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';

import {useAudienceBuilderStateContext} from '../AudienceBuilderContext';
import ConditionsSet from './ConditionsSet';

const useStyles = makeStyles(theme => ({
    operatorBtn: {
        cursor: 'pointer'
    },
    conditionBox: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        width: 360,
        display: 'flex',
        justifyContent: 'space-between',

        '& .MuiInput-underline': {
            '&:before': {
                display: 'none'
            }
        }
    }
}));

const SegmentSelector = ({segmentGroupIndex = 0, clusivity}) => {
    const classes = useStyles();

    const audienceBuilderStateContext = useAudienceBuilderStateContext();
    const audienceVm = audienceBuilderStateContext.audienceViewModel;
    const segments = audienceBuilderStateContext.segments;

    const [open, setOpen] = useState(false);
    const [operator, setOperator] = useState('');

    function selectSegment(operator) {
        setOpen(true);
        setOperator(operator);
    }

    const anchorEl = document.getElementById(`segment-selector-${clusivity}-${segmentGroupIndex}`);

    function addCondition(segment, operator = 'or', segmentGroupIndex = 0, clusivity) {
        if (operator === 'and') {
            const newSegmentGroup = audienceVm[clusivity]
                .map((segmentArr, i) => {
                    if (i === segmentGroupIndex) {
                        return [...segmentArr, segment];
                    }

                    return segmentArr;
                });

            audienceVm.update({
                [clusivity]: newSegmentGroup
            });
        } else {
            audienceVm.update({
                [clusivity]: [
                    ...audienceVm[clusivity],
                    [segment]
                ]
            });
        }

        setOpen(false);
    }

    const ruleSegments = {title: 'Rules segments', segments: segments.filter(s => s.parentId === 'R')};
    const eventSegments = {title: 'Event segments', segments: segments.filter(s => s.parentId === 'C')};

    return (
        <Box id={`segment-selector-${clusivity}-${segmentGroupIndex}`}>
            <Box display="flex" mt={1}>
                {audienceVm[clusivity].length > 0 ?
                    <>
                        <Box mr={4} color="primary.main">
                            <Typography role="button"
                                        className={classes.operatorBtn}
                                        onClick={() => selectSegment('and')}
                                        variant="subtitle2">
                                and
                            </Typography>
                        </Box>

                        <Box color="primary.main">
                            <Typography role="button"
                                        className={classes.operatorBtn}
                                        onClick={() => selectSegment('or')}
                                        variant="subtitle2">
                                or
                            </Typography>
                        </Box>
                    </>
                    :
                    <Box color="primary.main">
                        <Typography role="button"
                                    className={classes.operatorBtn}
                                    onClick={() => selectSegment('or')}
                                    variant="subtitle2">
                            add condition
                        </Typography>
                    </Box>
                }
            </Box>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setOpen(false)}
            >
                <Box minHeight={150} py={1} pr={2}>
                    <ListSubheader>Add Condition</ListSubheader>

                    <ConditionsSet
                        operator={operator}
                        segmentGroupIndex={segmentGroupIndex}
                        clusivity={clusivity}
                        classes={classes}
                        conditions={[
                            ruleSegments, eventSegments
                        ]}
                        addCondition={addCondition}
                    />
                </Box>
            </Popover>
        </Box>
    );
};

export default SegmentSelector;