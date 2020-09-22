import {action, computed, observable, decorate} from "mobx";
import UiStore from "../../../shared/models/UiStore";

export default class TodosUiStore extends UiStore {
    addTodo(todo) {
        this.data.todos.push(todo);
    };

    removeTodo(todo) {
        this.data.todos.remove(todo);
    };

    selectTodo(todo) {
        this.uiData.selectedTodo = todo;
    }

    get finishedTodos() {
        return this.data.todos.filter(todo => todo.data.isDone);
    }

    get openTodos() {
        return this.data.todos.filter(todo => !todo.data.isDone);
    }

    getTodos() {
        return this.data.todos;
    }

    static getDefaultUiData() {
        return {
            selectedTodo: null
        }
    }
}

decorate(TodosUiStore, {
    addTodo: action,
    removeTodo: action,
    finishedTodos: computed,
    openTodos: computed
});