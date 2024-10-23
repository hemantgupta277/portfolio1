"use clients";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub/>,
        path: 'https://github.com/hemantgupta277'
    },
    {
        icon: <FaLinkedinIn/>,
        path: 'https://www.linkedin.com/in/hemant-gupta-910657234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        icon: <FaInstagram/>,
        path: ''
    },
    {
        icon: <FaTwitter/>,
        path: ''
    },
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social