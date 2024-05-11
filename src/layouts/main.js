import React, { useState } from 'react'
import Header from '../components/header'
// import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import ThemeContext from '../context/theme/ThemeContext'

function MainLayout() {
    const [theme, setTheme] = useState('dark')

    const changeTheme = () => {
        let updated_theme = null
        if (theme === 'dark') {
            updated_theme = 'light'
        } else {
            updated_theme = 'dark'
        }
        document.body.classList.remove(theme)
        setTheme(updated_theme)
        document.body.classList.add(updated_theme)
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </ThemeContext.Provider>
    )
}

export default MainLayout