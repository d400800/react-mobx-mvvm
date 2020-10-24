import React from 'react';

import {Box, makeStyles, MenuItem, Popover, Select, Typography} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {useAudienceBuilderStateContext} from '../AudienceBuilderContext';

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

const SegmentSelector = ({segmentGroupIndex, segmentGroup, clusivity}) => {
    const classes = useStyles();

    const audienceBuilderStateContext = useAudienceBuilderStateContext();
    const audienceVm = audienceBuilderStateContext.audienceViewModel;
    const segments = audienceBuilderStateContext.segments;

    const [open, setOpen] = React.useState(false);
    const [operator, setOperator] = React.useState('');

    function selectSegment(operator) {
        setOpen(true);
        setOperator(operator);
    }

    const anchorEl = document.getElementById(`segment-selector-${clusivity}-${segmentGroupIndex}`);

    function getCategories(segmentGroup) {
        return segmentGroup.reduce((acc, curr) => {
            const segmentIds = curr.map(segment => segment.id);

            return [...acc, segmentIds];
        }, []);
    }

    function addCondition(segment, segmentGroup, operator = 'or', segmentGroupIndex = 0, clusivity = 'included') {
        if (operator === 'and') {
            const newSegmentGroup = audienceVm.data[clusivity]
                .map((segmentArr, i) => {
                    if (i === segmentGroupIndex) {
                        return [...segmentArr, segment];
                    }

                    return segmentArr;
                });

            const categories = getCategories(newSegmentGroup);

            audienceVm.updateData({
                [clusivity]: newSegmentGroup,
                categories
            });
        } else {
            audienceVm.updateData({
                [clusivity]: [
                    ...audienceVm.data[clusivity],
                    [segment]
                ],
                categories: [...audienceVm.data.categories, [segment.id]]
            });
        }

        setOpen(false);
    }
    
    return (
        <Box id={`segment-selector-${clusivity}-${segmentGroupIndex}`}>
            <Box display="flex" mt={1}>
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
            </Box>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setOpen(false)}
            >
                <Box minHeight={150} py={1} pr={2}>
                    <ListSubheader>Add Condition</ListSubheader>

                    <Box className={classes.conditionBox}>
                        <Typography variant="h6">Segments</Typography>

                        <Select
                            IconComponent={ChevronRightIcon}
                            renderValue={() => <></>}
                            defaultValue={''}
                            onChange={e => addCondition(e.target.value, segmentGroup, operator, segmentGroupIndex, clusivity)}
                        >
                            {segments.map(segment => (
                                <MenuItem key={segment.id} value={segment}>{segment.name}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
};

export default SegmentSelector;