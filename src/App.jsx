//https://grafikart.fr/tutoriels/react-router-dom-2159

import {Home} from "./demo/home.jsx";
import {Products} from "./demo/products.jsx";
import {Duration} from "./demo/duration.jsx";
import {Hooks} from "./demo/hooks.jsx";
import {Memoisation} from "./demo/memoisation.jsx";
import {Portal} from "./demo/portal.jsx";

import {Index} from "./blog/index.jsx";
import Single from "./blog/single.jsx";

import {Reducer} from "./demo/reducer.jsx";

import {createBrowserRouter, Outlet, RouterProvider, useNavigation, useRouteError} from "react-router-dom";
import {Header} from "./ui/Header.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootOutlet />,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "blog",
                children: [
                {
                    path: "",
                    element: <Index />
                },
                {
                    path: ":slug",
                    element: <Single />
                },
                ]
            },
            {
                path: "produits",
                element: <Products />
            },
            {
                path: "duration",
                element: <Duration />
            },
            {
                path: "hooks",
                element: <Hooks />
            },
            {
                path: "memoisation",
                element: <Memoisation />
            },
            {
                path: "portal",
                element: <Portal />
            },
            {
                path: "reducer",
                element: <Reducer />
            },
        ]
    },
])

function RootOutlet() {
    const{state} = useNavigation()

    return <>
        <Header />
        <div className="container my-4">
            {state === 'loading' && <div>Chargement...</div>}
            <Outlet />
        </div>
    </>
}

function PageError(){
    const error = useRouteError();

    return <>
        <h1>Une erreur est survenue</h1>
    </>
}

function App() {
    return <RouterProvider router={router} />
}

export default App
