import {action, computed,  decorate} from "mobx";

import UiStore from "../../../shared/models/ui-store";

export default class TodosUiStore extends UiStore {
    constructor({data, uiData, deps}) {
        super({data, uiData});

        this.resource = deps.resource;
        this.initialQuery = deps.initialQuery;

        this.loadTodos(this.initialQuery);
    }
    async loadTodos(query) {
        const response = await this.resource(query);
        
        this.data.todos = response.data;
    }

    addTodo(todo) {
        this.data.todos.push(todo);
    }

    removeTodo(todo) {
        this.data.todos.remove(todo);
        this.closeAlertDialog();
    }

    selectTodo(todo) {
        this.uiData.selectedTodo = todo;
    }

    get finishedTodos() {
        return this.data.todos.filter(todo => todo.data.isDone);
    }

    get openTodos() {
        return this.data.todos.filter(todo => !todo.data.isDone);
    }

    closeAlertDialog() {
        this.updateUiData({
            alertDialog: {
                open: false,
                todo: null
            }
        });
    }

    static getDefaultUiData() {
        return {
            selectedTodo: null,
            alertDialog: {
                open: false,
                todo: null
            }
        };
    }
}

decorate(TodosUiStore, {
    addTodo: action,
    removeTodo: action,
    finishedTodos: computed,
    openTodos: computed
});