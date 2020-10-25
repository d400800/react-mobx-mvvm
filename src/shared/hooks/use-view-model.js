import {useRef} from "react";

export default function useViewModel(initialViewModelState) {
    let uiStoreRef = useRef(null);

    if (!uiStoreRef.current) {
        uiStoreRef.current = initialViewModelState;
    }

    return uiStoreRef.current;
}