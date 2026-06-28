import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <h1>
        <NavLink to="/">Router Mission Blog</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">posts</NavLink>
          </li>
          <li>
            <NavLink to="/write">write</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
