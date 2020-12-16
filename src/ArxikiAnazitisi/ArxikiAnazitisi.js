import React from 'react'
import './ArxikiAnazitisi.css'
import {Link} from 'react-router-dom'

function ArxikiAnazitisi() {
    return (
        <div className="Epiloges">
            <Link to="/Search" style={{ textDecoration: 'none' }}><div className="Epilogi_Anazitisi"><h1>Aναζητηση</h1></div></Link>
            <Link to="/New" style={{ textDecoration: 'none' }}><div className="Epilogi_Anazitisi"><h1>Δημιουργια</h1></div></Link>
        </div>
    )
}

export default ArxikiAnazitisi
