import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {observer} from "mobx-react";
import TodoItem from "./TodoItem";

const TodosList = observer(({todosUiStore}) => {
    return (
        <>
            {todosUiStore.data.todos.map((todo, i) => (
                <Box mb={2} key={i}>
                    <TodoItem todo={todo} todosUiStore={todosUiStore}/>
                </Box>
            ))}

            {todosUiStore.uiData.selectedTodo &&
                <TodoItem todo={todosUiStore.uiData.selectedTodo} todosUiStore={todosUiStore}/>
            }
        </>
    );
});

export default TodosList;