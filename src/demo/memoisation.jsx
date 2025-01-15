//https://grafikart.fr/tutoriels/react-memo-usecallback-1321

import {useState, memo, useCallback, useRef} from "react";
import {Input} from "../forms/input.jsx";

export function Memoisation() {
    const [name, setName] = useState("");
    const nameRef = useRef(name);
    nameRef.current = name;

    const handleClick = useCallback(() => { //useMemo raccourci
        console.log(nameRef.current);
    }, []);

    return <div>
        <Input type="text" value={name} onChange={setName}/>
        <div>
        Text : {name}
        </div>
        <InfoMemo onClick={handleClick} />
    </div>
}

const InfoMemo = memo(function Info({onClick}) {
    return <h2 onClick={onClick}>Titre 2</h2>
})
