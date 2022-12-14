import Link from "next/link";

const Navbar = () => {
    const navList: { body: string, redirect: string }[] = [
        { body: "Home", redirect: "/" },
        { body: "Work", redirect: "" },
        { body: "Contact", redirect: "" }
    ]

    return (
        <nav className="flex justify-end gap-8 text-2xl">
            {navList.map(({ body, redirect }) => {
                return <Link
                    href={redirect}
                    key={body}>
                    {body}
                </Link>
            })}
        </nav>
    );
}

export default Navbar;