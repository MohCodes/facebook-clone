
import './App.css';
import Login from './Components/login';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import HomePage from "./Components/Homepage"
import { useEffect, useState } from 'react';


function App() {

  const [user,setUser] = useState(false)
  const auth = getAuth();

onAuthStateChanged(auth,(user1)=>{
  if(user1){
    console.log("user signed in")
    setUser(true)
  }
  else{
    console.log("user signed out")
  }
})

const logout = async()=>{
  await signOut(auth).then(()=>[
    setUser(false)
  ])
}

  return (
    <div className="App">

      {user? 
      (<HomePage logout = {logout}/>)
      :(<Login/>)
      }
    </div>
  );
}

export default App;
