import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <h1 className={styles.homeIcon}>RATURES</h1>
      </a>

      <a href="/add-book">
        <FontAwesomeIcon
          style={{
            alignSelf: "center",
            cursor: "pointer",
            width: 50,
            height: 50,
          }}
          icon={faPlus}
        />
      </a>
    </div>
  );
};

export default Navbar;
