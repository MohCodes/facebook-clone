import { ReactComponent as Logo } from "../Util/img/facebooklogo.svg";
import {app,provider,db} from "../Util/firebase"
import { FacebookAuthProvider,getAuth, signInWithPopup,onAuthStateChanged} from "firebase/auth";



function Login(props) {


let user


    const authentication = async ()=>{
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        auth.languageCode = 'it';
        signInWithPopup(auth,provider).then((result=> {
            user = result.user
            console.log(user)
        })) 
    }


    


    
    return (

    <div>
        <div className="mainLoginContainer">

            <div className = "fbImage">
                <Logo className="facebooklogo"></Logo>
                <h2 className="imageheader">Connect with friends and the world around you on Facebook.</h2>
            </div>


            <div className="loginContainer">
                <div onClick={()=>authentication(FacebookAuthProvider)} className="loginButton">Log In</div>
                <div className="lineLogin"></div>
                <div className="createAccount"><a target="blank" className = "facebookLink" href="https://www.facebook.com/">Create Account</a></div>
            </div>

    
        </div>


        <div className="loginFooter"> 

        </div>
    </div>

    );
}

export default Login;