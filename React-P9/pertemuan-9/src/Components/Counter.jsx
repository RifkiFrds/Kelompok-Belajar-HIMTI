import React from 'react'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(50)

  return (
    <>
    <h1>Angka: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Klik Angka Tambah {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>Klik Angka Minus {count}  <button onClick={() => setCount((count) => count - 1)}>
          Klik Angka {count}
        </button></button>
    </>
  )
}

export default Counter
