import {Products} from "./demo/products.jsx";
import {Duration} from "./demo/duration.jsx";
import {Hooks} from "./demo/hooks.jsx";
import {Memoisation} from "./demo/memoisation.jsx";
import {Portal} from "./demo/portal.jsx";
import {Blog} from "./demo/blog.jsx";
import {Reducer} from "./demo/reducer.jsx";
import {ThemeSwitcher} from "./hooks/useTheme.jsx";

function App() {
    return (
        <>
            <ThemeSwitcher />
            <div>
                <h1><a href="/">Démo avec GrafikArt</a></h1>
                {/*<Products />*/}
                {/*<hr/>*/}
                {/*<Duration start={1000}/>*/}
                {/*<hr/>*/}
                {/*<Hooks />*/}
                {/*<hr/>*/}
                {/*<Memoisation />*/}
                {/*<hr/>*/}
                {/*<Portal />*/}
                <Blog />
                {/*<Reducer />*/}
            </div>
        </>
    )
}

export default App
