import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

    const [isNavActive, setIsNavActive] = useState<boolean>(false)

    useEffect(() => {
        console.log(isNavActive)
    }, [isNavActive])

    const navList: { body: string, redirect: string }[] = [
        { body: "Home", redirect: "/" },
        { body: "Work", redirect: "" },
        { body: "Contact", redirect: "" }
    ]

    return (
        <nav className="text-2xl">

            <GiHamburgerMenu onClick={() => setIsNavActive(!isNavActive)}
                className="block sm:hidden" />

            <ul className={`${isNavActive ? "flex" : "hidden"} flex-col gap-0 sm:flex sm:flex-row sm:gap-8 justify-end `}>
                {navList.map(({ body, redirect }) => {
                    return <li key={body}>
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