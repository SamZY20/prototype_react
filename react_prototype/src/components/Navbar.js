import { navBar } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-bottom" id="navContainer">
      <ul className="nav-bar d-flex">
        {navBar.map((link) => {
          const { id, name, url, icon } = link;
          return (
            <li className="vstack" key={id}>
              <Link to={url} className={`${id === 3 ? "selected" : null}`}>
                {icon}
                <br></br>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
