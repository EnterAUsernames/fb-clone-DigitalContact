import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";


//COVID-19( Information Center ), Pages, Friends, Messenger, Marketplace, Videos, Marketplace



function Sidebar() {
    const [{ user }, dispatch ] = useStateValue();

    return (
    <div className ="sidebar">
        
    <SidebarRow src={user.photoURL} title={user.displayName} />

    <SidebarRow Icon={LocalHospitalIcon} title="" />

    <SidebarRow Icon={EmojiFlagsIcon} title="" />        
    <SidebarRow Icon={PeopleIcon} title="" />
    <SidebarRow Icon={ChatIcon} title="" />
    <SidebarRow Icon={StorefrontIcon} title="" />
    <SidebarRow Icon={VideoLibraryIcon} title ="" />
    <SidebarRow Icon={ExpandMoreOutlined} title="" />

    </div>

);


}

export default Sidebar;