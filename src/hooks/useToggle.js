import {useState} from "react";

export function useToggle(initial = false) {
    const [state, setState] = useState(initial);
    const toggle = () => setState(prevState => !prevState);

    return [state, toggle];
}
