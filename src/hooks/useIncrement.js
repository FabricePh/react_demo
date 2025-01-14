import {useCallback, useState} from "react";

export function useIncrement({base=0, step=1, min=-Infinity, max=Infinity}) {
    const [state, setState] = useState(base);

    return {
        count : state,
        increment : useCallback(() => setState(v => v < max ? v+step : v), [max, step]),
        decrement : useCallback(() => setState(v => v > min ? v-step : v), [min, step]),
    }
}
