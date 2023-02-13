import Link from "next/link";
import {Books} from "../shared/types";
import styles from "../styles/Home.module.css"

const DisplayBooks = ({books}: Books) => {

    if (books === null) {
        books = [{
            id: 0,
            title: '',
            author: '',
            synopsis: '',
        }]
    }
    return (
        <>
            {
                books.map((book) => (
                    <Link href={"/books/" + book.id} key={book.id}>
                        <div className={styles.card}>
                            <h2>{book.title}</h2>
                            <h4>By {book.author}</h4>
                            <p>{book.synopsis}</p>
                        </div>
                    </Link>
                ))
            }
        </>
    );
}
export default DisplayBooks;
