import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AddBook from './AddBook';
import DisplayBooks from './DisplayBooks';
import { prisma } from "../lib/prisma"
import { FormEvent, SyntheticEvent, useState } from 'react';

const Home: NextPage<Books> = (initialBooks) => {

    const [books, setBooks] = useState(initialBooks.books)

    const handleSubmit = async (event: SyntheticEvent<HTMLFormElement, FormEvent>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const data = {
            title: formData.get("title"),
            author: formData.get("author"),
            synopsis: formData.get("synopsis"),
            rating: Number(formData.get("rating")),
        }
        await fetch('api/add-book', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
        event.currentTarget.reset()
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    RATURES
                </h1>

                <h3 className={styles.description}>
                    Rate your books
                </h3>

                <div className={styles.grid}>
                    <DisplayBooks books={books} />
                </div>

                <AddBook handleSubmit={handleSubmit} />
            </main>

            <footer className={styles.footer}>
                <span>Done by Exaryss 😎</span>
            </footer>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const books = await prisma?.book.findMany()
    return {
        props: {
            books
        }
    }
}
