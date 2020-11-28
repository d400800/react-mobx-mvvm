import {action, makeObservable, observable} from "mobx";

import ViewModel from "../../../shared/models/view-model";

export default class AudienceNameViewModel extends ViewModel {
    constructor({data, context}) {
        super({data, context});

        makeObservable(this, {
            enterEditMode: action,
            toggleEditMode: action,
            cancelUpdateName: action,
            editMode: observable,
            name: observable
        });
    }
    
    saveName(name) {
        this.audienceVm.update({name});

        this.toggleEditMode();
    }

    toggleEditMode() {
        this.update(
            {editMode: !this.editMode}
        );
    }

    enterEditMode(name) {
        this.toggleEditMode();

        this.update({name});
    }

    cancelUpdateName(name) {
        this.update(
            {
                name,
                editMode: false
            }
        );
    }

    static getDefaults() {
        return {
            name: '',
            editMode: false
        };
    }
}