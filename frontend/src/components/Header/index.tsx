import logo from '../../assets/img/logo.svg';

import './style.css';
function Header() { 
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSmeta" />
                    <h1>DSmeta</h1>
                    <p>Desenvolvido por 

                        <a href="https://www.instagram.com/guilhermegnetobr/"> @guilhermeneto </a>

                    </p>
            </div>
        </header>


    )
}

export default Header;