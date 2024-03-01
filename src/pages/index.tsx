import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My title</title>
        <meta name="description" content="My title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home page</div>
    </>
  );
}
