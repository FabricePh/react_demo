import {POSTS} from "./data.js";
import {PostRow} from "./postRow.jsx";

export function Home(){
    const rows = Object.entries(POSTS).map(([id, post]) => (
        <PostRow key={id} id={id} post={post} />
    ));

    return (
        <>
        <h1>Articles</h1>
        <div className="row">
            {rows}
        </div>
        </>
    )
}
