import React, {createContext, useContext, useState, useEffect} from 'react';

import useViewModel from "../../../shared/hooks/use-view-model";
import AudienceWithSegmentsProvider from "../audience-with-segments-mock";
import Audience from "../model/audience";
import SegmentsProvider from "../segments-mock";

const AudienceBuilderStateContext = createContext();

export function AudienceBuilderContextProvider({children}) {
    const audienceViewModel = useViewModel(new Audience({
        deps: {
            mock: AudienceWithSegmentsProvider
        }
    }));

    const [segments, setSegments] = useState([]);

    useEffect(() => {
        async function loadSegments() {
            const response = await SegmentsProvider();

            setSegments(response.data);
        }

        loadSegments();
    }, []);

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