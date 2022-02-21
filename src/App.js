
import './App.css';
import Login from './Components/login';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import HomePage from "./Components/Homepage"
import { useEffect, useState } from 'react';


function App() {

  const [user,setUser] = useState(false)
  const [userInformation,getUserInformation] = useState()
  const auth = getAuth();


onAuthStateChanged(auth,(user1)=>{
  if(user1){
    getUserInformation(auth.currentUser)
    // console.log(userInformation)
    console.log("user signed in")
    setUser(true)
  }
  else{
    console.log("user signed out")
  }
})

const getUserFirstName = (name)=>{
  const fullName = name
  const fullNameArray = fullName.split("")
  const firstNameArray = fullNameArray.slice(0,fullNameArray.indexOf(" "))
  const firstName = firstNameArray.join("")
  return firstName
}

const logout = async()=>{
  await signOut(auth).then(()=>[
    setUser(false)
  ])
}

  return (
    <div className="App">
      {user? 
      (<HomePage userName = {getUserFirstName(userInformation.displayName)}  userImageNav = {userInformation.photoURL} logout = {logout}/>)
      :(<Login/>)
      }
    </div>
  );
}

export default App;
