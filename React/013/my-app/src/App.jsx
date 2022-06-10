import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import Nav from "./Components/Nav"

const GlobalStyle = createGlobalStyle`
  ${reset}; 
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`

function App() {
  const [listName, setListName] = useState("docs")
  const checkId = (e) => {
    setListName(e.target.id)
  }
  return (
    <>
      <GlobalStyle>
        <Nav changeState={checkId} stateValue={listName} />
      </GlobalStyle>
    </>
  )
}

export default App
