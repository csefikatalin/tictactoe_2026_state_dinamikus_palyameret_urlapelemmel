import { useState } from 'react'
import "./meretbeallitas.css"
interface MeretBeallitasProps{
    meretAllitas:(meret:number)=>void
}
function MeretBeallitas({meretAllitas}:MeretBeallitasProps) {
    const [meret,setMeret]=useState(3)
  return (
    <div className='meretUrlap'>
        <label htmlFor="meret">A tábla mérete:</label>
        <input type="number" value={meret} id="meret" onChange={(e)=>{
            setMeret(Number(e.target.value))
        }}/>
        <button onClick={()=>{meretAllitas(meret)}}>OK</button>
    </div>
  )
}

export default MeretBeallitas