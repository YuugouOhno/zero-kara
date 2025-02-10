import { ThemeToggle } from "@/feature/theme/theme-toggle";

const NavBar = () => {

    return (
        <nav className="z-50 bg-original-purple text-original-black font-bold fixed w-full transition-all duration-50 ease-in">
            <div className="w-full mx-auto flex justify-between items-center">
                <div className="">
                    <div>©0→ ゼロカラ</div>
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default NavBar;