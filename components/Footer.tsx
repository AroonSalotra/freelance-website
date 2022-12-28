import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillHome } from "react-icons/ai"

const Footer = () => {

    const footerList:
        { body: (string | React.ReactNode), redirect: string, id: string }[] = [
            {
                body: <AiFillHome />,
                redirect: "https://www.aroonsalotra.com/",
                id: "My Website"
            },
            {
                body: <AiFillGithub />,
                redirect: "https://github.com/AroonSalotra",
                id: "Github"
            },
            {
                body: <AiFillLinkedin />,
                redirect: "#",
                id: "Linkedin"
            }
        ]

    return (
        <footer className="bg-slate-800 text-white py-4 flex flex-col items-center sm:flex-row sm:justify-around">

            <i>This is a mock website for demonstrating my programming ability</i>

            <ul className="flex gap-4">
                {footerList.map(({ body, redirect, id }) => {
                    return <li key={id}
                        className="py-1 text-2xl rounded-lg hover:bg-slate-400 ">
                        <a href={redirect}
                            target="_blank"
                            rel="noreferrer" >
                            {body}
                        </a>
                    </li>
                })}
            </ul>

        </footer>
    );
}

export default Footer;