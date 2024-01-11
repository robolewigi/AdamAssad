import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <style>
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      img {
    
        max-height:15%;
        float: left;
      }
      
      .text {
        font-size: 20px;
        float: left;
     padding-left: 20px;
      }
      </style>
    
    <a href="https://www.homepage.com>
    <h4><div title="Hover doesnt work">&#128308;AdamAssad</div></h4></a>
     <div class="container">
          <div class="image">
      <body>
    <img src="C:\Users\damss\Desktop\New folder\shape.png" alt="image" width=300 height=300>
    </div>
    <div class="text"> 
    <h1 style="color: red;">My Heading</h1><br>
    <p>this is a test  fsdadsfasdfsadf<br>
    sdfdsfsadfdsafsdadf &#x1F4BB;<br>
    fsdafasdfsdafsadfasdfadsf.</p> </div>
        </div>
     <hr>
    <h1>&#128308;<b>kia</b></h1>
      </body>
    </html>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <button onClick={() => setCount((count) => count + 222)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
