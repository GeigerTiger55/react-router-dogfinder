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
    <div>
      dogNames.map(dogName =>
        <Link key={dogName} to={`/dogs/${dogName}`}> <DogTile dogName={dogName} /> </Link>
      )
    </div>
  );
}

export default DogList;