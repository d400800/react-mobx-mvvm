import {action, makeObservable} from "mobx";

import ViewModel from "../../../shared/models/view-model";

export default class TodoItemViewModel extends ViewModel {
    constructor({data, uiData}) {
        super({data, uiData});

        makeObservable(this, {
            toggleIsDone: action,
            toggleIsEditing: action,
            updateText: action
        });
    }
    
    static getDefaultUiData() {
        return {
            isEditing: false
        };
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