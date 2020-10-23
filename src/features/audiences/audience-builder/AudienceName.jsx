import {observer} from "mobx-react";
import React from 'react';

import {Box, TextField, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';

import useViewModel from "../../../shared/hooks/use-view-model";
import AudienceNameViewModel from '../model/audience-name';
import {useAudienceBuilderStateContext} from './AudienceBuilderContext';

const AudienceName = observer((props) => {
    const audienceVm = useAudienceBuilderStateContext().audienceViewModel;

    const vm = useViewModel(new AudienceNameViewModel({
        data: {test: audienceVm.data.name},
        deps: {audienceVm}
    }));

    return (
        <Box>
            {vm.uiData.editMode ?
                <Box display="flex">
                    <TextField
                        value={vm.data.name}
                        onChange={e => vm.updateData({name: e.target.value})}
                    />

                    <IconButton
                        onClick={() => vm.saveName(vm.data.name)}
                        size="small"
                        color="primary">
                        <CheckIcon/>
                    </IconButton>

                    <IconButton
                        onClick={() => vm.cancelUpdateName(audienceVm.data.name)}
                        size="small"
                        color="secondary">
                        <ClearIcon/>
                    </IconButton>
                </Box>
                :
                <Box display="flex">
                    <Box mr={1}>
                        <Typography variant="h6">
                            {audienceVm.data.name}
                        </Typography>
                    </Box>

                    <IconButton
                        onClick={() => vm.enterEditMode(audienceVm.data.name)}
                        size="small"
                        color="primary">
                        <EditIcon/>
                    </IconButton>
                </Box>
            }
        </Box>
    );
});

export default AudienceName;