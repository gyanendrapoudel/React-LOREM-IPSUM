import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center container mt-4 text-light p-3 rounded-3">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <div>
        <label htmlFor="" className='me-3 fs-5'>Paragraphs:</label>
        <input type="number" className="" style={{width:"40px"}}  min={1}/>
        <button className=" mx-2 btn btn-success">Generate</button>
      </div>
    </div>
  )
}

export default App
