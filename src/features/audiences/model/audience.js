import {action, computed, makeObservable, observable} from "mobx";

import ViewModel from "../../../shared/models/view-model";

export default class Audience extends ViewModel {
    constructor({data={}, context={}}) {
        super({data, context});

        makeObservable(this, {
            name: observable,
            saveAudience: action,
            removeCondition: action,
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

    removeCondition(clusivity, segmentGroupIndex, segmentId) {
        const newSegments = this[clusivity][segmentGroupIndex]
            .filter(s => s.id !== segmentId);

        this[clusivity]
            .splice(segmentGroupIndex, 1, newSegments);

        if (this[clusivity].length === 1 && this[clusivity][0].length === 0) {
            this[clusivity] = [];
        }
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