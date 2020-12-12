import {mount} from 'enzyme';
import React from "react";

import AudienceBuilder from "./AudienceBuilder";
import {AudienceBuilderContextProvider} from './AudienceBuilderContext';

jest.mock('./use-audience-builder', () => jest.fn(() => ({
    loaded: true,
    segments: [
        {
            id: "R1",
            parentId: "R",
            name: "Homepage",
            numOfUsers: 5887
        }
    ],
    audienceWithSegments: {
        id: 10,
        companyId: 1001,
        updateDate: "2018-06-19T14:03:47.000Z",
        name:"Nike leavers",
        lifespanDays: 5,
        excludedSegments: [],
        includedSegments: [
            [
                {
                    id: "R5",
                    parentId: "R",
                    name: "Wishlist page",
                    numOfUsers: 411
                },
                {
                    id: "C5",
                    parentId: "C",
                    name: "Remove from wishlist",
                    numOfUsers: 112
                }
            ]
        ]
    }
})));

describe('Testing Audience Builder', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <AudienceBuilderContextProvider>
                <AudienceBuilder />
            </AudienceBuilderContextProvider>
        );
    });

    it('should remove a condition on clicking on a remove icon button', async () => {
        const removeIconBtn = wrapper.find('[aria-label="delete"]').hostNodes().first();

        removeIconBtn.simulate('click');

        expect(wrapper.find('[operator-box="true"]').hostNodes())
            .toHaveLength(1);
    });
});