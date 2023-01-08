import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.homeIcon}>
        <Link href="/">RATURES</Link>
      </h1>

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
