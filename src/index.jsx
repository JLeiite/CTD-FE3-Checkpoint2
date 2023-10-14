import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import "./index.css";

import Login from "./Routes/Login";
import App from "./App";
import ThemeProvider from "./contexts/theme-context";
import AuthProvider from "./contexts/auth-context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./Routes/Detail";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {path : "/", element: <Home/>},
      {path : "/login", element: <Login/>},
      {path : "/detail/:matricula", element: <Detail/>}
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  // <React.StrictMode>
    <AuthProvider>
      <ThemeProvider >
        <RouterProvider router={router}/>
      </ThemeProvider>
    </AuthProvider>
  // </React.StrictMode>
);
