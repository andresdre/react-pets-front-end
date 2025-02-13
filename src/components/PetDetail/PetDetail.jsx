
export default function PetDetail(props){

    // null is the orignal value of selectedPet
    if(props.selectedPet === null){
        return (
            <section>
                <h2>No Pet Selected</h2>
            </section>
        )
    }

    return (
        <section>
            <h2>{props.selectedPet.name}</h2>
            <span>Breed: {props.selectedPet.breed}</span>
            <br />
            <span>Age: {props.selectedPet.age}</span>
            <br />
            <button onClick={() => props.deletePet(props.selectedPet._id)}>Delete</button>
            <br />
            <button onClick={() => props.setSelectedPet(null)}>Close Details</button>
        </section>
    )
}