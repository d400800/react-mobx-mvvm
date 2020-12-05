import React, {createContext, useContext} from 'react';

import useViewModel from "../../../shared/hooks/use-view-model";
import Audience from "../model/audience";
import useAudienceBuilder from './use-audience-builder';

const AudienceBuilderStateContext = createContext();

export function AudienceBuilderContextProvider({children, audienceResource}) {
    const audienceViewModel = useViewModel(() => new Audience({
        data: {},
        context: {audienceResource}
    }));
    
    const {loaded, segments, audienceWithSegments} = useAudienceBuilder();

    audienceViewModel.update(audienceWithSegments);

    const initialValue = {
        audienceViewModel,
        segments,
        loaded
    };

    return (
        <AudienceBuilderStateContext.Provider value={initialValue}>
            {children}
        </AudienceBuilderStateContext.Provider>
    );
}

export function useAudienceBuilderStateContext() {
    return useContext(AudienceBuilderStateContext);
}