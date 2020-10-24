import {action, runInAction, toJS, makeObservable} from "mobx";

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

        const {name, included, excluded, categories, excludedCategories, lifespan_days: lifespanDays, id} = response.data;

        runInAction(() => {
            this.updateData({
                name,
                included,
                excluded,
                categories,
                lifespanDays,
                excludedCategories,
                id
            });
        });
    }

    saveAudience() {
        console.log(toJS(this.data));
        console.log(this.toJSON());
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