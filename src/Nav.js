import { Link } from "react-router-dom";

/**Shows dog names, linked to individual dog
 *
 * Props:
 * - dogs (arr of dog objects)
 *
 * App -->  Nav
 */
function Nav({ dogs }) {
  return (
    <div>
      <ul className="Nav-ul">
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link className="Nav-link" key={dog.name} to={`/dogs/${dog.name}`}>
              {dog.name}
            </Link>
          </li>
        ))}
        <li key="list-of-dogs">
          <Link className="Nav-link" key="list-of-dogs" to={"/dogs"}>
            List of Dogs
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
