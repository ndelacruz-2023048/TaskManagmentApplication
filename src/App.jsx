import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MyRoutes } from './router/routes'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyles/>
      <MyRoutes/>
    </>
  )
}

export default App
