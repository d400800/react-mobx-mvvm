import React from "react";

import {Box, MenuItem, Select, Typography} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function ConditionsSet({conditions, classes, addCondition, operator, segmentGroupIndex, clusivity}) {
    return (
        <>
            {conditions.map((condition) => (
                <Box key={condition.title} className={classes.conditionBox}>
                    <Typography variant="h6">{condition.title}</Typography>

                    <Box>
                        <Select
                            IconComponent={ChevronRightIcon}
                            renderValue={() => <></>}
                            defaultValue={''}
                            onChange={e => addCondition(e.target.value, operator, segmentGroupIndex, clusivity)}
                        >
                            {condition.segments.map(segment => (
                                <MenuItem key={segment.id} value={segment}>{segment.name}</MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>
            ))}
        </>
    );
}