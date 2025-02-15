import { ThemeSwitch } from "@/feature/theme/theme-switch";
import Link from "next/link";

const Header = () => {

    return (
        <header className="h-12 w-full z-50 bg-original-purple text-original-white font-bold fixed flex justify-between items-center px-4">
            <Link href="/">
                <div>©0→ ゼロカラ</div>
            </Link>
            <ThemeSwitch />
        </header>
    );
}

export default Header;