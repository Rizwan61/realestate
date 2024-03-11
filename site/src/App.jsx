import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Logo from './components/Logo/Logo'
import BestChoice from './components/bestchoice/BestChoice'
import OurValue from './components/ourvalue/OurValue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Logo />
      </section>
      <section>
      <BestChoice />
      </section>

    <section>
      <OurValue />
    </section>




    </>

  )
}

export default App
