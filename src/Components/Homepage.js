import TopNavBar from "./TopNavBar";



function Homepage(props) {


    return (  <div>
        <TopNavBar/>
        <button onClick={props.logout}>logout</button>

    </div>);
}

export default Homepage;