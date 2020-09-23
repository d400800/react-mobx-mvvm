import {observer} from "mobx-react";
import React from 'react';

import {Box, Paper, Typography} from "@material-ui/core";

import AlertDialog from "../../shared/components/Dialog";
import useViewModel from "../../shared/hooks/use-view-model";
import mockTodosProvider from "../../shared/test-provider";
import AddTodo from "./AddTodo";
import TodosUiStore from './stores/todos-ui-store';
import TodosList from "./TodosList";

const TodosProvider = () => {
    const [todos, setTodos] = React.useState();
    
    React.useEffect(() => {
        async function loadTodos() {
            const response = await mockTodosProvider();

            setTodos(response.data);
        }

        loadTodos();
    }, []);
    
    if (!todos) {
        return <Typography variant={"body1"}>Loading...</Typography>;
    }
    
    return (
        <TodosPage todos={todos} />
    );
};

const TodosPage = observer(({todos}) => {
    const todosUiStore = useViewModel(new TodosUiStore({data: {todos}}));

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

export default TodosProvider;