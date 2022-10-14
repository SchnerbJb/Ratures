import styles from '../styles/Home.module.css'

const AddBook = ({ handleSubmit }: any) => {

    return (

        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={'title'} name='title' type={'text'} placeholder={'Title'} />
            <input className={'author'} name='author' type={'text'} placeholder={'Author'} />
            <textarea className={'synopsis'} name='synopsis' placeholder={'Synopsis'}></textarea>
            <input className={'rating'} name='rating' type={'number'} placeholder={'0'} min={'0'} max={'5'} />
            <button type='submit'>Add Book</button>
        </form>

    )
}

export default AddBook;
