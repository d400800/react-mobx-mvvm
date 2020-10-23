import {observer} from "mobx-react";
import React from 'react';

import {Box, Paper, Typography} from "@material-ui/core";

import AlertDialog from "../../shared/components/Dialog";
import useViewModel from "../../shared/hooks/use-view-model";
import mockTodosProvider from "../../shared/test-provider";
import AddTodo from "./AddTodo";
import TodosViewModel from './stores/todos-view-model';
import TodosList from "./TodosList";

const TodosPage = observer(() => {
    const todosUiStore = useViewModel(new TodosViewModel({
        deps: {
            resource: mockTodosProvider,
            initialQuery: {ids: [1,2,3]}
        }
    }));

    return (
        <>
            <Paper>
                <Box p={2} mb={2}>
                    <AddTodo todosUiStore={todosUiStore}/>
                </Box>
            </Paper>

            <Paper>
                <Box p={2} mb={2}>
                    <Typography variant="h5">Open todos</Typography>

                    <TodosList todosUiStore={todosUiStore} todos={todosUiStore.openTodos} />
                </Box>
            </Paper>

            <Paper>
                <Box p={2} mb={2}>
                    <Typography variant="h5">Finished todos</Typography>

                    <TodosList todosUiStore={todosUiStore} todos={todosUiStore.finishedTodos}/>
                </Box>
            </Paper>

            {todosUiStore.uiData.selectedTodo &&
                <Paper>
                    <Box p={2} mb={2}>
                        <Typography variant="h5">Selected task</Typography>

                        <TodosList todosUiStore={todosUiStore} todos={[todosUiStore.uiData.selectedTodo]} />
                    </Box>
                </Paper>
            }

            <AlertDialog
                data={todosUiStore.uiData.alertDialog}
                onApprove={todo => todosUiStore.removeTodo(todo)}
                onCancel={() => todosUiStore.closeAlertDialog()}
                title={"Remove the task"}
            />
        </>
    );
});

export default TodosPage;