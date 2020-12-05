import {action, computed, makeObservable, observable} from "mobx";

import ViewModel from "../../../shared/models/view-model";

export default class Audience extends ViewModel {
    constructor({data={}, context={}}) {
        super({data, context});

        makeObservable(this, {
            name: observable,
            saveAudience: action,
            includedSegments: observable,
            excludedSegments: observable,
            includedSegmentIds: computed,
            excludedSegmentIds: computed
        });
    }

    saveAudience() {
        this.audienceResource.saveAudience(
            {
                name: this.name,
                lifespanDays: this.lifespanDays,
                includedSegments: this.toTlData()(this.includedSegments),
                excludedSegments: this.toTlData()(this.excludedSegments)
            }
        );
    }

    static getDefaults() {
        return {
            name: '',
            id: null,
            excludedSegments: [],
            includedSegments: [],
            lifespanDays: null
        };
    }

    get includedSegmentIds() {
        return this.includedSegments
            .map(sg => sg.map(s => s.id));
    }

    get excludedSegmentIds() {
        return this.excludedSegments
            .map(sg => sg.map(s => s.id));
    }
}