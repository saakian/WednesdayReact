import React from 'react'
import '../Search/Search.css'
import TwoWheelerOutlinedIcon from '@material-ui/icons/TwoWheelerOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
import {Link} from "react-router-dom"


function Search() {

    



    return (
        <div className="Master">
            <div className="Search_Container">
            {/* <div>hello</div> */}
                <div className="Search_Level_One">
                 <Link to="/Ergasia_Page" style={{textDecoration:'none'}}>  <div className="Level_One"><AccountBalanceWalletOutlinedIcon className="bike"/><h2>Εργασια</h2></div></Link>
                    <div className="Level_One"><HomeOutlinedIcon className="bike"/><h2>Ακινητα</h2></div>
                    <div className="Level_One"><DriveEtaOutlinedIcon className="bike"/><h2>Αυτοκινητα</h2></div>
                    <div className="Level_One"><TwoWheelerOutlinedIcon className="bike"/><h2>Μηχανες</h2></div>
                    <div className="Level_One"><DynamicFeedOutlinedIcon className="bike"/><h2>Ολες</h2></div>
                </div>
            
            </div>
        </div>
    )
}

export default Search
