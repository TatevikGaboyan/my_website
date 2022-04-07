import HomeIcon from '@mui/icons-material/Home'


export default function Menu(){
    return(
        <div>
            <ul>
                <li>
                    <a href="#background"><HomeIcon/>Главная</a>
                </li>
                <li class="li1">
                    <a>О нас</a>
                    <div class="div_1">
                        <a>Наши награды</a>
                        <a>Отзывы</a>
                    </div>
                </li>
                <li>
                    <a>Расписание</a>
                </li>
                <li>
                    <a>События</a>
                </li>
                <li>
                    <a>Спецпредложения</a>
                </li>
                <li>
                    <a>Контакты</a>
                </li>
            </ul>    
        </div>
    )
}
