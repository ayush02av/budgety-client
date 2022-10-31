import Head from 'next/head'

import { useContext } from "react";
import AppContext from "../AppContext";

export default function Home() {
  const value = useContext(AppContext);
  let { homeTitle, homeContent } = value.state.languages;

  return (
    <div>
      <Head>
        <title>Budgety App</title>
      </Head>

      <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover p-5 custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[1]' />
        <div className='text-white z-[1]'>
          <h2 className='text-5xl font-bold'>Budgety App</h2>
          <div className='py-10'>
            <p className='text-2xl mb-3'>
              One solution to manage it all
            </p>
            {homeTitle} | {homeContent}
          </div>
          {/* <button className='px-3 py-2 border custom-button'>Start Budgeting</button> */}
          <button className='px-3 py-2 border custom-button'>Coming Soon</button>
        </div>
      </div>

    </div>
  );
}