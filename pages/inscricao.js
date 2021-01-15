import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Pedido: '',
    Culto: '',
  })
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      {!sucess && <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>Pedido de oração:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Pedido de oração' onChange={onChange} name='Pedido' value={form.Pedido} />

        <label className='font-bold'>Culto:</label>
        <select className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={onChange} name='Culto' value={form.Culto}>
          <option>Selecione um culto</option>
          <option value='Domingo manhã - 17/01/2021'> Domingo manhã - 17/01/2021 </option>
          <option value='Domingo noite - 17/01/2021'> Domingo noite - 17/01/2021 </option>
          <option value='Culto de oração - 20/01/2021'> Culto de oração - 20/01/2021 </option>
        </select>

        <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center font-bold px-4 py-3'>Trabalhando em parceria com Deus.</p>
        {
          retorno.showText && <div className='mb-6 text-center bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3'>
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showText && <div className='text-center border p-4 mb-4'>
            <span className='italic'>Se Deus e Por nós quem será contra nós? <br/>
        Romanos 8:31</span>
          </div>
        }
      </div>}
    </div>
  )
}
export default Pesquisa