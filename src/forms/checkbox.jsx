import { useId, forwardRef } from "react";

/**
 * @param {string} id
 * @param {string} label
 * @param {boolean} checked
 * @param {(s:string) => void} onChange
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
export const Checkbox  = forwardRef(function Checkbox ({id, label, checked, onChange, className}, ref) {
    if(id === undefined) {
        id = useId();
    }

    return <div className={`form-check ${className || ''}`}>
        <input type="checkbox"
            id={id}
            ref={ref}
            className="form-check-input"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
})

Checkbox.displayName = 'FormCheckbox';
