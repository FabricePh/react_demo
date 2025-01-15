import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "../hooks/useTheme.jsx";

export function Header()
{
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">Démo Réact</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/blog" className="nav-link">blog</NavLink></li>
                <li className="nav-item"><NavLink to="/produits" className="nav-link">produits</NavLink></li>
                <li className="nav-item"><NavLink to="/duration" className="nav-link">duration</NavLink></li>
                <li className="nav-item"><NavLink to="/hooks" className="nav-link">hooks</NavLink></li>
                <li className="nav-item"><NavLink to="/memoisation" className="nav-link">memoisation</NavLink></li>
                <li className="nav-item"><NavLink to="/portal" className="nav-link">portal</NavLink></li>
                <li className="nav-item"><NavLink to="/reducer" className="nav-link">reducer</NavLink></li>
            </ul>

            <div className="col-md-3 text-end">
                <ThemeSwitcher />
            </div>
        </header>
    )
}
