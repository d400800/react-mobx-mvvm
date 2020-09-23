import React from 'react';

import {Box} from "@material-ui/core";

import TodoItem from "./TodoItem";

const TodosList = ({todosUiStore, todos}) => (
    <>
        {todos.map((todo, i) => (
            <Box mb={2} key={i}>
                <TodoItem todo={todo} todosUiStore={todosUiStore}/>
            </Box>
        ))}
    </>
);

export default TodosList;