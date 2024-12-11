import { useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      {/* <Welcome /> */}

      <Projects />

      <Skills />

      <div>
        <h1>Skills</h1>
        <h4>HTML, CSS, Python (Pandas), MATLAB, C# </h4>
      </div>

      <div>
        <h1>More Random Content</h1>
        <h4>HTML, CSS, Python (Pandas), MATLAB, C# </h4>
      </div>
      
      <div>
        <h1>More Random Content</h1>
        <h4>HTML, CSS, Python (Pandas), MATLAB, C# </h4>
      </div>
    
      <Footer />

    </>
  )
}

export default App
