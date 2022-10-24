import React from 'react'

const GradientBorder = ({children}) => {
    return(
        <div id='gradient-border'>
            <div className="gradient-container">
                <div className="gradient"/>
            </div>
            <div className="children">
                {children}
            </div>
        </div>
    )
}

export default GradientBorder