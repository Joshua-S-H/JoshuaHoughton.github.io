import { useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Who } from "./components/Who";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      {/* <Welcome /> */}

      <Who />

      <Projects />

      <Skills />

      <Footer />

    </>
  )
}

export default App
