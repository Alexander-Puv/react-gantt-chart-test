import React from 'react'
import cl from '../styles/Main.module.css'
import MainContent from './MainComponents/MainContent'
import MainSideBar from './MainComponents/MainSideBar'
import MainTop from './MainComponents/MainTop'

const Main = () => {
    return (
        <main className={cl.main}>
            <MainSideBar />
            <div className={cl.flex}>
                <MainTop />
                <MainContent />
            </div>
        </main>
    )
}

export default Main