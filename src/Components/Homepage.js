import TopNavBar from "./TopNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faStar,faNewspaper,faCalendar,faFlag,faHome, faDesktop,faStore,faUserGroup,faGamepad,faCaretDown,faMessage,faBell,faGrip,famedical,faDatabase, faBookmark,faClockRotateLeft} from "@fortawesome/free-solid-svg-icons"
import { dummyAPIFetch } from "../Util/firebase";


let randomUserArray 
function Homepage(props) {
    const dummyAPIFetchFunction = async()=>{
        randomUserArray = await fetch(dummyAPIFetch).then(data=>data.json())
        console.log(randomUserArray)
    }

    dummyAPIFetchFunction();

    const leftSideBarComponentsArray = [{name:"Find Friends", display:faUserGroup},
                                        {name:"MarketPlace",display:faStore},
                                        {name:"Memories",display: faClockRotateLeft},
                                        {name:"Saved" ,display:faBookmark},
                                        {name:"Pages", display:faFlag},
                                        {name:"Events",display:faCalendar},
                                        {name:"Most Recent",display:faNewspaper},
                                        {name:"Favorites",display:faStar}]

    const leftSideBarComponentsArrayDisplay = leftSideBarComponentsArray.map((item)=>{
        return(
        <div key = {item.name} className="leftSideBarComponent">
            <div className="leftSideBarComponentDisplay"><FontAwesomeIcon size="xl" className="userPictureSideBar" icon={item.display} /></div>
            <div className="leftSideBarComponentLabel">{item.name}</div>
        </div>
        )
    })

    return (  <div>
        <TopNavBar userName ={props.userName} userImage = {props.userImageNav} />
        <div className="dividerDiv" onClick={props.logout}>logout</div>

    <div className="ContentContainer">

        <div className="mainBars leftSideBar">
            <div className="leftSideBarComponent">
                <div className="leftSideBarComponentDisplay"><img className="userPictureSideBar" alt="userDisplay" src={props.userImageNav}/></div>
                <div className="leftSideBarComponentLabel">{props.userFullName}</div>
            </div>

            {leftSideBarComponentsArrayDisplay}
        </div>

        <div className="mainBars mainContent">

        </div>

        <div className="mainBars friendsSideBar">

        </div>

    </div>


    </div>
    );
}

export default Homepage;