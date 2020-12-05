import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import AudienceResource from "../features/audiences/audience-builder/audience-resource";
import AudienceBuilder from "../features/audiences/audience-builder/AudienceBuilder";
import {AudienceBuilderContextProvider} from "../features/audiences/audience-builder/AudienceBuilderContext";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AudienceBuilderContextProvider audienceResource={AudienceResource}>
                        <AudienceBuilder />
                    </AudienceBuilderContextProvider>
                </Route>
            </Switch>
        </Router>
    );
}