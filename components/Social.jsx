import Link from "next/link"
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials=[
    {icon:<FaGithub/>, path:"https://github.com/sobran5883"},
    {icon:<FaLinkedinIn/>, path:"https://www.linkedin.com/in/sobran-rajak-311285227/"},
]
const Social=({constainerStyles, iconStyles})=> {
  return (
    <div className={constainerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social