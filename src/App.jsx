import React, { useState } from 'react'

const App = () => {
  const [background , setBackground] = useState('black') ;
  
  const toggleBackground = (color)=>{
    setBackground(color) ; 
  }

  return (
    <div className={`w-full h-screen`} style={{backgroundColor : background}}>
      <div className={`text-black bg-white flex justify-center`}>
        <button className='m-3 hover:text-red-500' onClick={()=> toggleBackground('red')}>Red</button>
        <button className='m-3 hover:text-green-500' onClick={()=> toggleBackground('green')}>Green</button>
        <button className='m-3 hover:text-blue-500' onClick={()=>toggleBackground('blue')}>Blue</button>
        <button className='m-3 hover:text-gray-600' onClick={()=> toggleBackground('gray')}>Gray</button>
        <button className='m-3 hover:text-purple-500' onClick={()=>toggleBackground('purple')}>Purple</button>
        <button className='m-3 hover:text-purple-500' onClick={()=>toggleBackground('black')}>Black</button>
      </div>
    </div>
  )
}

export default App
