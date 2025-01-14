import {useEffect, useState} from "react";
import {Input} from "../forms/input.jsx";

export function Duration({start = 0})
{
    const [duration, setDuration] = useState(start);
    const [secondsLeft, setSecondsLeft] = useState(duration);

    const handleChange = (v) => {
        setDuration(v)
        setSecondsLeft(v)
    }
    useEffect(() => {
        const time = setInterval(() => {
            setSecondsLeft(v => {
                if (v <= 1){
                    clearInterval(time)
                    return 0;
                }
                return v-1;
            })
        }, 100);
        return () => {
            clearInterval(time)
        }

    }, [duration]);

    return (
    <div>
        <h2>Gestion de temps</h2>
        <div className="hstack gap-2">
            <Input value={duration.toString()} onChange={handleChange} placeholder="Timer..." />
            <p>Décompte : {secondsLeft}</p>
        </div>
    </div>
    )
}
