import { Link } from "react-router-dom";
import "../App.css";

function Navbar({setCookableRecipes, setBody}) {
  return (
    <>

        <nav className="container-fluid"> 
            <div className="row justify-content-center">
              <div className="col-sm-3 border">
                <Link className="navbar-links" to="/purchases">
                  Bought It
                </Link>
              </div>
              <div className="col-sm-3 border">
                <Link className="navbar-links" to="/inventory" onClick={()=> setBody("inventory")}>
                  Have It
                </Link>
              </div>
              <div className="col-sm-3 border">
                <Link className="navbar-links" to="/shopping-list" onClick={()=> setBody("shopping-list")}>
                  Need It
                </Link>
              </div>
              <div className="col-sm-3 border">
                <Link className="navbar-links" to="/recipes" onClick={()=> setCookableRecipes()}>
                  Cook It
                </Link>
              </div>
            </div>
        </nav>

    </>
  );
}

export default Navbar;
