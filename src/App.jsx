import { useState } from 'react'
import './App.css'

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Welcome } from "./components/Welcome";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Welcome />

      <div>
        <h1>Projects</h1>
        <h2>In Progress</h2>
        <h4>Strava Analytics, Automated Emailer</h4>
        <h2>Finished Projects</h2>
        <h4>Empty :/</h4>
      </div>

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
      

      <div className="card">

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      <Footer />

    </>
  )
}

export default App
