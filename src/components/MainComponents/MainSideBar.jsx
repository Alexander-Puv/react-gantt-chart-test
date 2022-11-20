import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import cl from '../../styles/MainSideBar.module.css';

const icons = [
    'icon-st_level',
    'icon-nd_level',
    'icon-rd_level',
    'icon-forth_level',
    'icon-fifth_level',
]

const MainSideBar = () => {
    const {data, areClose, setAreClose} = useContext(AppContext);

    const map = (object, id = 0) => {
        const toggleClass = (e) => {
            if (e.target.classList[1] === cl.isOpen) {
                e.target.classList.remove(cl.isOpen)
                e.target.parentElement.parentElement.parentElement.children[2].classList.remove(cl.isOpen)
                setAreClose([...areClose, object.id])
            }
            else {
                e.target.classList.add(cl.isOpen)
                e.target.parentElement.parentElement.parentElement.children[2].classList.add(cl.isOpen)
                areClose.splice(areClose.findIndex(el => el === object.id), 1)
                setAreClose([...areClose])
            }
        }

        return <li key={object.id}>
            <div className={cl.workitem}>
                <i className={cl.icon}>
                    {object.sub && <i className={"icon-Chevron " + cl.isOpen} onClick={e => toggleClass(e)}/>}
                </i>
                <i className={icons[id] + ` ${cl.icon}`} />
                <span>{object.sub ? object.sub.length : 0}</span>
                {object.title}
            </div>
            <div className={cl.workitem_table + ' table_item'}></div>
            {object.sub && <ul className={cl.isOpen}>
                {object.sub.map(obj => 
                    map(obj, id + 1)
                )}
            </ul>}
        </li>
    }
    
    return (
        <section className={cl.sideBar}>
            <div className={cl.work_item + " table_item"}>Work item</div>
            <div className={cl.emptyItem}>
                <div className={cl.workitem_table + ' table_item'}></div>
            </div>
            <ul className={cl.isOpen}>
                {map(data.chart)}
            </ul>
            <div className={cl.rest__side_bar + ' table_item'}></div>
        </section>
    )
}

export default MainSideBar