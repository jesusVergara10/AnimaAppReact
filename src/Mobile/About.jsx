import React from 'react'
import {
    useSinglePrismicDocument,
    usePrismicDocumentByUID,
    useAllPrismicDocumentsByType,
  } from "@prismicio/react";
  import "./Styles/AboutStyle.css"
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";



const About = () => {
    const [documentAbout] = useSinglePrismicDocument("about");
    const [documentHome] = useSinglePrismicDocument("mobilehome");
    const navigate = useNavigate();
    // debugger
  return (
    <div className="gridContainegrAbout">
        <div className="logoAbout">
        <img className="imgAbout" src={documentHome?.data.logo.url} alt="" />
        </div>
        <div className="inspquoteAbout">
            <p className="textAbout">{documentHome?.data.inspquote}</p>
        </div>
        <div className="buttonsAbout">
            <button className="btn2About" onClick={()=>navigate("/projectsmenu")}>PROJECTS</button>
            <button className="btnAbout"  onClick={()=>navigate("/")}>HOME</button>
        </div>
        <div className='textContainerAbout'>
            <p>{documentAbout?.data.textabout[0].text}</p>
            <p>{documentAbout?.data.textabout[1].text}</p>
            <Link className='link' to="https://www.facebook.com/anbt.studio" target="_blank">FACEBOOK</Link>
            <Link className='link' to="https://www.instagram.com/anbt.studio/" target="_blank">INSTAGRAM</Link>
        </div>
        <div className="logotypeAbout">
        <img className="anbtAbout" src={documentHome?.data.logotype.url} alt="" />
        </div>

  </div>
  )
}

export default About