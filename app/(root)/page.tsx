import React from "react";
import HeaderBox from "../../components/HeaderBox";

import TotalBalanceBox from "../../components/TotalBalanceBox";
import RightSidebar from "../../components/RightSidebar";
import { getLoggedInUser } from "../../lib/actions/user.action";

const Home = async() => {
  const loggedIn = await getLoggedInUser()
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.name || "Guest"}
            subtext='Access and Manage Your Account'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={12000}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:12000},{currentBalance:1000}]} />
    </section>
  );
};

export default Home;
