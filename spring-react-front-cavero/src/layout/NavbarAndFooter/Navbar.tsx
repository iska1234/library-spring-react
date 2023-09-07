import { Link, NavLink } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';
import { SpinnerLoading } from "../Utils/SpinnerLoading";


const Navbar = () => {

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <SpinnerLoading />
  }

  const handleLogout = async () => oktaAuth.signOut();

  console.log(authState);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Library</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">Search books</NavLink>
            </li>
            {authState.isAuthenticated &&
              <li className="nav-item">
                  <NavLink className='nav-link' to='/shelf'>Shelf</NavLink>
              </li>
            }
          </ul>
          <ul className="navbar-nav ms-auto">
            {!authState.isAuthenticated ?
              <li className='nav-item m-1'>
                <Link className="btn btn-outline-light" type='button' to="/login">Sign in</Link>
              </li>
              :
              <li>
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar