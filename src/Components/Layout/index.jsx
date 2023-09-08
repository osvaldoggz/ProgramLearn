import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-col items-center pt-5'>
        {children}
    </div>
  )
}

export default Layout