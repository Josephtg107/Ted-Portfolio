"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
    {
        name: "3D content",
        path: "/threeD"
    },
];

const Nav = () => {
    const pathname = usePathname();
    return ( 
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                    href={link.path}
                    key={index}
                    className={`${
                        link.path === pathname && "text-accent bordfer-b-2 border-accent"
                        } capitalize font-medium hove:text-accent
                        transition-all`}
                        >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
  );
};

export default Nav;