import'./App.css'

function App() {
  // const name = 'hojun'
  // function age(){
  //   return 10
  // }
  // const 값 = true
  // const someStyle = {backgroundColor:"seagreen", color:"white"}

  const sayHi = '안녕, 라이캣!'
  function num(a){
    return arguments
  }
  const txtStyle = {backgroundColor: "black", color:"white"}
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth()+1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  return (
    <div>
      {/* <h1 className="one">hello world</h1>
      <h1 style={{backgroundColor:"steelblue", color:"white"}}>hello world</h1>
      <h1>hello {name}, {age()}</h1>
      <p>{값?'one':'two'}</p>
      <h1 style={someStyle}>hello world</h1> */}
      <div>
        <h1 style={txtStyle}>{sayHi} {num(1)}호</h1>
        <h1>{sayHi} {num(2)}호!</h1>
        <div className="one" />
      </div>
      <div style={txtStyle}>
        <h1 style={{color:"red"}}>년 : {year}</h1>
        <h1>월/일 : {month} / {date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      </div>
    </div>
  );
}

export default App;
