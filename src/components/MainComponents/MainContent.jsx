import React, { useContext } from 'react'
import { AppContext } from '../../context/context';
import cl from '../../styles/MainContent.module.css'

let day = [];
day.length = 12 * 7;
for (let i = 0; i < day.length; i++) {
    day[i] = i;
}

const MainContent = () => {
    const {data} = useContext(AppContext);
    console.log(data);
    return (
        <section className={cl.mainContent}>
            {day.map(i =>
                <div className={cl.day + ' table_item'} key={i}></div>
            )}
        </section>
    )
}

export default MainContent