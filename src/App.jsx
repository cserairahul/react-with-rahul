import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor :color}}
    >
   <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2"
   >
    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl"
    
    >
      <button onClick={()=>setColor("red")} className="outline-none bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-3 rounded-full">red</button>
      <button onClick={()=>setColor("blue")} className="outline-none bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-3 rounded-full">blue</button>
      <button onClick={()=>setColor("orange")} className="outline-none bg-orange-500 hover:bg-orange-900 text-white font-bold py-2 px-3 rounded-full">orange</button>
      <button onClick={()=>setColor("purple")} className="outline-none bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-3 rounded-full">purple</button>
      <button onClick={()=>setColor("green")} className="outline-none bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-3 rounded-full">green</button>
      <button onClick={()=>setColor("pink")} className="outline-none bg-pink-300 hover:bg-pink-900 text-white font-bold py-2 px-3 rounded-full">pink</button>
      <button onClick={()=>setColor("yellow")} className="outline-none bg-yellow-300 hover:bg-yellow-600 text-white font-bold py-2 px-3 rounded-full">yellow</button>
      <button onClick={()=>setColor("violet")} className="outline-none bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-3 rounded-full">violet</button>
    </div>
   </div>
    </div>
  )
}

export default App
