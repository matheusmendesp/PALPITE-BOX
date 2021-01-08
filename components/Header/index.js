import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-gray-300 p-4 shadow-md text-center'>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Inscrição</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default Header
