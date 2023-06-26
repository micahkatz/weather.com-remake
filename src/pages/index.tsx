import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "~/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather.com</title>
        <meta name="description" content="Created by Micah Katz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Header />
      </main>
    </>
  );
}
