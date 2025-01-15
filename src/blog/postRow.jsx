import {useContext} from "react";
import {useTheme} from "../hooks/useTheme.jsx";
import {Card} from "../ui/Card.jsx";

/**
 * Ligne article dans une grille
 *
 * @param {{ slug: string, post: { title: string, image: string, description: string } }} props
 */
export function PostRow({ id, post }) {
    const {theme} = useTheme()

    return (
        <div className="col-12 col-md-3">
            <Card image={`https://picsum.photos/id/${id}/300/300`} title={post.title} description={post.description} href={`blog/${post.slug}`} />
        </div>
    );
}
