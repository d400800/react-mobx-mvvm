import {action, makeObservable} from "mobx";

import ViewModel from "../../../shared/models/view-model";

export default class AudienceNameViewModel extends ViewModel {
    constructor({data, uiData, deps}) {
        super({data, uiData, deps});

        makeObservable(this, {
            enterEditMode: action,
            toggleEditMode: action,
            cancelUpdateName: action
        });
    }
    
    saveName(name) {
        this.audienceVm.updateData({name});

        this.toggleEditMode();
    }

    toggleEditMode() {
        this.updateUiData(
            {editMode: !this.uiData.editMode}
        );
    }

    enterEditMode(name) {
        this.toggleEditMode();

        this.updateData({name});
    }

    cancelUpdateName(name) {
        this.update(
            {name},
            {editMode: false}
        );
    }

    static getDefaultData() {
        return {
            name: ''
        };
    }

    static getDefaultUiData() {
        return {
            editMode: false
        };
    }
}