import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href="https://www.homepage.com">
        <h4>
          <div title="Hover doesnt work" >&#128308; AdamAssad</div>
        </h4>
      </a>
      <body>
        <div className="container">
          <div className="image" >
            <img src="shape.png" alt="image" style={{ height: 300, width: 300 }} />
          </div>
          <div className="text" >
            <h1 style={{ color: 'red' }} > My Heading </h1>
            <br />
            <p> this is a test  fsdadsfasdfsadf<br />
              sdfdsfsadfdsafsdadf  💻 <br />
              fsdafasdfsdafsadfasdfadsf. </p>
          </div>
        </div>
        <hr />
        <h1>&#128308; <b>kia </b></h1 >
      </body>
    </>
  )
}

export default App
