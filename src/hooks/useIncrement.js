import {useState} from "react";

export function useIncrement({base=0, step=1, min=-Infinity, max=Infinity}) {
    const [state, setState] = useState(base);

    return {
        count : state,
        increment : () => setState(v => v < max ? v+step : v),
        decrement : () => setState(v => v > min ? v-step : v),
    }

}
