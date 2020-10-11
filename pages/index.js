import Head from 'next/head';
import styles from '../styles/Home.module.css';
import withAuthentication from '../utils/withAuthentication';
import useCustomHook from '../hooks/useCustomHook';

const Home = () => {
  const {
    name,
  } = useCustomHook();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="text-center font-bold text-black text-6xl">
          {name}
        </h1>
      </main>
    </>
  );
};

export default withAuthentication(Home);
