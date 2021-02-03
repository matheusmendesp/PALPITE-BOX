import React from 'react'

const Assistir = () => {
    return (
        <div>
            <p className='mt-12 text-center'>
                <strong>Vagas esgotadas para o dia que você queria?</strong>
                <br/><br/>
                Não tem problema, assista o culto online abaixo. Curta, comente e compartilhe!
            </p>
            <div className='my-12'>
                <iframe className='mt-12 mx-auto' width="560" height="315" src="https://www.youtube.com/embed/rIp2GJrHbCc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Assistir
