import "../Styles/IntroStyles.css";
import { useEffect } from "react";
import { IntroPictures } from "../data/IntroPictures";
import { MyInfoData } from "../data/MyInfoData";

function Intro() {
  const runIntro = () => {
    const introID = "intro-wrapper";
    const mainID = "main-contain";
    const intro = document.getElementById(introID);
    const main = document.getElementById(mainID);
    setTimeout(() => {
      intro.style.opacity = 0;
      intro.style.display = "none";
      main.style.display = "block";
      setTimeout(() => (main.style.opacity = 1), 50);
    }, 7000);
  };
  useEffect(() => {
    runIntro();
  }, []);

  return (
    <div id="intro-wrapper">
      <div className="loading">
        <span>Loading</span>
      </div>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="pics-intro">
        <img alt="" src={IntroPictures[0]} />
        <div className="objective-intro-wrapper">
          <h1>Welcome to my portfolio</h1>
          <p className="objective-intro">{MyInfoData[4].data}</p>
        </div>
        <img alt="" src={IntroPictures[1]} />
      </div>
    </div>
  );
}
export default Intro;
