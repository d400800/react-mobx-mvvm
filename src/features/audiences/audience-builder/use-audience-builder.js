import {useEffect, useState} from "react";

import AudienceWithSegmentsProvider from "../audience-with-segments-mock";
import SegmentsProvider from "../segments-mock";

export default function useAudienceBuilder() {
    const [loaded, setLoaded] = useState(false);
    const [segments, setSegments] = useState([]);
    const [audienceWithSegments, setAudienceWithSegments] = useState([]);

    useEffect(() => {
        async function loadData() {
            const [segments, audienceWithSegments] = await Promise.all([
                SegmentsProvider(),
                AudienceWithSegmentsProvider()
            ]);

            setSegments(segments.data);
            setAudienceWithSegments(audienceWithSegments.data);

            setLoaded(true);
        }

        loadData();
    }, []);

    return {
        loaded,
        segments,
        audienceWithSegments
    };
}