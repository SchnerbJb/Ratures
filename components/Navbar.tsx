import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.homeIcon}>RATURES</h1>
      </Link>

      <Link href="/add-book">
        <FontAwesomeIcon
          style={{
            alignSelf: "center",
            cursor: "pointer",
            width: 50,
            height: 50,
          }}
          icon={faPlus}
        />
      </Link>
    </div>
  );
};

export default Navbar;
