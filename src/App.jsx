import { useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Head /> Re-add this component */}

      <Header />

      <Welcome />

      <Projects />

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
      

      {/* <div className="card"> */}

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      {/* </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      <Footer />

    </>
  )
}

export default App
