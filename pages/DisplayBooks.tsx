import { Books } from "../shared/types";
import styles from "../styles/Home.module.css"

const DisplayBooks = ({ books }: Books) => {

    if (books === undefined) {
            books = [{
                    id: 0,
                    title: '',
                    author: '',
                    synopsis: '',
                    rating: 0
                }]
        }
    return (
            <>
            {
                books.map((book) => (
                    <div className={styles.card} key={book.id}>
                        <h2>{book.title}</h2>
                        <h4>By {book.author}</h4>
                        <p>{book.synopsis}</p>
                        <p className={styles.rating}>{book.rating} / 5</p>
                    </div>
                ))
            }
            </>
    );
}
export default DisplayBooks;
