import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {observer} from "mobx-react";
import TodoItem from "./TodoItem";

const TodosList = observer(({todosUiStore}) => {
    return (
        <>
            <Typography variant="h5">Open todos</Typography>

            {todosUiStore.openTodos.map((todo, i) => (
                <Box mb={2} key={i}>
                    <TodoItem todo={todo} todosUiStore={todosUiStore}/>
                </Box>
            ))}

            <Typography variant="h5">Finished todos</Typography>

            {todosUiStore.finishedTodos.map((todo, i) => (
                <Box mb={2} key={i}>
                    <TodoItem todo={todo} todosUiStore={todosUiStore}/>
                </Box>
            ))}

            {todosUiStore.uiData.selectedTodo &&
                <Box mt={4}>
                    <Typography variant="h5">Selected todo</Typography>

                    <TodoItem todo={todosUiStore.uiData.selectedTodo} todosUiStore={todosUiStore}/>
                </Box>
            }
        </>
    );
});

export default TodosList;