import React from 'react';

import TodosList from './TodosList';
import AddTodo from "./AddTodo";

export default function TodosController({todosUiStore}) {
    return (
        <>
            <AddTodo todosUiStore={todosUiStore}/>

            <TodosList todosUiStore={todosUiStore} />
        </>
    );
}