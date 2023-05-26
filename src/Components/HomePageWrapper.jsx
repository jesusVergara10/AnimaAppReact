import React from "react";
import { useWindowDimensions } from "../Utils/UseWindowTwo";
import MobileHome from "../Mobile/MobileHome";
import Homepage from "../Homepage";

const HomePageWrapper = () => {
  const screenSize = useWindowDimensions();
    if(screenSize.width <= 600 ){
        return(
            <MobileHome/>
        )
    }else{
        return(
            <Homepage/>
        )
    }
};

export default HomePageWrapper;
