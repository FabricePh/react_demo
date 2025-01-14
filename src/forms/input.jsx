import {useId, forwardRef} from "react";

/**
 * @param {string} id
 * @param {string} label
 * @param {string} value
 * @param {(s:string) => void} onChange
 * @param {string} placeholder
 * @returns {JSX.Element}
 * @constructor
 */
export const Input = forwardRef(function Input ({id, label, value, onChange, placeholder}, ref) {
    if(id === undefined) {
        id = useId();
    }

    return <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input
            ref={ref}
            type="text"
            id={id}
            className="form-control"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
})

Input.displayName = 'FormInput';
