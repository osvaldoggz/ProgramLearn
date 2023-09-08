import React from 'react'
import Layout from '../Layout'
import {InboxIcon, CodeBracketIcon} from '@heroicons/react/24/solid';
function Footer() {
  return (
    <Layout>
        <div className='border border-black p-4 bg-white'>
            <p className='bg-white text-center font-semibold'>Contacto</p>
            <ul className='bg-white text-center font-light flex flex-row justify-center mt-3'>
                <div>
                    <li className='mr-4 flex justify-center font-semibold'><InboxIcon className="h-6 w-6"/>Correo</li>
                    <li className='mr-4'>ingjorgedeltoro@gmail.com</li>
                    <li className='mr-4'>gomezglezosvaldo@gmail.com</li>
                </div>
                <div>
                    <li className='mr-4 flex justify-center font-semibold'><CodeBracketIcon className="h-6 w-6"/>GitHub</li>
                    <li className='mr-4'>jorgedeltoro111</li>
                    <li className='mr-4'>osvaldoggz</li>
                </div>
            </ul>
            </div> 
    </Layout>
  )
}

export default Footer