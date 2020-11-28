import {action, makeObservable, toJS} from "mobx";

export default class ViewModel {
    constructor({data, context} = {}) {
        Object.assign(
            this,
            this.constructor.getDefaults(),
            data,
            context
        );

        makeObservable(this, {
            update: action
        });
    }

    update(data) {
        for (const key in data) {
            this[key] = data[key];
        }
    }

    static getDefaults() {
        return {};
    }

    // Tl - transfer layer
    toTlData() {
        return toJS;
    }
}