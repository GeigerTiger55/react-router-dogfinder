import { useParams } from "react-router-dom";
import dogs from "./dogs";


/**DogDetails shows information about a specific dog
 * 
 * Params:
 * - dogName (str)
 * 
 * App --> DogDetails
 */
function DogDetails() {
  const { dogName } = useParams();
  const imageUrl = '/' + dogName.concat('.jpg');

  return (
    <div>
      <h1>{dogName}</h1>
      <img src={imageUrl} />
    </div>
  )
}

export default DogDetails;