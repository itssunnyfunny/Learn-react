import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState({
    form:'from-gray-300',
    to:'to-gray-700',
 })
  const bgColor1 = () =>{
   const newcolor = {
        form:'from-red-500',
        to:'to-cyan-500',
    };


    setColor(newcolor);
  }
  const bgColor2 = () =>{
    const newcolor = {
         form:'from-lime-500',
         to:'to-rose-500',
     };
 
 
     setColor(newcolor);
   }
   const bgColor3 = () =>{
    const newcolor = {
         form:'from-orange-500',
         to:'to-sky-500',
     };
 
 
     setColor(newcolor);
   }
   const bgColor4 = () =>{
    const newcolor = {
         form:'from-indigo-500',
         to:'to-red-500',
     };
 
 
     setColor(newcolor);
   }
   const bgColor5 = () =>{
    const newcolor = {
         form:'from-fuchsia-500',
         to:'to-violet-500',
     };
 
 
     setColor(newcolor);
   }

  return (
    <>
    <div className={` flex justify-center items-center h-screen w-full bg-gradient-to-tr ${color.form} ${color.to} `}>
    
       <div className=' fixed flex flex-col flex-wrap bg-slate-200 rounded-2xl shadow-lg shadow-orange-400 py-3 px-5  gap-3 '>

        <button className=' bg-gradient-to-tr from-red-500 to-cyan-500  py-2 px-6 rounded-2xl shadow-xl drop-shadow-xl shadow-red-300  text-white font-semibold'
          onClick={bgColor1}
        > cyon-red</button>

         <button className=' bg-gradient-to-tr from-lime-400 to-rose-500  py-2 px-6 rounded-2xl shadow-xl drop-shadow-xl shadow-red-300  text-white font-semibold'
          onClick={bgColor2}
        > lime-rose</button>

         <button className=' bg-gradient-to-tr from-orange-400 to-sky-500  py-2 px-6 rounded-2xl shadow-xl drop-shadow-xl shadow-red-300  text-white font-semibold'
          onClick={bgColor3}
        > orange-sky</button>

         <button className=' bg-gradient-to-tr from-indigo-400 to-red-500  py-2 px-6 rounded-2xl shadow-xl drop-shadow-xl shadow-red-300  text-white font-semibold'
          onClick={bgColor4}
        > indigo-red</button>

         <button className=' bg-gradient-to-tr from-fuchsia-400 to-violet-500  py-2 px-6 rounded-2xl shadow-xl drop-shadow-xl shadow-red-300  text-white font-semibold'
          onClick={bgColor5}
        > fuchsia-violet</button>

       </div>
    </div>
     
    </>
  )
}

export default App
