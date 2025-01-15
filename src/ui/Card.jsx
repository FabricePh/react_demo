import {useTheme} from "../hooks/useTheme.jsx";

export function Card({image, title, description, href, buttonLabel='Voir'}) {
    const {theme} = useTheme();

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={href} className="btn btn-primary">
                    {buttonLabel}
                </a>
                <div className="d-block badge text-bg-info">{theme}</div>
            </div>
        </div>
    )
}
