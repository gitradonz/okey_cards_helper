import Head from 'next/head';
import MainPage from './MainPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Okey Cards</title>
        <meta name="description" content="Okey Cards Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  );
}
