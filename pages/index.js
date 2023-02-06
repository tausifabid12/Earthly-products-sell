import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title> {`Home`}</title>
        <meta rel="icon" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="bg-accent">
        <header></header>
        <main>
          <Hero />
          <Products />
        </main>
      </div>
    </>
  );
}
