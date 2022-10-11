import styles from "../styles/Home.module.css"

interface Books {
    books: {
        id: number,
        title: string,
        author: string,
        synopsis: string,
        rating: number,
    }[]
}

const DisplayBooks = ({ books }: Books) => {

    console.log(books)
    return (
        <div>
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
        </div>
    );
}
export default DisplayBooks;
