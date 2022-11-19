import React from 'react'
import cl from '../styles/Main.module.css'
import MainSideBar from './MainComponents/MainSideBar'
import MainContent from './MainComponents/MainContent'

const Main = () => {
    return (
        <main className={cl.main}>
            <MainSideBar />
            <MainContent />
        </main>
    )
}

export default Main