import {shallow, render} from 'enzyme';
import React from "react";

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

describe('SegmentsTree enzyme shallow', () => {
    it('should match the snapshot', () => {
        const component = shallow(<SegmentsTree segmentGroup={segmentGroup} segmentGroupIndex={0} />);

        expect(component).toMatchSnapshot();
    });

    it('should not print the operator of the 1st child of the 1st parent', () => {
        const wrapper = render(<SegmentsTree segmentGroup={segmentGroup} segmentGroupIndex={0} />);

        expect(wrapper.find('[operator-box="true"]').first().text())
            .toEqual('');
    });
});