import useHashNavigation from "../hooks/useHashNavigation.jsx";
import {NotFound} from "../blog/notFound.jsx";
import {Home} from "../blog/home.jsx";
import {lazy, Suspense} from "react";
import {Header} from "../ui/Header.jsx";

export function Blog() {
    const {page, param} = useHashNavigation();
    const pageContent = getPageContent(page, param);

    return (
        <>
            <Header />
            <div className="container my-2">{pageContent}</div>
        </>
    )
}

function getPageContent(page, param) {
    if(page === undefined || page === "home"){
        return <Home />
    }
    if(page === "post"){
        const SingleLazy = lazy(() => import ('../blog/single'))
        return <Suspense fallback={<div>Chargement</div>}>
            <SingleLazy slug={param} />
        </Suspense>;
    }

    return <NotFound page={page} />
}
