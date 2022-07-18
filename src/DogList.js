import { Link } from "react-router-dom";
import DogTile from "./DogTile";

/**Shows a small amount of information for each dog that is clickable to view more
 * details on the dog
 *
 * Props:
 * - dogs (arr of dog objects)
 *
 * App -->  DogList
 */
function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dog.name} to={`/dogs/${dog.name}`}>
          <DogTile dog={dog} />
        </Link>
      ))}
    </div>
  );
}

export default DogList;
