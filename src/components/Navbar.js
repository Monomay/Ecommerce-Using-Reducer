import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <ul className="nav">
      <li>ECOMMERCE</li>
        <li className="ecom-nav">
          <Link to="/">Products</Link>
        </li> 
        
        <li style={{ flex: 2 }}>
          <Link to="/addproduct">
            <button className="btn">Add To Product </button>
          </Link>
        </li>
        <li>Monomay</li>
        <li>
          <img alt="img" src="https://cdn-icons-png.flaticon.com/512/1184/1184438.png" />
        </li>
        <li>
          <img alt="img" src="https://cdn-icons-png.flaticon.com/512/891/891407.png" />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
