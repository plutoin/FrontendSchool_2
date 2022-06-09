import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./homepage.css";

export default function Homepage({ id, nickname }) {
  return (
    <div>
      <Header id={id} nickname={nickname} />
      <Main />
      <Footer />
    </div>
  );
}
