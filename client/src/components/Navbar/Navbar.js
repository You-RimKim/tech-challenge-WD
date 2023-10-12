import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({phonesList}) {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <nav className="PhoneNav">
        {phonesList.map((eachPhone) => {
          return (
            <Link to={`/phone-details/${eachPhone.id}`} key={eachPhone.id}>
              {eachPhone.name}
            </Link>
          );
        })}
      </nav>
    </nav>
  );
}

export default Navbar;