import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Settings = () => {

    const [settings, setSettings] = useState({
        "--background-color": "white",
        "--background-light": "white",
        "--shadow-color": "black",
        "--primary-color": "rgb(148, 28, 204)",
        "--text-color": "black",
        "--text-light": "rgb(51, 36, 36)",
        "--font-size": "16px",
        "--animation-speed": 1
    })

    const initialTheme = localStorage.getItem("theme") || "light";

    const [theme, setTheme] = useState(initialTheme);

    const themes = [
        {
            "--background-color": "white",
            "--background-light": "white",
            "--shadow-color": "black",
            "--text-color": "black",
            "--text-light": "rgb(51, 36, 36)",
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0, 0, 0, 0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]

    const swapThemes = (i) => {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");
        setSettings(prevSettings => ({
            ...prevSettings, ..._theme
        }));
    }

    // changing settings and saving to localStorage
    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
        localStorage.setItem('theme', theme);
    }, [theme, settings])

    // loading settings from localStorage on startup
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            swapThemes(savedTheme === 'light' ? 0 : 1);
        }
    },// eslint-disable-next-line 
        []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div className='section options-block'>
            <h2>preferred theme</h2>
            <div className='options-container'>
                <div className='option light' onClick={() => swapThemes(0)}>
                    {theme === 'light' ? <div className='checkmark'>
                        <FontAwesomeIcon icon={faCheck} />
                    </div> : null}
                </div>
                <div className='option dark' onClick={() => swapThemes(1)}>
                    {theme === 'dark' ? <div className='checkmark'>
                        <FontAwesomeIcon icon={faCheck} />
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Settings
