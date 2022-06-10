import { navBar } from "../data";

const Navbar = () => {
  return (
    <div className="fixed-bottom" id="navContainer">
      <ul className="nav-bar d-flex">
        {navBar.map((link) => {
          const { id, name, url, icon } = link;
          return (
            <li className="vstack" key={id}>
              <a href={url} className={`${id === 3 ? "selected" : null}`}>
                {icon}
                <br></br>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
