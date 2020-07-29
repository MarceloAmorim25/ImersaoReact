import React from 'react'
import Logo from '../../assets/img/cjr.png'
import { Link } from 'react-router-dom'
import Button from '../Button'
import './Menu.css'

const Menu = () => {
    return(

        <div>
            <nav className="Menu" >

                <Link to="/">
                    <img src={Logo} className="Logo" alt="ReactFlix logo"/>
                </Link>

                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </Button>

            </nav>
        </div>
        
    );
}

export default Menu;