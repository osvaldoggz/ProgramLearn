import React from 'react'
import Footer from '../../Components/Footer/index';
import eslogan from '../../Img/eslogan.png';
function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('enviaste el formulario');
  }


  return (
    <div>
      <div className='flex'>
          <img className='h-28 mt-24' src={eslogan} alt='Eslogan'/>
        <form className='inline-block p-5 bg-white border rounded border-black mt-10 mr-20 ml-auto' onSubmit={handleSubmit}>
          <div className='bg-zinc-500 border border-black rounded text-center font-bold p-1'>
            <h3>Bienvenido</h3>
          </div>
          <input className='mt-2 w-full border border-black' type="text" id="name" placeholder='Nombre'/><br/>
          <input className='mt-2 w-full border border-black' type="email" id="email" placeholder='Correo electrónico'/><br/>
          <input className='mt-2 w-full border border-black' type="password" id="password" placeholder='Contraseña'/><br/>
          <input className='mt-2 w-full border border-black' type="password" id="password2" placeholder='Repite contraseña'/><br/>
          <div className='mt-4 border-2 text-base border-green-800 rounded bg-green-500 text-center'>
            <button type='submit'>Crear</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Home