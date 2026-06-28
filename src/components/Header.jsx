import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <h1>
        <NavLink to="/">Router Mission Blog</NavLink>
      </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/posts/new">Write</NavLink>
      </nav>
    </>
  );
}
