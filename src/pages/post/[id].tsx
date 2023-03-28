import { type NextPage } from "next";
import Head from "next/head";

const SinglePostsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>Posts view</div>
      </main>
    </>
  );
};

export default SinglePostsPage;
