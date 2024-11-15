import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-[95vw] mx-auto'>
        <nav className='flex justify-between items-center bg-slate-200 p-2'>
            <h1 className='px-4 ml-4 text-slate-500 text-2xl font-bold'>Amit</h1>
            <ul className='flex gap-4 font-semibold'>
                  <NavigationButton menu='Home' url='/' />
                  <NavigationButton menu='About' url='/about' />
                  <NavigationButton menu='Movies' url='/movie' />
                  <NavigationButton menu='Contacts' url='/contacts' />
            </ul>
        </nav>
    </header>
  )
}

const NavigationButton = ({menu,url}) => {
  return (
    // <li><NavLink className={({isActive})=> `active:underline underline-offset-6 transition-all ${isActive?"text-purple-800 underline":"" }`} to={url}>{menu}</NavLink></li>
    <li><Link className="active:underline underline-offset-6 transition-all" to={url}>{menu}</Link></li>
  )
}
