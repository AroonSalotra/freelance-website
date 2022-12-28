import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

    const [isNavActive, setIsNavActive] = useState<boolean>(false)
    const router = useRouter()

    const navList: { body: string, redirect: string }[] = [
        { body: "Home", redirect: "/" },
        { body: "Quote", redirect: "/quote" },
        { body: "Support", redirect: "/support" }
    ]

    return (
        <nav className="text-2xl">

            <GiHamburgerMenu onClick={() => setIsNavActive(!isNavActive)}
                className="absolute right-2 text-4xl bg-white sm:hidden" />

            <ul className={`${isNavActive ? "flex" : "hidden"} flex-col pt-10 gap-0 sm:pt-0 sm:flex sm:flex-row sm:gap-8 justify-end`}>
                {navList.map(({ body, redirect }) => {
                    return <li key={body}
                        className={`p-2 pointer md:hover:text-slate-500
                         ${redirect === router.pathname ? "underline" : ""}`}

                        onClick={() => setIsNavActive(!isNavActive)} >
                        <Link
                            href={redirect}>
                            {body}
                        </Link>
                    </li>
                })}
            </ul>

        </nav>
    );
}

export default Navbar;