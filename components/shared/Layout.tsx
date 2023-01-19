import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({children} : any) => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/logo.jpg" />
        <title>Safar</title>
      </Head>
        <Navbar />
        <div className='scroll-smooth'>
            {children}
        </div>
    </div>
  )
}

export default Layout