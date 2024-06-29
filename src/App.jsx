import { useState } from 'react'
import Paragraph from './Paragraph'
import './App.css'
import { paragraphs } from './data'
function App() {
  const [para, setPara] = useState(0)
  const [paragraph, setParagraph] = useState([])
  const handleClick= (e)=>{
    e.preventDefault()
    const {numOfPara} = e.target
    setPara(numOfPara.value)
    setParagraph(paragraphs.slice(0,para))

  }
  console.log(paragraph)
  return (
    <div className="text-center container mt-4 text-light p-3 rounded-3">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <div>
        <form action="" onSubmit={handleClick}>
          <label htmlFor="" className="me-3 fs-5">
            Paragraphs:
          </label>
          <input
            type="number"
            className="rounded-3 ps-2 mx-2"
            style={{ width: '50px',height:"40px" }}
            min={1}
            max={8}
            name="numOfPara"
          />
          <button className=" mx-2 btn btn-success">Generate</button>
        </form>
      </div>
      <Paragraph paragraph={paragraph} />
    </div>
  )
}

export default App
