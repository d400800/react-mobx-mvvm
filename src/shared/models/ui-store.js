import {observable, decorate} from "mobx";

export default class UiStore {
    constructor({data, uiData} = {}) {
        this.data = data;

        this.uiData = {
            ...this.constructor.getDefaultUiData(),
            ...uiData
        };
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
}

decorate(UiStore, {
    data: observable,
    uiData: observable
});