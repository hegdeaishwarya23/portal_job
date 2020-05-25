import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="animated flash banner1">
            <h2>{title}</h2>
            <div></div>
            <p>{subtitle}</p>
            {children}
            
        </div>
    )
}
