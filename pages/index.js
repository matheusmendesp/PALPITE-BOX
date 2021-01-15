import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Seja bem-vindo' />
        <p className='mt-12 text-center'>
          Conforme decreto estadual bem como resolução da Secretaria de Saúde do Estado do São Paulo, iremos retomar os cultos presenciais seguindo as devidas orientações.
            
          <br/><br/><br/>
            
          Uma dessas orientações é o limite da capacidade do local, que poderá ser ocupado em até 30%. Com isso, poderemos reunir no máximo 80 pessoas, espalhadas por todo o templo. Para realizar esse controle, pedimos que você preencha os dados abaixo confirmando sua participação em um dos cultos. Esse cadastro é necessário apenas para os cultos que tradicionalmente reuniam mais que 200 pessoas.
            
          <br/><br/><br/>

          <strong>
          ATENÇÃO: preencha apenas se você tiver certeza que irá participar para não tirar o lugar de alguém que gostaria de vir.
          </strong>
        </p>
      <div className='text-center my-12'>
        <Link href='/inscricao'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Se inscrever</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showText &&
        <p className='my-12 text-center'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index
