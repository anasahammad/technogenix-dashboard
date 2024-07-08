import { useEffect, useState } from "react";


const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    
    useEffect(()=>{
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme])
    return {theme, setTheme}
};

export default useTheme;