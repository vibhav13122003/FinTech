import Image from 'next/image';
import React from 'react'
import { logout } from '../lib/actions/user.action';
import { useRouter } from 'next/navigation';

const Footer = ({user,type}:FooterProps) => {
    const router=useRouter();
    const handleLogout =async () => {
       const loggedout= await logout();
       if(loggedout){
        router.push("/sign-in");
       }
    }
  return (
    <footer className='footer'>
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        
        <p className='text-14 font-semibold text-gray-700'>
          {user?.name[0]}
        </p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
<h1 className='text-14 font-semibold truncate text-gray-700'>
    {user?.email}
</h1>
      </div>
      <div className='footer_image' onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="jsm"/>

      </div>
    </footer>
  );
}

export default Footer