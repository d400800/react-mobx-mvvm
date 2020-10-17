import {observable, makeObservable} from "mobx";

export default class UiStore {
    constructor({data, uiData} = {}) {
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
            uiData: observable
        });
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
        return {
            todos: []
        };
    }
}