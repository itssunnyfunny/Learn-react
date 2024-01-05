import { useState } from "react"



function App() {
  const [color, setcolor] = useState("black")

  return (
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}} >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-3 rounded-full">
             <button className=" bg-red-500  px-3 py-2 rounded-full text-center text-slate-100 font-semibold shadow-lg" onClick={()=>setcolor("red")}>Red</button>
             <button className=" bg-yellow-300  px-3 py-2 rounded-full text-center text-slate-100 font-semibold shadow-lg" onClick={()=>setcolor("yellow")}>Yellow</button>
             <button className=" bg-green-400  px-3 py-2 rounded-full text-center text-slate-100 font-semibold shadow-lg" onClick={()=>setcolor("Green")}>Green</button>
             <button className=" bg-purple-400  px-3 py-2 rounded-full text-center text-slate-100 font-semibold shadow-lg" onClick={()=>setcolor("purple")}>purple</button>
             <button className=" bg-orange-400  px-3 py-2 rounded-full text-center text-slate-100 font-semibold shadow-lg" onClick={()=>setcolor("orange")}>orange</button>
        </div>
     </div>

    </div>
  
  )
}

export default App
