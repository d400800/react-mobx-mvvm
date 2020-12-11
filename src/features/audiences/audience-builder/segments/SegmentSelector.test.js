import {render, mount} from 'enzyme';
import React from "react";

import {AudienceBuilderContextProvider} from '../AudienceBuilderContext';
import SegmentSelector from "./SegmentSelector";

describe('Testing SegmentSelector', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(
            <AudienceBuilderContextProvider>
                <SegmentSelector clusivity={'includedSegments'} />
            </AudienceBuilderContextProvider>
        );
    });

    it('should have "add condition" button text', () => {
        const button = wrapper.find('[data-test="btn"]').hostNodes();

        expect(button.text())
            .toEqual('add condition');
    });

    it('should open a popover box on add condition click', () => {
        const button = wrapper.find('[data-test="btn"]').hostNodes();

        button.simulate('click');

        expect(wrapper.find('[data-test="box"]').hostNodes())
            .toHaveLength(1);
    });
});