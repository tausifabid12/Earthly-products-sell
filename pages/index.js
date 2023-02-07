import Head from 'next/head';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import Sale from '../components/Sale/Sale';
import Services from '../components/Services/Services';
import Subscribe from '../components/Subscribe/Subscribe';

export default function Home() {
  return (
    <>
      <Head>
        <title> {`Home`}</title>
        <meta rel="icon" content="Earthly Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-accent">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Products />
          <Services />
          <Sale />
          <ContactUs />
          <Subscribe />
          <Footer />
        </main>
      </div>
    </>
  );
}
