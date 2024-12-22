import {Link, useLocation} from "react-router-dom";

const NavbarPage=()=>{

    const links=[
        {name:'Home',path:'/'},
        {name:'Find Jobs',path:'/find-jobs'},
        {name:'Find Talent',path:'/find-talent'},
        {name:'Post Jobs',path:'/post-jobs'},
        {name:'Posted Jobs',path:'/posted-jobs'},
        {name:'Job History',path:'/job-history'},


    ]
    const location =useLocation()


    return(
        <div className="flex bs-mx:hidden gap-5 h-full items-center">
            {
                links.map(link=>(
                    <div key={link.name} className={`${location.pathname==link.path  && "border-b-2 border-bright-sun-400 text-bright-sun-400" } flex items-center h-full `}>
                        <Link  to={link.path} className="text-md">
                            {link.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default NavbarPage