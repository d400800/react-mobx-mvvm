import React, {createContext, useContext} from 'react';

import useViewModel from "../../../shared/hooks/use-view-model";
import audienceResource from "../../audiences/audience-builder/audience-resource";
import Audience from "../model/audience";
import useAudienceBuilder from './use-audience-builder';

const AudienceBuilderStateContext = createContext();

export function AudienceBuilderContextProvider({children}) {
    const audienceViewModel = useViewModel(() => new Audience({
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