import {ReactComponent as Logo2} from "../Util/img/magnifying-glass-solid.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHome, faDesktop,faStore,faUserGroup,faGamepad} from "@fortawesome/free-solid-svg-icons"





function TopNavBar() {
    return (  
    <div className="navBarContainer">

        <div className="imgContainerHomePage"><img className="fblogoHomePage" src={require("../Util/img/2021_Facebook_icon.svg.png")}/></div>
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

        </div>

    </div>
    );
}

export default TopNavBar;

