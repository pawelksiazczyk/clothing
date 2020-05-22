import React from 'react';
import "./formInput.styles.scss"

const FormInput = ({handleChange, label, ...others}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...others}></input>
            {
                label ?
                    (<label className={`${others.value.length ? "shrink" : ""} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput
