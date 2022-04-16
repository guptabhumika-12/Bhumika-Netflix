import Head from 'next/head';
import Header from "../components/Header"
import Banner from "../components/Banner"
import Row from "../components/Row"
import Dashboard from "./Dashboard"
export default function Home() {

  return (
    <div className='bg-black min-h-screen text-white'>
      <Head>
        <title>Bhumika &#8217;s Netflix </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Dashboard /> */}
      <Header />
      <Banner />
      <Row />

    </div>


  )
}
