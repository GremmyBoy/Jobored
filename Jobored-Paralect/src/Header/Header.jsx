import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='Logo'>
            <img src="src/assets/Union.jpg" alt="Union" />
            <h1>Jobored</h1>
        </div>
        <nav>
            <ul className="navigation">
                <li>
                    <NavLink to=""> Поиск вакансий </NavLink>
                </li>
                <li>
                    <NavLink to=""> Избранное </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header