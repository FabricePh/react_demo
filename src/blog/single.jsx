import { POSTS } from "./data.js";
import {useTheme} from "../hooks/useTheme.jsx";

/**
 * Affiche un article unique basé sur son slug.
 *
 * @param {{ slug: string }} props
 */
export default function Single({ slug }) {
    console.log(POSTS, slug)
    // Récupère le post correspondant au slug
    const [id, post] = Object.entries(POSTS).find(([id, post]) => post.slug === slug) || [];

    // Vérifie si le post existe
    if (!post) {
        return <div>Article non trouvé.</div>;
    }

    return (
        <div className="single-post">
            <h1>{post.title}</h1>
            <img src={`https://picsum.photos/id/${id}/300/300`} alt={post.title || "Image"} />
            <p>{post.description}</p>
        </div>
    );
}
