import type { GetServerSideProps, NextPage } from "next";
import styles from "styles/Home.module.css";
import { prisma } from "lib/prisma";
import { Books } from "shared/types";
import DisplayBooks from "components/DisplayBooks";
import Layout from "components/Layout";

const Home: NextPage<Books> = (initialBooks) => {
  console.log(initialBooks.books);
  return (
      <Layout title={"Home"}>
        <div className={styles.cards}>
          {initialBooks.books.length != 0 ? (
            <DisplayBooks books={initialBooks.books} />
          ) : (
              <p>No books saved yet ! Click on the plus button to add one</p>
          )}
        </div>
      </Layout>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const books = await prisma?.book.findMany();
  return {
    props: {
      books,
    },
  };
};
