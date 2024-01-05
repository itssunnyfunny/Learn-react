import { useState ,useCallback, useEffect, Ref, useRef} from 'react'


function App() {
 const [length, setLength] = useState(8)
 const [numberAllowed , setNumberAllowed] = useState(false)
 const [charAllowed , setCharAllowed] = useState(false)
 const [passward, setpassward] = useState("");

 // useRef hook 
 const passRef = useRef(null)

 const copytoClipboard = useCallback(() =>{
      window.navigator.clipboard.writeText(passward)
 },[passward])

 const passwardGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed)  str+= "0123456789";
      if (charAllowed) str += ",!@#$*;"

      for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random()*str.length +1)
        pass += str.charAt(char);
      }

     setpassward(pass)
  
 },[length, numberAllowed ,charAllowed ,setpassward]);



  useEffect( ()=>{
    passwardGenerator()
 },[length,numberAllowed,charAllowed,setpassward]);

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-lg rounded-xl py-4 px-4 my-10 text-orange-500 bg-slate-600'>

      <h2 className='text-white text-center font-semibold mx-3 my-3'> PASSWORD GENERATOR </h2>

      <div className='flex shadow-lg drop-shadow-2xl rounded-lg overflow-hidden m-b-5'>

        <input type="text"
        value={passward}
        className='outline-none w-full py-2 px-4 '
        placeholder='passward'
        readOnly
        ref={passRef}
         />

        <button className='bg-blue-500 text-white px-3 py-1 shrink-0 font-semibold' onClick={copytoClipboard} 
                //  onClickCapture={()=>{
                //   alert("coppied")
                //  }}
        >copy</button>

      </div>

      <div className='flex text-sm gap-x-3 my-4'>
        <div className='flex items-center gap-x-3'>

          <input type="range" 
           min={8}
           max={25}
           value={length}
           onChange={(e)=>{setLength(e.target.value)}}
           className='mt-2 cursor-pointer'
          />
          <label > Length :({length})</label>

          <input type="checkbox" 
           id="numbInput" 
           className='cursor-pointer'
           onChange={()=>{
            setNumberAllowed((prev)=>!prev);
           }}
           />
           <label htmlFor="numbInput">Numbers</label>

           <input type="checkbox"
            id="charInput" 
            className='cursor-pointer'
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor="charInput">Charector</label>

        </div>

      </div>
       
     </div>
    </>
  )
}

export default App
