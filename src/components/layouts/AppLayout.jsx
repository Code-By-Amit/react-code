import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loading } from './Loader'

export const AppLayout = () => {
  const navigation = useNavigation();

  if(navigation.state === 'loading') return <Loading />
  return (
    <>
    <div className='w-[95vw] mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}
