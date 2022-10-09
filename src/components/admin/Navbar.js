import React from "react";

export default function Navbar() {
  const name = "bot";
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Add User
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Pricing
                                    </a>
                                </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
