import TopNavBar from "./TopNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEllipsis,faMagnifyingGlass,faStar,faNewspaper,faCalendar,faFlag,faStore,faUserGroup, faBookmark,faClockRotateLeft,faVideo} from "@fortawesome/free-solid-svg-icons"
import { dummyAPIFetch } from "../Util/firebase";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";




function Homepage(props) {


const [randomUserArray,setRandomUserArray] = useState() 


useEffect (()=>{
    const dummyAPIFetchFunction = async()=>{
        let fetcha = await fetch(dummyAPIFetch)
        fetcha = await fetcha.json()
        await setRandomUserArray(fetcha.results )
    
}
dummyAPIFetchFunction()
    
},[])

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

    let friendListDisplay

    if(randomUserArray){
    friendListDisplay = randomUserArray.map((item)=>{
        
        return(
            <div  key={item.phone} className ="friendCard">
                        <div className="imageContainerFriend">
                            <div className="friendImage"><img alt= "userImage" className= "userImage" src={item.picture.thumbnail}/></div>
                            <div className="onlineIndicator"></div>
                        </div>
                        <div className="friendUserName">{item.name.first +" "+ item.name.last }</div>
                    </div>

        )
    })
}

    return (  <div className="homePageContainer">
        <TopNavBar userName ={props.userName} userImage = {props.userImageNav} logout={props.logout}/>
        <div className="dividerDiv" ></div>

    <div className="ContentContainer1">

        <div className="mainBars leftSideBar">
            <div className="leftSideBarComponent">
                <div className="leftSideBarComponentDisplay"><img className="userPictureSideBar" alt="userDisplay" src={props.userImageNav}/></div>
                <div className="leftSideBarComponentLabel">{props.userFullName}</div>
            </div>

            {leftSideBarComponentsArrayDisplay}
        </div>

        <div className="mainBars mainContent">
            <MainContent userName ={props.userFullName} userImage={props.userImageNav} />
        </div>

        <div className="mainBars friendsSideBar">
            <div className="friendHeaderContainer">
                <div className="contactsText">Contacts</div>
                <div className="leftSideFriendsBar">
                <div className="newRoom"><FontAwesomeIcon size="lg" className="friendsBarIcons" icon={faVideo} /></div>
                <div className="Search"><FontAwesomeIcon size="lg" className="friendsBarIcons" icon={faMagnifyingGlass} /></div>
                <div className="More"><FontAwesomeIcon size="lg" className="friendsBarIcons" icon={faEllipsis} /></div>
                </div>
    
            </div>
                <div className="friendContainer">
                    {friendListDisplay}

                </div>
                
        </div>

    </div>


    </div>
    );
}

export default Homepage;