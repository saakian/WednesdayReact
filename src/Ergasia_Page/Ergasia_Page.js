import React from 'react'
import './Ergasia_Page.css'

import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

import {Link} from "react-router-dom"

function Ergasia_Page() {
    return (
        <div className="Master">
            <div className="Search_Container/">
                
                <div className="Level_One_e"><AccountBalanceWalletOutlinedIcon className="bike"/><h2 className="h2_katigories">Κατηγοριες</h2><h2 className="Active_Ergasia">Εργασιας</h2></div>

            </div>
            
        </div>
    )
}

export default Ergasia_Page
