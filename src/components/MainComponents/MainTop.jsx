import React from 'react';
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
    return <div className={cl.day + ' table_item'}>
        {day}
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
        <div className={cl.day_container}>
            {week.map(day => 
                <DayComponent day={day.date} key={day.date} />
            )}
        </div>
    </div>
}

const MainTop = () => {
    return (
        <section className={cl.top}>
            <div className={cl.week_container}>
                {allTime.map((week, index) => 
                    <WeekComponent week={week} key={index} />
                )}
            </div>
        </section>
    )
}

export default MainTop