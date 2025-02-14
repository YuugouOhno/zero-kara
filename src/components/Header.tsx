import { ThemeToggle } from "@/feature/theme/theme-toggle";

const Header = () => {

    return (
        <header className="h-12 w-full z-50 bg-original-purple font-bold fixed flex justify-between items-center">
            <div className="">
                <div>©0→ ゼロカラ</div>
            </div>
            <ThemeToggle />
        </header>
    );
}

export default Header;