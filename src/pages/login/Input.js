import React from 'react'
import "./login.css"

const Input = ({ type, name, value, onChange, label }) => {
    return (
        <div className='group'>
            <label htmlFor="user" className="label">
                {label}
            </label>
            <input
                id="user"
                type={type}
                className="input"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input