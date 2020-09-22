import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TodoListPage from "../features/todos/TodoListPage";
import TodosPage from "../features/todos-2/TodosPage";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/todo-list-page">
                    <TodoListPage />
                </Route>

                <Route exact path="/todo-list-page-2">
                    <TodosPage />
                </Route>
            </Switch>
        </Router>
    );
}