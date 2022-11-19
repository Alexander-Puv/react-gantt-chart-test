import React from 'react'
import cl from '../../styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader