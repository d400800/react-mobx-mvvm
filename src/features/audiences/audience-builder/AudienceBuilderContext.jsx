import React, {createContext, useContext, useEffect, useMemo} from 'react';

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

    const initialValue = useMemo(() => ({
        audienceViewModel,
        segments,
        loaded
    }), [audienceViewModel, segments, loaded]);

    useEffect(() => {
        audienceViewModel.update(audienceWithSegments);
    },[audienceWithSegments]);

    if (!loaded) {
        return null;
    }

    return (
        <AudienceBuilderStateContext.Provider value={initialValue}>
            {children}
        </AudienceBuilderStateContext.Provider>
    );
}

export function useAudienceBuilderStateContext() {
    return useContext(AudienceBuilderStateContext);
}