import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Sale from '../components/Sale/Sale';
import Services from '../components/Services/Services';

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
          <Services />
          <Sale />
        </main>
      </div>
    </>
  );
}
