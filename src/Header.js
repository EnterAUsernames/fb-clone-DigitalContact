import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from"@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }, dipsatch] = useStateValue();

    return (
    
    <div className="header">
        <div className="header__left">
        <img src="https://pbs.twimg.com/media/FYXe-EiXgAAFSDR?format=jpg&name=small" alt = "" />



        <div className= "header__ input">
            <SearchIcon /><input type="text" />
            
            </div>
            </div>




    <div className="header__center">
    <div className="header__option header__option--active">
        <HomeIcon fontsize="large" />
        </div>

        <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
           
            <div className="header__option">
                <SubscriptionsOutlinedIcon fontSize="large" />

            </div>

            <div className="header__option">
                <StorefrontOutlinedIcon fontSize="large" />
            </div>

            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />





            </div>
            

    <div className="header__option">
        <FlagIcon fontSize=":large" />

        </div>
    </div>




    <div className="header__right">

    <div className="header__info header__info--active">
        <Avatar src={user.photoURL} />

        <h4>{user.displayName}</h4>


        <div className="header__info">
                <AddIcon fontSize="medium" />
            </div>



            <div className="header__info">
                <ForumIcon fontSize="medium" />
            </div>




            <div className="header__info">
                <NotificationsActiveIcon fontSize="medium" />
            </div>



            <div className="header__info">
                <ExpandMoreIcon fontSize="medium" />
            </div>

          




        </div>
    </div>
    </div>


    );
}

export default Header;

