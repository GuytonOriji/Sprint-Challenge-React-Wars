import React , {useEffect, useState} from 'react';
import './App.css';
import Container from './CardzContainer';
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.




  useEffect(()=>{



 axios.get("https://swapi.co/api/people/")
      .then(res=>{
       
        res.data.results.map(obj=> {
                objectz.push(
                  obj.name,
                  obj.height,
                  obj.mass,
                  obj.gender,

                  obj.hair_color,
                  obj.skin_color,
                  obj.eye_color,
                  )

        
        })

        
      })

      .finally(done=>{
        setStarWarStarz(StarWarStarz = objectz)
      })




  },[])



      let [StarWarStarz, setStarWarStarz] = useState([])
      let objectz = []
 

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    <Container src="icon.svg" 
    byTenDescriptions={objectz}
    />
    </div>
  );
}

export default App;
