import {useState} from "react";

export default function useViewModel(initialViewModelState) {
    const [UiStore] = useState(initialViewModelState);

    return UiStore;
}