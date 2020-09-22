import UiStore from "../../../shared/models/UiStore";
import {action, decorate} from "mobx";

export default class TodoUiStore extends UiStore {
    static getDefaultUiData() {
        return {
            isEditing: false
        }
    }

    toggleIsDone() {
        this.data.isDone = !this.data.isDone;
    }

    toggleIsEditing() {
        this.uiData.isEditing = !this.uiData.isEditing;
    }

    updateText(text) {
        this.data.text = text;
    }
}

decorate(TodoUiStore, {
    toggleIsDone: action,
    toggleIsEditing: action,
    updateText: action
});