import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import TodosProvider from "../features/todos/TodosPage";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <TodosProvider />
                </Route>

                <Route exact path="/todo-list-page">
                    <TodosProvider />
                </Route>
            </Switch>
        </Router>
    );
}