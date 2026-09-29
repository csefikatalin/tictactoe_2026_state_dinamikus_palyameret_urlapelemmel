import React, { useState } from 'react'
interface MeretBeallitasProps{
    meretAllitas:(meret:number)=>void
}
function MeretBeallitas({meretAllitas}:MeretBeallitasProps) {
    const [meret,setMeret]=useState(3)
  return (
    <div>
        <label htmlFor="meret">A tábla mérete:</label>
        <input type="number" value={meret} id="meret" onChange={(e)=>{
            setMeret(Number(e.target.value))
        }}/>
        <button onClick={()=>{meretAllitas(meret)}}>OK</button>
    </div>
  )
}

export default MeretBeallitas