import {useRef} from "react";

export default function useViewModel(viewModelInitializer) {
    const viewModelRef = useRef(null);

    if (!viewModelRef.current) {
        viewModelRef.current = viewModelInitializer();
    }

    return viewModelRef.current;
}