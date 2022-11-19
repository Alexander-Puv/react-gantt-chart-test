import React, { useContext } from 'react'
import cl from "../styles/Header.module.css"
import { AppContext } from '../context/context'

const Header = () => {
    const {data} = useContext(AppContext);
    
    return (
        <header className={cl.header}>
            <h1>{data.project} / {data.period}</h1>
            <button><i className="icon-Export" /><p>Export</p></button>
        </header>
    )
}

export default Header