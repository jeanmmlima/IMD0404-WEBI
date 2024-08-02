import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          
          <div>
            <p>Side Menu</p>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`posts`}>Posts</Link>
              </li>
              <li>
              <Link to={`users`}>Users</Link>
              </li>
              <li>
              <Link to={`about`}>About me</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }