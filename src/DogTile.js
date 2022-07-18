

/**Shows dog name and image
 * 
 * props: dog (obj)
 * 
 * DogList --> DogTile
 */
function DogTile({ dog }){

    return (
        <div>
            <h3>{dog.name}</h3>
            <img src={`/${dog.src}.jpg`} alt={dog.name}></img>
        </div>
    )
}

export default DogTile;