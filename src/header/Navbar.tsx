import {Link, useLocation} from "react-router-dom";

const NavbarPage=()=>{

    const links=[
        {name:'Home',path:'/'},
        {name:'Find Jobs',path:'/find-jobs'},
        {name:'Find Talent',path:'/find-talent'},
        {name:'Upload Jobs',path:'/upload-jobs'},
        {name:'About Us',path:'/about-us'}

    ]
    const location =useLocation()
    console.log(location.pathname)


    return(
        <div className="flex gap-5 h-full items-center">
            {
                links.map(link=>(
                    <div key={link.name} className={`${location.pathname==link.path  && "border-b-2 border-bright-sun-400 text-bright-sun-400" } flex items-center h-full `}>
                        <Link  to={link.path} className="text-lg">
                            {link.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default NavbarPage