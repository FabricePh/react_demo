import { POSTS } from "./data.js";

/**
 * Affiche un article unique basé sur son slug.
 *
 * @param {{ slug: string }} props
 */
export default function Single({ slug }) {
    // Récupère le post correspondant au slug
    const post = POSTS[slug];

    // Vérifie si le post existe
    if (!post) {
        return <div>Article non trouvé.</div>;
    }

    return (
        <div className="single-post">
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title || "Image"} />
            <p>{post.description}</p>
        </div>
    );
}
