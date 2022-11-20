import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/context';
import cl from '../../styles/MainTop.module.css';

const date = new Date('09.01.2022');
function getAllTime(thisDate) {
    const allTime = []
    for (let i = 0; i < 12; i++) {
        let week = [];

        for(let w = 0; w < 7; w++){
            week[w] = {
                date: thisDate.getDate(),
                month: thisDate.getMonth()
            };
            date.setDate(week[w].date + 1);
        }
        
        allTime[i] = week;
    }
    return allTime;
}
const allTime = getAllTime(date);

const DayComponent = ({day}) => {
    return <div className={cl.day_container}>
        <div className={cl.day + ' table_item'}>
            {day.date}
        </div>
        <div className={cl.day_base + ' table_item'}></div>
    </div>
}

const WeekComponent = ({week}) => {
    const getMonth = (month) => {
        return new Date(`${month + 1}`).toLocaleString('en', {
            month: 'short'
        })
    }
    
    return <div className={cl.week}>
        <div className={cl.week_range + ' table_item'}>
            {week[0].date + ' ' + getMonth(week[0].month)} - {week[week.length - 1].date + ' ' + getMonth(week[week.length - 1].month)}
        </div>
        <div className={cl.week__days}>
            {week.map(day => 
                <DayComponent day={day} key={day.date} />
            )}
        </div>
    </div>
}

const nesting_levels = [
    cl.st__nesting_level,
    cl.nd__nesting_level,
    cl.rd__nesting_level,
    cl.forth__nesting_level,
    cl.fifth__nesting_level
]

const NestedElement = ({object, id = 0}) => {
    const [isClose, setIsClose] = useState();
    const {areClose} = useContext(AppContext);

    useEffect(() => {
        setIsClose(areClose.findIndex(el => el === object.id) !== -1 ? true : false)
    })

    return <>
        <div
            className={cl.nested_element}
            style={{transform: `translate(calc(21.14px * ${object.period_start.substr(-2) - 1}), 
                    calc(48px + (100% * ${object.id})))`,
                width: `calc(21.14px * ${object.period_end.substr(-2) - object.period_start.substr(-2) + 1})`
            }}
            key={object.id}
        >
            <div className={nesting_levels[id]}></div>
            <span>{object.title}</span>
        </div>
        {!isClose && object.sub && object.sub.map(obj =>
            <NestedElement object={obj} id={id + 1} key={obj.id} />
        )}
    </>
}

const MainContent = () => {
    const {data} = useContext(AppContext);

    return (
        <section className={cl.main_content}>
            <div className={cl.weeks_container}>
                {allTime.map((week, index) => 
                    <WeekComponent week={week} key={index} />
                )}
            </div>
            <div className={cl.nested_elements_container}>
                <NestedElement object={data.chart} />
            </div>
        </section>
    )
}

export default MainContent