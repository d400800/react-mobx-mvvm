import {useObserver} from "mobx-react-lite";
import React from 'react';

import {Box, Typography} from "@material-ui/core";

import {useTodoListStore} from "./stores/todo-list";
import {TodoItem} from "./TodoItem";

export const TodoList = () => {
    const {StoreContext: todoList} = useTodoListStore();

    return useObserver(() => (
        <>
            <Box my={1}>
                <Typography variant="h5" gutterBottom>Open Todos</Typography>

                {todoList.openTodos.map(todo => <TodoItem key={`${todo.data.id}-${todo.data.text}`} todo={todo}/>)}
            </Box>

            <Box mt={7}>
                <Typography variant="h5">Finished Todos</Typography>

                {todoList.finishedTodos.map(todo => <TodoItem key={`${todo.data.id}-${todo.data.text}`} todo={todo}/>)}
            </Box>

            <Box>
                <Typography variant="h5">Selected Todo</Typography>

                {todoList.selectedTodo &&
                    <TodoItem todo={todoList.selectedTodo}/>
                }
            </Box>
        </>
    ));
};