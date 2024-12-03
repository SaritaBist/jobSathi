import { useState } from 'react'

import HomePage from "./pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import Header from "./header/Header.tsx";

function App() {

    const routers= createBrowserRouter(
        [
            {
                path:'/',
                element:<div><HomePage/></div>
            },
            {
                path:'/find-jobs',
                element:<div>
                    <Header/>
                    Find Jobs
                </div>
            },
            {
                path:'/find-talent',
                element:<div>
                    <Header/>
                    Find Talent</div>
            },
            {
                path:'/upload-jobs',
                element:<div>
                    <Header/>
                    Upload Jobs</div>
            },
            {
                path:'/about-us',
                element:<div>
                    <Header/>
                    About</div>
            },
        ]
    )
  return (
      <>
          <RouterProvider router={routers}>
          <div className="font-['poppins']">
              <HomePage/>
          </div>
          </RouterProvider>
      </>
  )
}

export default App
