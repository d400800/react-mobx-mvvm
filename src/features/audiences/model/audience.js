import {action, toJS, makeObservable} from "mobx";

import ViewModel from "../../../shared/models/view-model";

export default class Audience extends ViewModel {
    constructor({data, uiData, deps}) {
        super({data, uiData, deps});

        makeObservable(this, {
            loadAudience: action,
            saveAudience: action
        });

        this.loadAudience();
    }

    async loadAudience() {
        const response = await this.mock();

        const {name, included, excluded, categories, lifespan_days: lifespanDays, id} = response.data;

        this.updateData({
            name,
            included,
            excluded,
            categories,
            lifespanDays,
            id
        });
    }

    saveAudience() {
        console.log(toJS(this.data));
    }

    static getDefaultData() {
        return {
            id: null,
            lifespanDays: null,
            categories: [],
            included: [],
            excluded: [],
            name: ''
        };
    }

    static getDefaultUiData() {
        return {};
    }
}