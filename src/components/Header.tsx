import { ThemeSwitch } from "@/feature/theme/theme-switch";

const Header = () => {

    return (
        <header className="h-12 w-full z-50 bg-original-purple font-bold fixed flex justify-between items-center">
            <div className="">
                <div>©0→ ゼロカラ</div>
            </div>
            <ThemeSwitch />
        </header>
    );
}

export default Header;