import TopNavBar from "./TopNavBar";



function Homepage(props) {



    return (  <div>
        <TopNavBar userName ={props.userName} userImage = {props.userImageNav} />
        <button onClick={props.logout}>logout</button>

    </div>);
}

export default Homepage;