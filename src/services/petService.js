
// Where we define all the fetch calls to the backend api for the PETS resource

// What every api call will start with
// we know its /pets because of this line in the server
// app.use('/pets', petRouter)
const BASE_URL =  `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`


// As a user, I want to be able to view all of the pets.
async function index(){
    try {
        const response = await fetch(BASE_URL)
        // parse the json (Opening the json box to get our array of objects)
        const data = await response.json()
        // return the data out of the function when we call it
        return data 
    } catch(err){
        console.log(err)
    }
}

export { index }
