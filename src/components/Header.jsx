import { NavLink } from "react-router";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <NavLink to="/">Router Mission Blog</NavLink>
      </h1>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          Home
        </NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          Posts
        </NavLink>
        <NavLink
          to="/posts/new"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Write
        </NavLink>
      </nav>
    </header>
  );
}
