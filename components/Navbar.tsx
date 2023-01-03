import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Navbar = () => {

    return (
        <span style={{ borderBottom: '1px solid #eaeaea', padding: '2rem'}}>

            <h1 className={styles.title}>
                RATURES
            </h1>

            <Link href='/add-book'>
                <FontAwesomeIcon style={{ alignSelf: 'center', cursor: 'pointer', width: 50, height: 50 }} icon={faPlus} />
            </Link>

        </span>
    )
}

export default Navbar;
