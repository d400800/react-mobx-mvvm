import React from 'react';

import { observer } from "mobx-react"
import {Box, Typography, TextField, Button, Checkbox, IconButton} from "@material-ui/core";
import useViewModel from "../../shared/hooks/use-view-model";
import ViewModel from "../../shared/models/ViewModel";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AdjustIcon from "@material-ui/icons/Adjust";

const TodoItem = observer(({todo, todosUiStore}) => {
    const todoUiStore = useViewModel(todo);

    return (
        <>
            {
                todo.uiData.isEditing
                    ?
                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            {/*<TodoText onSave={todo.update}*/}
                            {/*          todoText={todo.data.text}/>*/}

                            {todo.data.text}
                        </Box>
                    </Box>
                    :
                    <Box display="flex" alignItems="center">
                        <Checkbox
                            color="primary"
                            defaultChecked={todoUiStore.data.isDone}
                            onChange={() => todoUiStore.toggleIsDone()}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />

                        <Typography variant="body1">{todoUiStore.data.text}</Typography>

                        <IconButton onClick={() => todoUiStore.toggleIsEditing()}>
                            <EditIcon/>
                        </IconButton>

                        <IconButton onClick={() => todosUiStore.removeTodo(todo)}>
                            <HighlightOffIcon/>
                        </IconButton>

                        <IconButton onClick={() => todosUiStore.selectTodo(todo)}>
                            <AdjustIcon/>
                        </IconButton>
                    </Box>
            }
            <Typography variant={"caption"}>{JSON.stringify(todo)}</Typography>
        </>
    );
});

export default TodoItem;