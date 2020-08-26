import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1>Contato</h1>
      <div>
        <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Entrar em contato</a>
      </div>
    </div>
  )
}
export default Contato
