import React, { useState } from "react"

function App() {
  return <Menu />
}

const ContentsContainer = ({ menuList }) => {
  if (menuList === "about") {
    return <About />
  } else if (menuList === "product") {
    return <Product />
  } else if (menuList === "contact") {
    return <Contact />
  }
}

function About() {
  return <h1>About</h1>
}

function Product() {
  return <h1>Product</h1>
}

function Contact() {
  return <h1>Contact</h1>
}

function Menu() {
  const [menuList, setMenuList] = useState("about")
  const checkId = (e) => {
    setMenuList(e.target.id)
  }

  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              menuList === "about" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            About
          </li>
          <li
            id="product"
            onClick={checkId}
            style={
              menuList === "product" ? { color: "blue" } : { color: "black" }
            }
          >
            Prodct
          </li>
          <li
            id="contact"
            onClick={checkId}
            style={
              menuList === "contact" ? { color: "blue" } : { color: "black" }
            }
          >
            Contact
          </li>
        </ul>
      </nav>
      <ContentsContainer menuList={menuList} />
    </>
  )
}

export default App
