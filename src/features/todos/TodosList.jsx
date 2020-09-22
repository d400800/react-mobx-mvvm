import {observer} from "mobx-react";
import React from 'react';

import {Box, Typography} from "@material-ui/core";

import TodoItem from "./TodoItem";

const TodosList = observer(({todosUiStore}) => (
    <>
        <Typography variant="h5">Open todos</Typography>

        {todosUiStore.openTodos.map((todo, i) => (
            <Box mb={2} key={i}>
                <TodoItem todo={todo} todosUiStore={todosUiStore}/>
            </Box>
        ))}

        {todosUiStore.finishedTodos.map((todo, i) => (
            <Box key={i}>
                <Typography variant="h5">Finished todos</Typography>

                <Box mb={2} key={i}>
                    <TodoItem todo={todo} todosUiStore={todosUiStore}/>
                </Box>
            </Box>
        ))}

        {todosUiStore.uiData.selectedTodo &&
        <Box mt={4}>
            <Typography variant="h5">Selected task</Typography>

            <TodoItem todo={todosUiStore.uiData.selectedTodo} todosUiStore={todosUiStore}/>
        </Box>
        }
    </>
));

export default TodosList;