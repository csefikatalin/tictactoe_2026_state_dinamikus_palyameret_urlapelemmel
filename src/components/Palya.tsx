import "./palya.css"
import Elem from './Elem'

interface PalyaProps {
  lista: string[]
  kivalaszt: (index: number) => void
}

function Palya({ lista, kivalaszt }: PalyaProps) {
  return (
    <div className="palya">
      {lista.map((e, i) => (
        <Elem
          ertek={e}
          index={i}
          key={i}
          kivalaszt={kivalaszt}
        />
      ))}
    </div>
  )
}

export default Palya