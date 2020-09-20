import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TodoListPage from "../features/todos/TodoListPage";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/todo-list-page">
                    <TodoListPage />
                </Route>
            </Switch>
        </Router>
    );
}