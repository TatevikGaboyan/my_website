import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';


export default function Menu() {
    return (
        <div>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li className="li1">
                    <Link to='about'>О нас</Link>
                    <div className="div_1">
                        <Link to='about/awards'>Наши награды</Link>
                        <Link to='about/reviews'>Отзывы</Link>
                    </div>
                </li>
                <li><Link to='timetable'>Расписание</Link></li>
                <li><Link to='events'>События</Link></li>
                <li><Link to='offers'>Спецпредложения</Link></li>
                <li><Link to='contacts'>Контакты</Link></li>
            </ul>
        </div>
    )
}


