import ViewModel from "../../../shared/models/view-model";

export default class CampaignViewModel extends ViewModel {
    constructor({data, uiData}) {
        super({data, uiData});
    }

    static getDefaultData() {
        return {
            goal: 'click'
        };
    }
}