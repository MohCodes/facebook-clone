
import { getAuth } from "firebase/auth";
import {db} from "../Util/firebase"
import { doc, setDoc, serverTimestamp, getDoc,collection,getDocs} from "firebase/firestore"; 
import { useEffect, useState } from "react";
import format from "date-fns/format";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faThumbsUp,faComment,faShare} from "@fortawesome/free-solid-svg-icons"




function MainContent(props) {

const [userPostData,setUserPostData] = useState() 

useEffect(()=>{
    getUserPosts()
},[])

const getUserPosts = async ()=>{
    const auth = getAuth();
    const querySnapshot = await getDocs(collection(db, "user",`${auth.currentUser.uid}`,"posts"))
    let postsArray = []
    querySnapshot.forEach((doc) => {
        let post = doc.data()
        postsArray.push(post)
    })
    postsArray.sort((a,b)=>(a.seconds>b.seconds)?1:-1)
    setUserPostData(postsArray)
    
    console.log(userPostData)

}
let userPostDataDisplay





let postID = localStorage.getItem("postId") || 0 

const addPostToFireBase = async ()=>{
    const auth = getAuth();
    const userInfoID = auth.currentUser.uid
    const serverTime = serverTimestamp()
    const postString = document.getElementById("statuesInput").value
    await setDoc(doc(db,"user",userInfoID,"posts",`post${postID}`),{
        postID:`post${postID}`,
        post: postString,
        timestamp: serverTime
    })
    postID++
    localStorage.setItem("postId",postID)
    document.getElementById("statuesInput").value = "";
    await getUserPosts()
    console.log(userPostData)

}




    return (  
    <div className="MainContainer">
        <div className ="">

        </div>

        <div className="statuesPost">
            <div className="inputStatuesContaienr">
                <div className="imageContainerStatuesPost"><img className="userPictureInput" src={props.userImage} alt = "" /></div>
                <input placeholder="What's on your mind?" id = "statuesInput"className="statuesInput" type="text"></input>
            </div>

            <div className="postContainer">
                <div className="addPicture bottomStatuesBar"> Add Picture</div>
                <div className="postStatuesButton bottomStatuesBar" onClick={addPostToFireBase}> Post</div>
            </div>

        </div>


        
        {userPostData? 
        userPostData.map(item=>{
            return(
                <div key = {item.postID} id = {item.postID} className="contentContainer">
                    <div className="userContainer">
                        <div className ="userImagePost" ><img className="userImagePostIMG" src ={props.userImage} alt="userImage" /></div>
                        <div className="userNameContainer">
                            <div className="userNamePost">{props.userName}</div>
                                <div className="postTimeStamp">{format(new Date(item.timestamp.seconds*1000),"PPp").toString()}</div>
                        </div>
                    </div>
                        <div className="postContent">
                            {item.post.toString()}
                        </div>
        
                        <div className ="reactionContainer">
                            <div className="likeButton reactionButtons"><FontAwesomeIcon size="lg" className="friendsBarIcons" icon={faThumbsUp} /></div>
                            <div className="commentButton reactionButtons"><FontAwesomeIcon size="lg" className="friendsBarIcons" icon={faComment} /></div>
                            <div className="shareButton reactionButtons"><FontAwesomeIcon size="lg" className="friendsBarIcons" icon={faShare} /></div>
                        </div>
                </div>
            )
        })
        :<div></div>}

    </div>);
}

export default MainContent;