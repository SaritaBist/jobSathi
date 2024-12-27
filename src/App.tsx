

import HomePage from "./pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";
import FindJobs from "./pages/FindJobs.tsx";
import FindTalent from "./pages/FindTalent.tsx";
import TalentProfile from "./pages/TalentProfile.tsx";
import PostJobsPage from "./pages/PostJobsPage.tsx";
import JobDescPage from "./pages/JobDescPage.tsx";
import ApplyJobPage from "./pages/ApplyJobPage.tsx";
import CompanyPage from "./pages/CompanyPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import PostedJobsPage from "./pages/PostedJobsPage.tsx";
import JobHistoryPage from "./pages/JobHistoryPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

function App() {

    const routers= createBrowserRouter(
        [
            {
                path:'/',
                element:<>
                    <Header/>
                    <HomePage/>
                    <Footer/>
                </>
            },
            {
                path:'/find-jobs',
                element:<>
                    <Header/>
                    <FindJobs/>
                    <Footer/>
                </>
            },
            {
                path:'/find-talent',
                element:<>
                    <Header/>
                     <FindTalent/>
                    <Footer/>
                </>
            },
            {
                path:'/post-jobs',
                element:<>
                    <Header/>
                    <PostJobsPage/>
                    <Footer/>
                </>
            },
            {
                path:'/posted-jobs',
                element:<>
                    <Header/>
                   <PostedJobsPage/>
                    <Footer/>
                </>
            },
            {
                path:'/talent-profile',
                element:<>
                    <Header/>
                    <TalentProfile/>
                    <Footer/>
                </>
            },

            {
                path:'/jobs',
                element:<>
                    <Header/>
                   <JobDescPage/>
                    <Footer/>
                </>
            },
            {
                path:'/apply-job',
                element:<>
                    <Header/>
                    <ApplyJobPage/>
                    <Footer/>
                </>
            },
            {
                path:'/job-history',
                element:<>
                    <Header/>
                    <JobHistoryPage/>
                    <Footer/>
                </>
            },
            {
                path:'/company',
                element:<>
                    <Header/>
                    <CompanyPage/>
                    <Footer/>
                </>
            },

            {
                path:'/profile',
                element:<>
                    <Header/>
                    <ProfilePage/>
                    <Footer/>
                </>
            },

            {
                path:'/signup',
                element:<>
                    <SignUpPage/>
                </>
            },
            {
                path:'/login',
                element:<>
                    <LoginPage/>
                </>
            },
        ]
    )
  return (

          <RouterProvider router={routers}/>
  )
}

export default App
