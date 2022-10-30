import "../Styles/MyInfoStyles.css";
import resumepic from "../pics/resume-pic.jpg";
import resumepdf from "../Resume/Le-Nguyen-Duy-Nghia-CV.pdf";
import { MyInfoData } from "../data/MyInfoData";
import MySkills from "./MySKills";
import MyPersonality from "./MyPersonality";
function MyInfo() {
  return (
    <div className="MyInfo_wrapper">
      <div className="introduction">
        <img
          src="https://www.pngmart.com/files/2/Pikachu-Transparent-Background.png"
          className="hello_pikachu_img"
          alt="pikachu_img"
        />

        <div className="introduction-text">
          <h1>
            Hi! I am <span className="name">{MyInfoData[0].data}</span>
          </h1>
          <h1>{MyInfoData[1].data}</h1>
          <button>
            <a href={resumepdf} download={true}>
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="myself">
        <div className="my-objective-wrapper">
          <div className="my-objective">
            <h1>About me</h1>
            <p>
              {MyInfoData[2].data}
              <span className="highlight">{MyInfoData[3].data}</span>
            </p>
          </div>
          <div className="myself-pic">
            <img src={resumepic} alt="resume pic" />
          </div>
        </div>
        <div className="my-skills-wrapper">
          <div className="my-skills">
            <h1>My Skills</h1>
            <div className="skills-list">
              <MySkills myskills={MyInfoData[5].data} />
            </div>
          </div>
          <div className="personality">
            <h1>My personality</h1>
            <MyPersonality MyPersonality={MyInfoData[6].data} />

            <img
              src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795ipeio.png"
              alt="pokemon"
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyInfo;
