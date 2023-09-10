import React from 'react'
import Footer from '../../Components/Footer/index';
import JavaScript_logo from '../../Img/JavaScript_logo.png';
import data_structure_logo from '../../Img/data_structure_logo.png';
import HTML_CSS from '../../Img/HTML_CSS.png';
import React_logo from '../../Img/React_logo.png';

function Content() {
  return (
    <div className='mt-20'>
      <div className='flex'>
        <img className='w-36 h-36 ml-20 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200' src={JavaScript_logo} alt='JavaScript_logo'/>
        <div className='mb-14 m-auto p-5 w-3/4 bg-yellow-200 border rounded border-yellow-500 text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-yellow-100 hover:border-2 duration-200'>
          <p>
            En el primer módulo aprenderás la lógica de la programación y sintaxis de JavaScript.
            Utilizar este lenguaje de programación nos ayudará a poder tener un acercamiento más
            amigable con la programación. Aprenderemos las bases de la programación estructurada, 
            modular y orientada a objetos. Aprenderemos a utilizar a nuestro favor las herramientas
            que nos proporciona javascript desde ECMAscript 6 en adelante, haciendo de las lecciones
            tanto prácticas como teóricas.
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='mb-14 m-auto p-5 w-3/4 bg-red-500 border rounded border-red-950 text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-red-300 hover:border-red-500 hover:border-2 duration-200'>
          <p>
            En el segundo módulo aprenderás las principales estructuras de datos que hay en la 
            programación utilizando javascript. Se te impulsará con diferentes retos para poder 
            continuar con el módulo y a la par se te aplicarán exámenes para poder obtener puntos 
            a lo largo de tu ruta como desarrollador. Al final podrás canjearlos por módulos 
            adicionales de desarrollo backend. 
            Lograrás comprender las estructuras de datos más útiles en el desarrollo como los son 
            los arreglos, listas enlazadas, grafos, colas y pilas.
          </p>
        </div>
        <img className='w-40 h-40 mr-12 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200' src={data_structure_logo} alt='data_structure_logo'/>
      </div>
      <div className='flex'>
        <img className='w-32 h-32 ml-20 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200' src={HTML_CSS} alt='HTML_CSS'/>
        <div className='mb-14 m-auto p-5 w-3/4 bg-orange-500 border rounded border-orange-800 text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-orange-200 hover:border-2 duration-200'>
          <p>
            En este módulo de CSS y HTML se te enseñarán los conceptos fundamentales para 
            poder maquetar una página web con el mejor orden. HTML es el esqueleto de 
            nuestra página web. Una que vez tengamos cubierto este aspecto 
            podremos otorgarle estilos y animaciones con javascript y CSS.
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='mb-20 m-auto p-5 w-3/4 bg-teal-300 border rounded border-teal-500 text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100 hover:bg-teal-100 hover:border-2 duration-200'>
          <p>
            En este módulo aprenderemos a utilizar todo lo aprendido en una sola herramienta 
            conocida como React, la cual es un framework “fronted” para el interfaz de usuario 
            y su dinamismo. Con React vamos a poder maquetar, diseñar y darle vida con 
            javascript a nuestra apliación con esta única herramienta. Debemos de comprender 
            que React se compone por la renderización de componentes y modularización de código.
          </p>
        </div>
        <img className='w-36 h-36 mr-12 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200' src={React_logo} alt='React_logo'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Content