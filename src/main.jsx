import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <RouterProvider router={routes} />
    </PrismicProvider>
  </React.StrictMode>,
)
