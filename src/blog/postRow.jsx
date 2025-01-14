/**
 * Ligne article dans une grille
 *
 * @param {{ slug: string, post: { title: string, image: string, description: string } }} props
 */
export function PostRow({ slug, post }) {
    return (
        <div>
        <div className="card">
            <img src={post.image} className="card-img-top" alt={post.title || "Image"} />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <a href={`/#post=${slug}`} className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
        </div>
    );
}
