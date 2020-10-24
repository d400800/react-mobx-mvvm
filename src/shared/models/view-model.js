import {observable, action, makeObservable} from "mobx";

export default class ViewModel {
    constructor({data, uiData, deps} = {}) {
        this.data = {
            ...this.constructor.getDefaultData(),
            ...data
        };

        this.uiData = {
            ...this.constructor.getDefaultUiData(),
            ...uiData
        };

        makeObservable(this, {
            data: observable,
            uiData: observable,
            updateData: action,
            updateUiData: action,
            update: action
        });

        Object.assign(this, deps);
    }

    updateUiData(uiData) {
        for (const key in uiData) {
            this.uiData[key] = uiData[key];
        }
    }

    updateData(data) {
        for (const key in data) {
            this.data[key] = data[key];
        }
    }

    update(data, uiData) {
        this.updateData(data);
        this.updateUiData(uiData);
    }

    static getDefaultUiData() {
        return {};
    }

    static getDefaultData() {
        return {};
    }

    toJSON() {
        return {data: this.data};
    }
}