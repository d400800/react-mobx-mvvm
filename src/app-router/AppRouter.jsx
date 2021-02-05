import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Button, Box, Typography} from "@material-ui/core";

import AudienceBuilder from "../features/audiences/audience-builder/AudienceBuilder";
import {AudienceBuilderContextProvider} from "../features/audiences/audience-builder/AudienceBuilderContext";

export default function AppRouter() {
    const [count, setCount] = React.useState(0);
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Box>
                        <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">+1</Button>
                    </Box>

                    <Box>
                        <Typography>{count}</Typography>
                    </Box>
                    
                    <AudienceBuilderContextProvider>
                        <AudienceBuilder />
                    </AudienceBuilderContextProvider>
                </Route>
            </Switch>
        </Router>
    );
}