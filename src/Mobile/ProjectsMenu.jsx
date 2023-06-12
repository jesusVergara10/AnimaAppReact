import React from "react";
import {
  useSinglePrismicDocument,
  usePrismicDocumentByUID,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./Styles/ProjectsMenuStyle.css";

const ProjectsMenu = () => {
  const [document] = useSinglePrismicDocument("mobilehome");
  const [projects] = useAllPrismicDocumentsByType("projects");
  const navigate = useNavigate();
  // debugger
  return (
    <div className="containerProjectsMenu">
      <div className="logoPMenu">
        <img
          className="imgPMenu"
          src={document?.data.logo.url}
          alt="Anima Logo"
        />
      </div>
      <div className="inspquotePMenu">
        <p className="textPMenu">{document?.data.inspquote}</p>
      </div>
      <div className="buttonsPM">
        <button className="btn2Pmenu" onClick={() => navigate("/")}>BACK</button>
        <button className="btnPmmenu" onClick={() => navigate("/about")}>
          ABOUT
        </button>
      </div>
      <div className="menuPMenu">
      {projects &&
        projects.map((item, i) => {
          return(
          <div key={i} className="projectsdiv">
            <Link className="projectsLink" to={"/projects/" + item.data.title}> 
            <p>{item.data.serviceoneword}</p>
            <p>{item.data.title}</p>
            </Link>
          </div>
          )
        })}
      </div>
      <div className="logotypePMenu">
        <img className="anbtPMenu" src={document?.data.logotype.url} alt="" />
      </div>
    </div>
  );
};

export default ProjectsMenu;
