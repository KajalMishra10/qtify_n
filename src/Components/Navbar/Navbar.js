import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>

      <Search placeholder="Search an album of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
}
