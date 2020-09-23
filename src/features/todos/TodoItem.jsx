import {observer} from "mobx-react";
import React from 'react';

import {Box, Typography, TextField, Button, Checkbox, IconButton} from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useViewModel from "../../shared/hooks/use-view-model";

const TodoItem = observer(({todo, todosUiStore}) => {
    const todoUiStore = useViewModel(todo);

    return (
        <>
            {
                todo.uiData.isEditing ?
                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            <TextField value={todoUiStore.data.text} variant="outlined" size="small"
                                       onChange={e => todoUiStore.updateText(e.target.value)}
                            />

                            <Button variant="contained" color="primary"
                                    onClick={() => todoUiStore.toggleIsEditing()}>
                                save
                            </Button>
                        </Box>
                    </Box>
                    :
                    <Box display="flex" alignItems="center">
                        <Checkbox
                            color="primary"
                            checked={todoUiStore.data.isDone}
                            onChange={() => todoUiStore.toggleIsDone()}
                            inputProps={{'aria-label': 'secondary checkbox'}}
                        />
    
                        <Typography variant="body1">{todoUiStore.data.text}</Typography>
    
                        <IconButton onClick={() => todoUiStore.toggleIsEditing()}>
                            <EditIcon/>
                        </IconButton>
    
                        <IconButton onClick={() => todosUiStore.updateUiData({
                            alertDialog: {
                                open: true,
                                todo
                            }
                        })}>
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