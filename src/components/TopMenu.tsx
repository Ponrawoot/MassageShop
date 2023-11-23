import React from 'react';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';
import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css';
import getUserProfile from '@/libs/getUserProfile';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  
  return (
    <div className={styles.menucontainer}>
      <Image
        src={'/img/logo.png'}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <div className="my-9 ml-5 text-xl text-b font-bold">ZenSerenity Massage Haven</div>
      <TopMenuItem title="Home" pageRef="/"/>
      <TopMenuItem title="Manage Shop" pageRef="/shop"/>
      <div className='mx-5'></div>
      <TopMenuItem title="Manage Booking" pageRef="/booking"/>

      <div className="flex flex-row absolute right-0 h-full">
        <TopMenuItem title="About Me" pageRef="/about" />
        <TopMenuItem title="Register" pageRef="/register" />



        {session ? (
  <Link href="/api/auth/signout" className="no-underline">
    <div className="flex items-center h-full px-2 text-cyan-600 text-sm hover:text-cyan-800 cursor-pointer transition-colors duration-300">
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
        Log-Out of {session.user?.name}
      </button>
    </div>
  </Link>
) : (
  <Link href="/api/auth/signin" className="no-underline">
    <div className="flex items-center h-full px-2 text-cyan-600 text-sm hover:text-cyan-800 cursor-pointer transition-colors duration-300">
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
        Log-In
      </button>
    </div>
  </Link>
)}

      </div>
    </div>
  );
}
