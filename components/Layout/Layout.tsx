import React from 'react';
import Head from 'next/head';
import MainNav from './MainNav';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Hugh Nguyen - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hugh Nguyen's Blog" />
      </Head>
      <MainNav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
