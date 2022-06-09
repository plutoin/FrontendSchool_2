const Product = ({ item }) => {
  return (
    <main class="product">
      <ul class="product-list">
        { item.map(item => <Card goods={item} key={item.id} />)}
      </ul>
      <Cart />
    </main>
  )
}