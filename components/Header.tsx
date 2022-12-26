import logo from "../public/my-icon.png"
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="absolute w-8 h-auto sm:w-20">
            <Link href={"/"}>
                <Image className="transition-all hover:scale-95 active:scale-105"
                    src={logo}
                    width={64}
                    height={64}
                    alt="my logo"
                />
            </Link>
        </header>
    );
}

export default Header;