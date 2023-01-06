import { FormEvent, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const AddBook = () => {
  const [starRating, setStarRating] = useState(0);

  const setParentRating = (param: number) => {
    setStarRating(param);
  };

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      title: String(formData.get("title")),
      author: String(formData.get("author")),
      synopsis: String(formData.get("synopsis")),
    };

    if (
      data.title === "" ||
      data.synopsis === "" ||
      data.author === ""
    ) {
      console.log("Error on form");
    } else {
      console.log(data);
      await fetch("api/add-book", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      event.preventDefault();
      router.push("/");
    }
  };

  return (
    <Layout title={"Add Book"}>
      <div className={styles.columnLayout}>
        <h1 className={styles.title}>Add A Book You know</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={"title"}
            name="title"
            type={"text"}
            placeholder={"Title"}
          />
          <input
            className={"author"}
            name="author"
            type={"text"}
            placeholder={"Author"}
          />
          <textarea
            className={"synopsis"}
            name="synopsis"
            placeholder={"Synopsis"}
            style={{minHeight: "5em"}}
          ></textarea>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBook;
