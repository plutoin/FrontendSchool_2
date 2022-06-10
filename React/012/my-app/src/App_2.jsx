import styled from "styled-components"

const Question = () => {
  return (
    <div className="box">
      <h2 className="text">Q&A</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </div>
  )
}

const App = () => {
  return (
    <>
      <nav className="box">
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  )
}

export default App
