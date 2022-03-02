
import { getAuth } from "firebase/auth";
import {db} from "../Util/firebase"
import { doc, setDoc } from "firebase/firestore"; 
import { updateDoc, serverTimestamp } from "firebase/firestore";




function MainContent(props) {

let postID = localStorage.getItem("postId") || 0 

const addPostToFireBase = async ()=>{
    const auth = await getAuth();
    const userInfoID = auth.currentUser.uid.toString();
    const serverTime = serverTimestamp()
    const postString = document.getElementById("statuesInput").value
    await setDoc(doc(db,userInfoID,`post${postID}`),{
        post: postString,
        timestamp: serverTime
    })
    postID++
    localStorage.setItem("postId",postID)

}




    return (  
    <div className="MainContainer">
        <div className ="storiesContainer">

        </div>

        <div className="statuesPost">
            <div className="inputStatuesContaienr">
                <div className="imageContainerStatuesPost"><img className="userPicture" src={props.userImage} alt = "" /></div>
                <input placeholder="What's on your mind?" id = "statuesInput"className="statuesInput" type="text"></input>
            </div>

            <div className="postContainer">
                <div className="addPicture bottomStatuesBar"> Add Picture</div>
                <div className="postStatuesButton bottomStatuesBar" onClick={addPostToFireBase}> Post</div>
            </div>

        </div>

    </div>);
}

export default MainContent;