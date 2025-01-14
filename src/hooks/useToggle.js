import {useCallback, useState} from "react";

export function useToggle(initial = false) {
    const [state, setState] = useState(initial);
    const toggle = useCallback(() => setState(prevState => !prevState), []);

    return [state, toggle];
}
