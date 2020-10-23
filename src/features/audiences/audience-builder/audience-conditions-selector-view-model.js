import PureViewModel from '../../../shared/utils/model/pure-view-model';

export default class AudienceConditionsSelectorViewModel extends PureViewModel {
    static getSchema() {
        return {
            type: 'object',
            properties: {
                addConditionOpen: {type: 'boolean'}
            },
            additionalProperties: false
        };
    }

    toggleAddConditionOpen() {
        this.update({
            addConditionOpen: !this.addConditionOpen
        });
    }

    // ("G" AND "R1na") OR ("R2ik" AND "R2im")
    // [["G","R1na"],["R2ik","R2im"]]

    selectSegment(segmentId) {
        this.update({

        });
    }

    static getDefaults() {
        return {
            addConditionOpen: false
        };
    }
}