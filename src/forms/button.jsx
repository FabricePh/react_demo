import {useContext} from "react";

/**
 *
 * @param {"primary" | "secondary", | "info", | "warning", | "danger"} variant
 * @returns {JSX.Element}
 */
export function Button ({variant = 'primary', ...props }) {
    const newProps = {
        ...props,
        className: `btn btn-sm btn-${variant}`,
    }

    if(props.href){
        return <a {...newProps} />
    }
    return <button {...newProps} />
}
