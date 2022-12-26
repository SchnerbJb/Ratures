import { FormEvent, useState } from 'react';
import styles from '../styles/Home.module.css'
import StarRating from '../components//StarRating';
import { Router, useRouter } from 'next/router';

const AddBook = () => {

    const [starRating, setStarRating] = useState(0)

    const setParentRating = (param: number) => {
        setStarRating(param)
    }

    const router = useRouter()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const data = {
            title: String(formData.get("title")),
            author: String(formData.get("author")),
            synopsis: String(formData.get("synopsis")),
            rating: starRating,
        }

        if (data.title === "" || data.rating === 0 || data.synopsis === "" || data.author === "") {
            console.log("Error on form")
        } else {

            console.log(data)
            await fetch('api/add-book', {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
            })
            event.preventDefault()
            router.push("/")
        }
    }

    return (

        <main className={styles.main}>
            <h1 className={styles.title} >Add A Book You know</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={'title'} name='title' type={'text'} placeholder={'Title'} />
                <input className={'author'} name='author' type={'text'} placeholder={'Author'} />
                <textarea className={'synopsis'} name='synopsis' placeholder={'Synopsis'}></textarea>
                <StarRating setParentRating={setParentRating} />
                <button type='submit'>Add Book</button>
            </form>
        </main>

    )
}

export default AddBook;
