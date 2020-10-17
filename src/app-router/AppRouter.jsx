import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import CampaignPage from "../features/campaign/CampaignPage";
import TodosPage from "../features/todos/TodosPage";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <TodosPage />
                </Route>

                <Route exact path="/todo-list-page">
                    <TodosPage />
                </Route>

                <Route exact path="/test-page">
                    <CampaignPage />
                </Route>
            </Switch>
        </Router>
    );
}