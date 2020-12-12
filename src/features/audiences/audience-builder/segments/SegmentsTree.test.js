import {mount} from 'enzyme';
import React from "react";

import {AudienceBuilderContextProvider} from '../AudienceBuilderContext';
import SegmentsTree from "./SegmentsTree";

const segmentGroup = [
    {
        id: "C2",
        parentId: "C",
        name: "Click",
        numOfUsers: 13
    },
    {
        id: "C7",
        parentId: "C",
        name:"Abandoned cart",
        numOfUsers: 8
    }
];

describe('Testing SegmentsTree', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(
            <AudienceBuilderContextProvider>
                <SegmentsTree clusivity="includedSegments" segmentGroup={segmentGroup} segmentGroupIndex={0} />
            </AudienceBuilderContextProvider>
        );
    });
    
    it('should render 2 conditions', () => {
        expect(wrapper.find('[operator-box="true"]').hostNodes())
            .toHaveLength(2);
    });
    
    it('should not print the operator of the 1st child of the 1st parent', () => {
        expect(wrapper.find('[operator-box="true"]').first().text())
            .toEqual('');
    });
});