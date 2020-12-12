import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import AudienceBuilder from "../features/audiences/audience-builder/AudienceBuilder";
import {AudienceBuilderContextProvider} from "../features/audiences/audience-builder/AudienceBuilderContext";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AudienceBuilderContextProvider>
                        <AudienceBuilder />
                    </AudienceBuilderContextProvider>
                </Route>
            </Switch>
        </Router>
    );
}