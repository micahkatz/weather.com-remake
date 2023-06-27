import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdComponent from "~/components/AdComponent";
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
        <AdComponent kind='banner' containerClassName='center-top-ad mt-2' />
        <div className='main-content'>
          <div className="card">
            <h3>TORNADO DESTRUCTION</h3>
            <h2>MASSIVE DAMAGE FROM TORNADO</h2>
            <Image src='/tornado.png' alt='tornado' width={500} height={300} />
            <h4 className='mt-2'>Structures Shredded, Homes Toppled In Midwest</h4>
            <div className='flex flex-row'>
              <div className="w-[150px] mr-4">
                <Image src="/tornado.png" alt='image-1' width={150} height={150} className='thumbnail-sm' />
                <span>
                  Cindy Could Come Back To Life</span>
              </div>
              <div className="w-[150px] mr-4">
                <Image src="/tornado.png" alt='image-1' width={150} height={150} className='thumbnail-sm' />
                <span>
                  Excessive Heat And Record Potential Expands</span>
              </div>
            </div>
          </div>
          <div className="card">
            <AdComponent kind='vertical-banner' className='vertical-right-banner' containerClassName='vertical-right-banner' />
          </div>
          <div className="card col-span-2">
            <AdComponent kind='banner' className='!w-full !h-20' containerClassName="!w-full !h-20" />
          </div>
        </div>
      </main>
    </>
  );
}
