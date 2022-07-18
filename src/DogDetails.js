import { useParams } from "react-router-dom";

/**DogDetails shows information about a specific dog
 *
 * Params:
 * - dogName (str)
 *
 * Props:
 * -dogs (arr of dog objects)
 *
 * App --> DogDetails
 */
function DogDetails({ dogs }) {
  const { dogName } = useParams();

  const dog = dogs.filter((dog) => dog.name === dogName)[0];
  console.log(dog, "dog ******************");

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.name}></img>
      <p>{dog.facts}</p>
    </div>
  );
}

export default DogDetails;
