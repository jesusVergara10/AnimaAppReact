
import {
    createBrowserRouter
} from "react-router-dom";
import HomePageWrapper from "./Components/HomePageWrapper";
import About from "./Mobile/About";
import Projects from "./Mobile/Projects";
import ProjectsMenu from "./Mobile/ProjectsMenu";


export default createBrowserRouter([
    {
        path: "/",
        element: <HomePageWrapper/>
    },
    {
        path:"/about",
        element: <About/>
    },
    {
        path: "/projects/:projectName",
        element: <Projects/>
    },
    {
        path: "/projectsmenu",
        element: <ProjectsMenu/>
    }
]);