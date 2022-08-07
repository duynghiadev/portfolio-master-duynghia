import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Intro from "./Component/Intro";
import MyInfo from "./Component/MyInfo";
import MyWork from "./Component/MyWork";
import ToTop from "./Component/ToTop";
import "./Styles/IntroStyles.css";
function App() {
  return (
    <div className="App">
      <Intro />
      <div id="main-contain">
        <MyInfo />
        <MyWork />
        <Contact />
        <ToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
