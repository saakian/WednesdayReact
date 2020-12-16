import React from 'react'
import logo from '../images/xelogo.png'
import '../Navigation/Navigation.css'

import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {Link} from "react-router-dom"

function Navigation() {
    return (
        <div className="Navigation_Container">
            <div className="Navigation_Logo">
                <div className="logo_div">
                  <Link to="/"> <img src={logo} className="main_logo" alt=""></img></Link>
                </div>
                    <div className="Nea_Aggelia_Wrap">
                    <h1>Εγγραφη</h1>
                    <CreateRoundedIcon className="book"/>
                    {/* <h2>Καλημερα</h2> */}
                    </div>
                </div>
        </div>
    )
}

export default Navigation
