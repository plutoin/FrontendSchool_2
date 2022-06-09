import Footer from "../../components/footer/Footer"

export default function Login() {
  return (
    <div>
      <p>id나 pw가 잘못되었습니다.다시 로그인해 주세요.</p>
      <form action="">
        <input type="id" />
        <input type="pw" />
      </form>
      <Footer />
    </div>
  )
}
