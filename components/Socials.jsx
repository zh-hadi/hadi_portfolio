import Link from "next/link";
import {FaGithub, FaLinkedinIn,FaYoutube, FaTwitter} from 'react-icons/fa'
 const socials =[
    {icon:<FaGithub/>,path:"https://github.com/zh-hadi"},
    {icon:<FaLinkedinIn/>,path:"https://bd.linkedin.com/in/hadiuzzaman162?trk=public_profile_samename-profile"},
    {icon:<FaYoutube/>,path:"https://www.youtube.com/idah"},
    {icon:<FaTwitter/>,path:"https://x.com/360hadi"},
 ];
const Socials = ({containerStyle,iconStyle}) => {
    return (
        <div className={containerStyle}>
            {socials.map((item,index)=>{
                return <Link key={index} href={item.path} className={iconStyle}>{item.icon}</Link>
            })}
        </div>
    );
}

export default Socials;

