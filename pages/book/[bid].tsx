import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../../lib/prisma";
import styles from '../../styles/Home.module.css'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const book = await prisma.book.findUnique({
        where: {
            id: Number(params?.bid),
        },
    });
    return {
        props: {
            book,
        }
    };
};


const BookId = ({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    return (

        <div className={styles.card} key={book.id}>
            <h2>{book.title}</h2>
            <h4>By {book.author}</h4>
            <p>{book.synopsis}</p>
            <p className={styles.rating}>{book.rating} / 5</p>
        </div>
    )
}
export default BookId;
