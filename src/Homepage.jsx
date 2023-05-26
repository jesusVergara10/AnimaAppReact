import React, { useState } from "react";
import "./Homepage.css";
import {
  useSinglePrismicDocument,
  usePrismicDocumentByUID,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import SliderRC from "../src/Components/SliderRC";

const Homepage = () => {
  const [document] = useSinglePrismicDocument("homepage");
  const [projects] = useAllPrismicDocumentsByType("projects");


  const elementos =
    projects?.map((item) => {
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

  // console.log(projects)

  const [indice, setIndice] = useState(0);
  const clickHandle = () => {
    if (indice >= elementos.length - 1) {
      setIndice(0);
    } else {
      setIndice(indice + 1);
    }
  };

  const clickHandleLess = () => {
    if (indice <= 0) {
      setIndice(elementos.length - 1);
    } else {
      setIndice(indice - 1);
    }
  };

  return (
    <div className="gridContainer">
      <div className="caja c1">{document?.data.inspquote1}</div>
      <div className="caja c2">
        <img className="logo" src={document?.data.logo.url} alt="" />
      </div>
      <div className="caja c3">{document?.data.inspquote2}</div>

      <div className="caja c4">
        <div className="projectInfo">
          <p>{elementos[indice]?.data?.title}</p>
        </div>
        <div className="botonContainer">
          <button
            className="boton"
            onClick={() => {
              clickHandleLess();
            }}
          >
            PREVIOUS PROJECT
          </button>
        </div>
      </div>

      <div className="caja c5">
        <SliderRC images={elementos[indice]?.imageSlides ?? []}></SliderRC>
      </div>

      <div className="caja c6">
        <div className="projectInfo">
          <p>{elementos[indice]?.data?.services}</p>
        </div>
        <div className="botonContainer">
          <button
            className="boton"
            onClick={() => {
              clickHandle();
            }}
          >
            NEXT PROJECT
          </button>
        </div>
      </div>

      <div className="caja c7">esquina Izq Abajo</div>
      <div className="caja c8">
        <img className="logotype" src={document?.data.logotype.url} alt="" />
      </div>
      <div className="caja c9">{document?.data.contact}</div>
    </div>
  );
};

export default Homepage;
