import { Link } from "react-router-dom";

/**Shows a small amount of information for each dog that is clickable to view more
 * details on the dog
 * 
 * Props: 
 * - dogNames (arr)
 * 
 * App -->  DogList 
 */
function DogList({ dogNames }) {

  return (
    dogNames.map(dogName =>
      <Link to={`/dogs/${dogName}`}> {dogName} </Link>
    )
  );
}

export default DogList;