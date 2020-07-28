import React from 'react'
import Logo from '../../assets/img/cjr.png'
import Button from '../Button'
import './Menu.css'

const Menu = () => {
    return(

        <div>
            <nav className="Menu" >

                <a href="/">
                    <img src={Logo} className="Logo" alt="ReactFlix logo"/>
                </a>

                <Button className="ButtonLink" href="/">
                    Novo vídeo
                </Button>

            </nav>
        </div>
        
    );
}

export default Menu;