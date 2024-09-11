import { useState, useEffect } from 'react';

const ThemeChange = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle theme mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={toggleTheme}
            className="px-4 bg-gray-200 rounded-full dark:bg-gray-800 text-black dark:text-white"
        >
            {isDarkMode ? "☾" : "☀"}
        </button>
    );
};

export default ThemeChange;