import logo from "../public/my-icon.png"
import Image from "next/image";

const Header = () => {
    return (
        <header className="absolute w-8 h-auto sm:w-20">
            <Image src={logo}
                width={64}
                height={64}
                alt="my logo"
            />
        </header>
    );
}

export default Header;