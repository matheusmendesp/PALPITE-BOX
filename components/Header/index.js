import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo-header.png' alt='PIB' height='180' width='100.16' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-gray-00 p-4 shadow-md text-center'>
        <Link href='/inscricao'>
          <a className='px-2 hover:underline'>Inscrição</a>
        </Link>
        <Link href='/assistir'>
          <a className='px-2 hover:underline'>Assistir Culto online</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default Header
