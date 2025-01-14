import {useState} from "react";

import {Checkbox} from "../forms/checkbox.jsx";
import {Input} from "../forms/input.jsx";

import {useToggle} from "../hooks/useToggle.js";
import {useIncrement} from "../hooks/useIncrement.js";
import {useDocumentTitle} from "../hooks/useDocumentTitle.js";
import {useFetch} from "../hooks/useFetch.js";

export function Hooks() {
    const [checked, toggleCheck] = useToggle();

    const {count, increment, decrement} = useIncrement({base:0, min:0, max:10});

    const [title, setTitle] = useState("");
    useDocumentTitle(title ? title : null);

    const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=5000');

    return <div className="">
        <h2>Toogle</h2>
        <div className="hstack gap-3">
            <Checkbox label="Etat ?" checked={checked} onChange={toggleCheck} />
            {checked && 'Je suis coché'}
        </div>
        <hr/>
        <div>
            <h2>Incrément (start, min, max)</h2>
            <div className="hstack gap-3">
                <span>Compteur <strong>{count}</strong></span>
                <button className="btn btn-sm btn-primary" onClick={decrement}>Décrémenter</button>
                <button className="btn btn-sm btn-primary" onClick={increment}>Incrémenter</button>
            </div>
        </div>
        <hr/>
        <div>
            <h2>Titre de la page</h2>
            <Input value={title} onChange={setTitle}/>
        </div>
        <hr/>
        <div>
            <h2>Récupération de DATA</h2>
            {loading && <div>Chargement...</div>}
            {errors && <div className="alert alert-warning">{errors.toString()}</div>}
            {data && <div>
                <ul>
                    {data.map(post => (<li key={post.id}>{post.title}</li>))}
                </ul>
            </div>}
        </div>
    </div>
}
