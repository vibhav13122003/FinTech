
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
      <section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-blue-500'>
              {user.name[0]}
            </span>
          </div>
          <div className='profile-details'>
            <h1>
             {user.name}
            </h1>
            <p className='profile-email'>{user.email}</p>
          </div>
        </div>
      </section>
      <section className='banks'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2'>My banks</h2>
          <Link href='/' className='flex gap-2'>
            <Image src='/icons/plus.svg' alt='add' width={20} height={20} />
            <h2 className='text-14 font-semibold text-gray-700'>Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className='flex flex-col relative flex-1 items-center gap-5 justify-center'>
            <div className='relative z-10'>
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={user.name}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className='absolute right-0 top-8 z-0 w-[90%]'>
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={user.name}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
