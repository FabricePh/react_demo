import {Home} from "./demo/home.jsx";
import {Products} from "./demo/products.jsx";
import {Duration} from "./demo/duration.jsx";
import {Hooks} from "./demo/hooks.jsx";
import {Memoisation} from "./demo/memoisation.jsx";
import {Portal} from "./demo/portal.jsx";
import {Blog} from "./demo/blog.jsx";
import {Reducer} from "./demo/reducer.jsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Header} from "./ui/Header.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/produits",
        element: <Products />
    },
    {
        path: "/duration",
        element: <Duration />
    },
    {
        path: "/hooks",
        element: <Hooks />
    },
    {
        path: "/memoisation",
        element: <Memoisation />
    },
    {
        path: "/portal",
        element: <Portal />
    },
    {
        path: "/reducer",
        element: <Reducer />
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
