import React from 'react'
import {useHistory,Link} from 'react-router-dom'

const Help = () => {

    const history = useHistory()
    return (
        <div>
            <h1>Help</h1>
            <button onClick={()=> history.goBack()} >Go back</button>
            <button><Link to="/contact/i came to help" >Go contact </Link></button>
        </div>
    )
}

export default Help
