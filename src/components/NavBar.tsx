'use client'
import { useEffect, useState } from 'react'

import { ThemeToggle } from "@/feature/theme/theme-toggle";

const NavBar = () => {
    const [isActive, setIsActive] = useState(true);
    const [placeholder, setPlaceholder] = useState("Click to enter text");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            // 最初のふわっとするやつ
            if (scrollPosition > 50) {
                setIsActive(false);
            } else {
                setIsActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav className={`bg-original-purple text-original-black font-bold fixed w-full transition-all duration-50 ease-in ${isActive ? 'p-4 text-xl' : 'p-2'}`}>
            <div className="w-full mx-auto flex justify-between items-center">
                <div className="">
                    <div>©0→ ゼロカラ</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder={placeholder}
                        className={`bg-original-purple placeholder-original-black text-center text-xl round-5 transition-all duration-50 ease-in ${isActive ? 'p-4 mr-6 shadow' : 'hidden'}`}
                        onClick={() => setIsActive(true)}
                        onFocus={() => setPlaceholder("")} // フォーカス時に非表示
                        onBlur={() => setPlaceholder("スペースで&検索")} // フォーカス外れ時に再表示
                    />
                    <div
                        className={`bg-original-purple text-original-black text-center text-xl round-5 transition-all duration-500 ease-in ${isActive ? 'mr-2 hidden' : 'mr-2 p-2 w-10'}`}
                        onClick={() => setIsActive(true)}
                    >?</div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;