import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Josephtg107'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/josephtg107/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/josephtg107/'},
    {icon: <FaYoutube />, path: 'https://www.youtube.com/channel/UCj7mHg7_vVCmyMRla32338A'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })}
  </div>
  );
};

export default Social