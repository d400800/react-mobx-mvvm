import {action, computed, observable, decorate} from "mobx";
import ViewModel from "../../../shared/models/ViewModel";

export default class TodosUiStore extends ViewModel {
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
        return this.todos.filter(todo => todo.data.isDone);
    }

    get openTodos() {
        return this.todos.filter(todo => !todo.data.isDone);
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