import React from 'react';

import TodosController from './TodosController';
import TodosUiStore from './stores/todos-ui-store';
import TodoUiStore from './stores/todo-ui-store';

export default function TodosPage() {
    const todosUiStore = new TodosUiStore({
        data: {
            todos: [
                new TodoUiStore({
                    data: {text: 'Study', id: 1, isDone: false},
                    uiData: {isEditing: false}
                }),
                new TodoUiStore({
                    data: {text: 'Rest', id: 2, isDone: false}
                }),
                new TodoUiStore({
                    data: {text: 'Workout', id: 3, isDone: false}
                })
            ]
        }
    });

    return (
        <>
            <TodosController todosUiStore={todosUiStore}/>
        </>
    );
}