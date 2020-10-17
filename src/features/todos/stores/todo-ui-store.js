import {action, makeObservable} from "mobx";

import UiStore from "../../../shared/models/ui-store";

export default class TodoUiStore extends UiStore {
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