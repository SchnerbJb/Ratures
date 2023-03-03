import Link from "next/link";
import { Books } from "../shared/types";
import styles from "../styles/Home.module.css"

const DisplayBooks = ({ books }: Books) => {

    return (
        <>
            {
                books.map((book) => (
                    <Link href={"/books/" + book.id} key={book.id}>
                        <div className={styles.card}>
                            <h2 className={styles.card_title}>{book.title}</h2>
                            <h4 className={styles.card_author}>By {book.author}</h4>
                            <p className={styles.card_synopsis}>{book.synopsis}</p>
                        </div>
                    </Link>
                ))
            }
        </>
    );
}
export default DisplayBooks;
