import {observer} from "mobx-react";
import React from 'react';

import {Box, Typography, TextField, Button} from "@material-ui/core";

import useViewModel from "../../shared/hooks/use-view-model";
import ViewModel from "../../shared/models/view-model";
import TodoItemViewModel from "./stores/todo-item-view-model";

const AddTodo = observer(({todosUiStore}) => {
    function createTodo(todoText) {
        todosUiStore.addTodo(new TodoItemViewModel({
            data: {text: todoText, isDone: false}
        }));

        addTodoUiStore.updateData({text: ''});
    }

    const addTodoUiStore = useViewModel(new ViewModel({data: {text: ''}}));

    return (
        <>
            <Typography gutterBottom variant="h5">New task</Typography>

            <Box mb={2} display="flex">
                <Box mr={1}>
                    <TextField value={addTodoUiStore.data.text}
                               variant="outlined"
                               size="small"
                               onChange={e => addTodoUiStore.updateData({text: e.target.value})}
                    />
                </Box>

                <Button variant="contained" color="primary"
                        onClick={() => createTodo(addTodoUiStore.data.text)}
                >
                    create
                </Button>
            </Box>
        </>
    );
});

export default AddTodo;