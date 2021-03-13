import React, {useEffect,useState} from 'react'
import OfficeContainer from './OfficeContainer.js'
import Status from './Status.js'
import './App.css';

const App = () => {
return (
    
<>
      <Status/>
      <OfficeContainer/>
     

  </>
  );
}

export default App;

// const APP_ID = "7160a306"
// const API_KEY = "02c0e090c82770c40da3550ffa9ee8ad"
// const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`

// useEffect(()=>{
//   console.log("effect has been run")

// },[])

// const [count, setCounter] = useState(0)