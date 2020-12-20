import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/textual">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu