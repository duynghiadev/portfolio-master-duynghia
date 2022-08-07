import { MyProjects } from "../data/MyProjects";
import "../Styles/MyWorkStyles.css";
import { useEffect } from "react";

function MyWork() {

  return (
    <>
      <h1 className="mywork-heading">My Work</h1>
      <div className="mywork-wrapper">
        {MyProjects.map((project) => {
          return (
            <div key={project.id} className="mywork">
              <h1 className="project-name">{project.name}</h1>
              <img src={project.img} width={350} height={250} />
              <div className="project-detail">
                <p>
                  Description: <span>{project.description}</span>
                </p>
                <p>
                  Technology: <span>{project.technology}</span>
                </p>
                <button>
                  <a href={project.link} target="_blank">
                    View Demo
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default MyWork;
