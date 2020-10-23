import {observer} from "mobx-react";
import React from 'react';

import {Typography, Paper, Box, Grid} from "@material-ui/core";

import GeneralSelect from "../../shared/components/GeneralSelect";
import useViewModel from "../../shared/hooks/use-view-model";
import CampaignViewModel from "./stores/campaign-view-model";

const placements = [
    {
        name: 'home page',
        id: 'homepage-widget'
    },
    {
        name: 'product page',
        id: 'product-related-items'
    }
];

const goals = [
    {
        name: 'click',
        id: 'click'
    },
    {
        name: 'conversion',
        id: 'conversion'
    }
];

const CampaignPage = observer(() => {
    const vm = useViewModel(new CampaignViewModel({
        data: {
            name: 'My campaign',
            placementId: 'homepage-widget'
        }
    }));

    return (
        <>
            <Typography variant="caption">{JSON.stringify(vm)}</Typography>

            <Box mb={4}>
                <Typography variant="h4">{vm.data.name}</Typography>
            </Box>

            <Paper>
                <Box p={4}>
                    <Grid spacing={8} container>
                        <Grid item md={4}>
                            <Box mb={4}>
                                <GeneralSelect
                                    label="Placement"
                                    value={vm.data.placementId}
                                    handleChange={e => vm.updateData({placementId: e.target.value})}
                                    options={placements}
                                />
                            </Box>

                            <Box mb={4}>
                                <GeneralSelect
                                    label="Goal"
                                    value={vm.data.goal}
                                    handleChange={e => vm.updateData({goal: e.target.value})}
                                    options={goals}
                                />
                            </Box>
                        </Grid>

                        <Grid item md={8}>
                            Ad
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
});

export default CampaignPage;