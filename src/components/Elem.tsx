import React from 'react'

interface ElemProps {
    ertek: string,
    index: number,
    kivalaszt: (index: number) => void
}
function Elem({ ertek, index, kivalaszt }: ElemProps) {
    return (
        <button    type="button" className={`elem ${ertek !== ' '?"inaktiv":"aktiv"}`}   disabled={ertek !== ' '} onClick={() => { kivalaszt(index) }}>{ertek}</button>
    )
}

export default Elem