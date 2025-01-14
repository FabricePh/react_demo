

import {Products} from "./demo/products.jsx";
import {Duration} from "./demo/duration.jsx";
import {Hooks} from "./demo/hooks.jsx";

function App() {

    return <div>
        <h1>Démo avec GrafikArt</h1>
        <Products />
        <hr/>
        <Duration start={1000}/>
        <hr/>
        <Hooks />
    </div>
}


export default App
