import React, {createContext, useContext, useState, useEffect} from 'react';

import useViewModel from "../../../shared/hooks/use-view-model";
import AudienceWithSegmentsProvider from "../audience-with-segments-mock";
import Audience from "../model/audience";
import SegmentsProvider from "../segments-mock";

const AudienceBuilderStateContext = createContext();

export function AudienceBuilderContextProvider({children}) {
    const audienceViewModel = useViewModel(() => new Audience({}));

    // TODO: add some infrastructure to data loading
    const [segments, setSegments] = useState([]);

    useEffect(() => {
        async function loadData() {
            const [segments, audienceWithSegments] = await Promise.all([
                SegmentsProvider(),
                AudienceWithSegmentsProvider()
            ]);

            setSegments(segments.data);
            audienceViewModel.update(audienceWithSegments.data);
        }

        loadData();
    }, [audienceViewModel]);

    const initialValue = {
        audienceViewModel,
        segments
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