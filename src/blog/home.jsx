import {POSTS} from "./data.js";
import {PostRow} from "./postRow.jsx";

export function Home(){
    const rows = Object.entries(POSTS).map(([slug, post]) => (
        <PostRow key={slug} slug={slug} post={post} />
  ));

    return (
        <>
        <h1>Articles</h1>
        <div className="hstack gap-3">
            {rows}
        </div>
        </>
    )
}
