import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <p className='text-center my-12'>Para entrar em contato clique no botão a baixo</p>
      <div className='text-center my-12'>
        <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' href='https://api.whatsapp.com/send?phone=5514998320338' >Entrar em contato</a>
      </div>
    </div>
  )
}
export default Contato
