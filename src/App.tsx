import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Hello Codex Cloud</h1>
      <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
        Count is {count}
      </button>
    </main>
  )
}

export default App
