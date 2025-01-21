'use client'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [isActive, setIsActive] = useState(true);

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
        <nav className={`fixed w-full bg-gray-800 transition-all duration-50 ease-in ${isActive ? 'p-4 text-xl' : 'bg-gray-300 dark:bg-gray-700 p-0'}`}>
            <div className="max-w-4xl w-full mx-auto flex justify-between items-center">
                <div className="">
                    <div>©0→ ゼロカラ</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder={isActive ? 'スペースで&検索' : '?'}  
                        className={`text-center text-xl round-5 transition-all duration-50 ease-in bg-gray-700 ${isActive ? 'p-4 ' : 'p-1 w-10'}`}
                        onClick={() => setIsActive(true)}
                    />
                    <button className="text-white m-4 rounded">Login</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;