import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import PetList from './components/PetList/PetList'

// petService.index, petService.create, etc,
// each function you define in the petService file
// will be a method on the petService object
import * as petService from './services/petService'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {

    // define and then call the function immediatly
    async function fetchPets(){

      const data = await petService.index()
      // check your work before you do anything else!
      console.log(data, ' <- data')
      // every time you update state, go to your 
      // dev tools and look at it!
      setPets(data)
    }

    // calling the function
    fetchPets()

  }, []);// empty array says run the use effect, 
  // when the components loads onto the dom

  // use case: We want all of the pets when the page loads

  return (
   <>
    <PetList pets={pets}/>
   </> 
  )
}

export default App