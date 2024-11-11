import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram , FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Moxsahil'},
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/sahil-barak-865063216/'},
    { icon: <SiLeetcode />, path: 'https://leetcode.com/u/moxsahil01/'},
    { icon: <FaInstagram />, path: 'https://www.instagram.com/moksshhh_.20/'},
]


const Social = ({containerStyles, iconStyles}) => {
  return <div className = {containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>;
};

export default Social