import { ThemeSwitch } from "@/feature/theme/theme-switch";
import Link from "next/link";
import Image from "next/image";

const Header = () => {

    return (
        <header className="h-12 w-full z-50 bg-original-purple text-original-white font-bold fixed flex justify-between items-center px-4">
            <Link href="/" className="relative h-10 w-28">
                <Image
                    src="/header_icon.svg"
                    fill
                    alt="header_icon"
                    className="object-cover rounded-lg"
                />
            </Link>
            <ThemeSwitch />
        </header>
    );
}

export default Header;