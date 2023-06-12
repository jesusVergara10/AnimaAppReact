import React, { useState } from "react";
import {
  useSinglePrismicDocument,
  usePrismicDocumentByUID,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { useNavigate, useParams } from "react-router-dom";
import SliderRC from "../Components/SliderRC";
import "./Styles/ProjectsStyle.css";
import styled, { keyframes } from "styled-components";

const expand = keyframes`
from {grid-template-rows: 10% 5% 5% 70% 5% 5%;}
to {grid-template-rows: 10% 5% 5% 20% 5% 58%;}
`;

const shrink = keyframes`
from {grid-template-rows: 10% 5% 5% 20% 5% 58%;}
to {grid-template-rows: 10% 5% 5% 70% 5% 5%;}
`;

const Projects = () => {
  const [document] = useSinglePrismicDocument("mobilehome");
  const [projects] = useAllPrismicDocumentsByType("projects");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const GridContainerExpanded = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas:
      "logo"
      "inspquote"
      "buttons"
      "image"
      "logotype"
      "projectInfo";
    grid-template-columns: 100vw;
    animation: ${open ? expand : shrink} 1s linear forwards;
    // grid-template-rows: 10% 5% 5% 20% 5% 50%;
  `;

  let { projectName } = useParams();
  const elementos =
    projects
      ?.filter((item) => {
        return item.data.title === projectName;
      })
      .map((item) => {
        const imageSlides = [];
        if (item.data.image0?.url) {
          imageSlides.push(item.data.image0);
        }
        if (item.data.image1?.url) {
          imageSlides.push(item.data.image1);
        }
        if (item.data.image2?.url) {
          imageSlides.push(item.data.image2);
        }
        if (item.data.image3?.url) {
          imageSlides.push(item.data.image3);
        }
        if (item.data.image4?.url) {
          imageSlides.push(item.data.image4);
        }
        return {
          ...item,
          imageSlides,
        };
      }) ?? [];

  //  debugger

  return (
    <GridContainerExpanded>
      <div className="logoProjects">
        <img className="imgProjects" src={document?.data.logo.url} alt="" />
      </div>
      <div className="inspquoteProjects">
        <p className="textProjects">{document?.data.inspquote}</p>
      </div>
      <div className="buttonsProjects">
        <button className="btn2Projects">PROJECTS</button>
        <button className="btnProjects" onClick={() => navigate("/about")}>
          ABOUT
        </button>
      </div>
      <div className="imageProjects">
        <SliderRC images={elementos[0]?.imageSlides ?? []}></SliderRC>
      </div>
      <div className="logotypeProjects">
        <p>{elementos[0]?.data?.title}</p>
      </div>
      <div className="projectInfo">
        {!open ? (
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="btnProjects"
          >
            PROJECT INFO
          </button>
        ) : (
          <div className="logotypeProjects">
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="btnProjects"
            >
              CLOSE
            </button>
            {elementos[0].data.projectinfo.map((item, i) => {
              return(
              <div>
                <div>{item.text}</div> 
              </div>
              )
            })}
          </div>
        )}
      </div>
    </GridContainerExpanded>
  );
};

export default Projects;
