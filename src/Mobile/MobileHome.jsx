import React from "react";
import {
    useSinglePrismicDocument,
    usePrismicDocumentByUID,
    useAllPrismicDocumentsByType,
  } from "@prismicio/react";
import { useNavigate } from "react-router-dom";
import "./Styles/MobileHomeStyle.css"

const MobileHome = () => {
  const [document] = useSinglePrismicDocument("mobilehome");
  //const document = undefined;
  const [projects] = useAllPrismicDocumentsByType("projects");
  const navigate = useNavigate();

  //  console.log(document)
    // debugger
  return (
      <div className="gridContainerMobile">
        <div className="logoMobile">
            <img className="imgMobile" src={document?.data.logo.url} alt="" />
        </div>
        <div className="inspquoteMobile">
            <p className="textMobile">{document?.data.inspquote}</p>
        </div>
        <div className="buttonsMobile">
            <button className="btn2Mobile"onClick={()=>navigate("/projectsmenu")}>PROJECTS</button>
            <button className="btnMobile" onClick={()=>navigate("/about")}>ABOUT</button>
        </div>
        <div className="imageMobile">
            <img src={document?.data.homeimage.url} alt="" />
        </div>
        <div className="logotypeMobile">
        <img className="anbtMobile" src={document?.data.logotype.url} alt="" />
        </div>
      </div>
  )
};

export default MobileHome;
