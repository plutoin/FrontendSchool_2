const root = document.getElementById('root')

async function getProductData() {
  const response = await fetch('http://test.api.weniv.co.kr/mall')
  const product = await response.json()
  return product
}
// console.log(getProductData())
getProductData().then(product => {
  // console.log(product)
  const mainElement = document.createElement('main')
  // console.log(mainElement)
  mainElement.classList.add('product')
  // console.log(mainElement)

  // 1
  mainElement.innerHTML = `
        <h1 class="ir">상품목록 페이지</h1>
        <ul class="product-list"></ul>
    `
  // console.log(mainElement)

  // 2 아래 코드로 작성하면 더 좋지만, 여러분이 html이 익숙하기 때문에 innerHTML로 작성하였습니다. 맨 아래 있는 스크립트도 참고해주세요.
  // const prodctPageHeader = document.createElement("h1");
  // prodctPageHeader.setAttribute("class", "ir");
  // prodctPageHeader.innerText = "상품목록 페이지";
  // mainElement.appendChild(prodctPageHeader);

  // const productList = document.createElement("ul");
  // productList.setAttribute("class", "product-list");
  // mainElement.appendChild(productList);
  // console.log(mainElement)

  const productList = mainElement.querySelector('.product-list');

  product.forEach((item) => {
    // console.log(item)
    const productDetailLink = document.createElement('a')
    productDetailLink.href = `/detail/${item.id}`
    productDetailLink.innerHTML = `
            <li class="product-item">
                <div class="product-img">
                    <img src="http://test.api.weniv.co.kr/${item.thumbnailImg}">
                </div>
                <strong class="product-name">${item.productName}</strong>
                <br>
                <div class="product-price">
                  <strong class="price m-price">${item.price}
                  <span>원<span></strong>
                </div>
            </li>
        `
    productList.append(productDetailLink)
  });
  const cart = document.createElement('a')
  cart.setAttribute('class', 'link-btn cart-link')
  mainElement.append(cart)
  root.append(mainElement)
})

// 아래 코드로 작성하면 더 좋지만, 여러분이 html이 익숙하기 때문에 innerHTML로 작성하였습니다.
// 묶어서 모듈화 해야 합니다!
// const productItem = document.createElement("li");

// const productCard = document.createElement("a");
// productCard.setAttribute("href", `/detail/${item.id}`);
// productCard.setAttribute("class", "product-item");

// const productImageContainer = document.createElement("div");
// productImageContainer.setAttribute("class", "product-img");

// const productImage = document.createElement("img");
// productImage.setAttribute("src", `http://test.api.weniv.co.kr/${this.item.thumbnailImg}`);
// productImage.setAttribute("alt", `상품이미지`);
// productImageContainer.appendChild(productImage);

// const productName = document.createElement("strong");
// productName.setAttribute("class", "product-name");
// productName.innerText = this.item.productName;

// const productPriceContainer = document.createElement("div");
// productPriceContainer.setAttribute("class", "product-price");

// const productPrice = document.createElement("strong");
// productPrice.setAttribute("class", "price m-price");
// productPrice.innerText = this.item.price;

// const priceType = document.createElement("span");
// priceType.innerText = "원";

// productPrice.appendChild(priceType);

// productPriceContainer.appendChild(productPrice);

// productCard.appendChild(productImageContainer);
// productCard.appendChild(productName);
// productCard.appendChild(productPriceContainer);

// productItem.appendChild(productCard);