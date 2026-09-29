import { useEffect, useState } from 'react'

import './App.css'
import Palya from './components/Palya'
import MeretBeallitas from './components/MeretBeallitas'


function App() {
  const MERET: number = 3
  const [meret, setMeret] = useState(MERET)
  const [lista, setLista] = useState<string[]>(() =>
    Array(MERET * MERET).fill(' ')
  )
  const [lepes, setLepes] = useState(0)
  const [ertek, setErtek] = useState("X")



  useEffect(() => {
    document.documentElement.style.setProperty('--meret', String(meret))
  }, [meret])


  function kivalaszt(index: number) {
    console.log(index)
    if (lista[index] !== ' ') return

    setLepes(lepes + 1)
    lepes % 2 ? setErtek("X") : setErtek("O")
    console.log(lepes, ertek)
    const listaMasolat = [...lista]
    listaMasolat[index] = ertek
    setLista(listaMasolat)
  }
  function meretAllitas(ujMeret: number) {
    if (!Number.isInteger(ujMeret) || ujMeret < 1) return

    setMeret(ujMeret)
    setLista(Array(ujMeret * ujMeret).fill(' '))
    setLepes(0)
    setErtek('X')
  }
  return (
    <>
      <main>
        <header><h1>Tic-tac-toe</h1></header>
        <section>
          <MeretBeallitas meretAllitas={meretAllitas} />
        </section>
        <article>
          <Palya lista={lista} kivalaszt={kivalaszt} />
        </article>
        <footer>
          <p>Készítette: Saját név</p>
        </footer>
      </main>
    </>
  )
}

export default App
