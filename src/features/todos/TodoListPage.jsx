import React from 'react';

import {TodoList} from "./TodoList";
import {TodoNew} from "./TodoNew";
import TodoListStore, {useTodoListStore} from "./stores/todo-list";

function TodoListPage() {
    const InitialTodoListStore = new TodoListStore([
        {
            data: {text: 'Study', id: 1, isDone: false},
            uiData: {isEditing: false}
        },
        {
            data: {text: 'Rest', id: 2, isDone: false}
        },
        {
            data: {text: 'Workout', id: 3, isDone: false}
        }
    ]);

    const {StoreProvider: TodoListStoreProvider} = useTodoListStore();

    return (
        <>
            <TodoListStoreProvider value={InitialTodoListStore}>
                <TodoNew/>

                <TodoList/>
            </TodoListStoreProvider>
        </>
    );
}

export default TodoListPage;
