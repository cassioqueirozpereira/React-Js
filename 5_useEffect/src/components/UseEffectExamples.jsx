import { useState, useEffect } from 'react'

const UseEffectExamples = () => {

    // Sem dependências
    useEffect(() => {
        console.log("Rodou UseEffect1")
    })

    // Com dependências vazias / Array dependência vazio
    useEffect(() => {
        console.log("Rodou UseEffect2")
    }, [])

    
    // useState ativa a re-renderização
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    
    // Com dependências
    useEffect(() => {
        console.log("Rodou UseEffect3")
    }, [count, count2])

  return (
    <div>
        <p>Primeiro contador {count}</p>
        <p>Segundo contador {count2}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Aumentar primeiro contador</button>
        <button onClick={() => setCount2((prevCount) => prevCount + 1)}>Aumentar segundo contador</button>
    </div>
  )
}

export default UseEffectExamples