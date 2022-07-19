import { Link } from "react-router-dom";
import './Nav.css';

/**Shows dog names, linked to individual dog
 *
 * Props:
 * - dogs (arr of dog objects)
 *
 * App -->  Nav
 */
function Nav({ dogs }) {
  return (
    <div className="Nav">
      <ul className="Nav-ul">
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link className="Nav-link" to={`/dogs/${dog.name}`}>
              {dog.name}
            </Link>
          </li>
        ))}
        <li>
          <Link className="Nav-link" to={"/dogs"}>
            List of Dogs
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
