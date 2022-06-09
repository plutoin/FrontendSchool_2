import React, { useState } from "react"

function App() {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102
      },
      {
        title: "우당탕탕 라이캣의 실험실 스티커북",
        price: 29000,
        id: 103
      },
      {
        title: "버그를 Java라 버그 잡는 개리 씨 키링",
        price: 29000,
        id: 103
      }
    ]
  }

  return (
    <div>
      {productList.map(item => <h3>item.title</h3><p>item.price</p>)}
    </div>
}

export default App
