import React from 'react'

const Contact = ({text,match}) => {
    return (
        <div>
            <h1>Contact</h1>

            <p>{text}</p>

            <h1>{match.params.info}</h1>
        </div>
    )
}

export default Contact
