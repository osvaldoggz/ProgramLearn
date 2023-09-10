import React from 'react'
import Footer from '../../Components/Footer/index';

function Our() {
  return (
    <div className='mt-24'>
      <div className='mb-20 m-auto w-3/4 p-5 bg-emerald-100 border rounded border-emerald-400 text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-emerald-50 hover:border-2 duration-200'>
        <p>
          LearnCode está conformado por un equipo de desarrollo enfocado en la educación
          y formación personal en el área informática.
          El objetivo principal de nuestra aplicación web es poder brindarte las
          herramientas para que puedas aprender a programar y desarrollar 
          aplicaciones web escalables de la mejor manera, teniendo las bases 
          sólidas y empezando una ruta de aprendizaje bien forjada y personalizada.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Our