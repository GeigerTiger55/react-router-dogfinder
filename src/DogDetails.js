import { useParams, Navigate } from "react-router-dom";

/**DogDetails shows information about a specific dog
 *
 * Params:
 * - dogName (str)
 *
 * Props:
 * -dogs (arr of dog objects)
 *
 * App --> DogDetails
 * TODO: put dog facts into a list
 */
function DogDetails({ dogs }) {
  const { dogName } = useParams();
  const dog = dogs.find(dog => dog.name === dogName);
  console.log('**********DogDetails', dog);
  if(!dog){
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.name}></img>
      <p>{dog.facts}</p>
    </div>
  );
}

export default DogDetails;
