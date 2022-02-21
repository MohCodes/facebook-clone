

import {ReactComponent as Logo2} from "../Util/img/magnifying-glass-solid.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHome, faDesktop,faStore,faUserGroup,faGamepad,faCaretDown,faMessage,faBell,faGrip} from "@fortawesome/free-solid-svg-icons"




function TopNavBar(props) {
    return (  
    <div className="navBarContainer">

        <div className="imgContainerHomePage"><img className="fblogoHomePage" alt = "facebookImage" src={require("../Util/img/2021_Facebook_icon.svg.png")}/></div>
            <div className="navBarSearch">
            <div className="searchLogo"><Logo2/></div> 
            <input className="searchBar" type='text' placeholder="Search For People"></input>
        </div>

        <div className="navBarLogosContainer">
        <FontAwesomeIcon size="xl" className="homeIcon icons" icon={faHome} />
        <FontAwesomeIcon size="xl" className="desktopIcon icons" icon={faDesktop} />
        <FontAwesomeIcon size="xl" className="storeIcon icons" icon={faStore} />
        <FontAwesomeIcon size="xl" className="groupIcon icons" icon={faUserGroup} />
        <FontAwesomeIcon size="xl" className="gamepadIcon icons" icon={faGamepad} />
        </div>

        <div className="userContainerNavBar">
            <div className="userNavBar">
                <div className="userPictureNavBar"><img className="userPicture" src={props.userImage} alt="UserImage"/></div>
                <div className="userNameNavBar">{props.userName}</div>
            </div>


        <div className="menuNavBar">
        <FontAwesomeIcon size="xl" className="userIcons userMenu" icon={faGrip} />
        </div>

        <div className="menuNavBar">
        <FontAwesomeIcon size="xl" className="userIcons userMessage" icon={faMessage} />
        </div>

        <div className="menuNavBar">
        <FontAwesomeIcon size="xl" className="userIcons userNotification" icon={faBell} />
        </div>

        <div className="menuNavBar">
        <FontAwesomeIcon size="xl" className="userIcons userUserMenu" icon={faCaretDown} />
        </div>

        </div>


    </div>
    );
}

export default TopNavBar;

