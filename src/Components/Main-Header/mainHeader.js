import logoImg from '../../assets/logo.png'
import classes from './main-header.module.css';
import { NavLinkk } from '../Nav/NavLink';
import { Link } from 'react-router-dom';

const MainHeader= () => {
    


    return(
        <>
        <header className={classes.header} >
            <Link   className={classes.logo} href="/" >
            <img src={logoImg} alt="a plate full of food" />
            NextLevel Food
            </Link>
            <nav className={classes.nav} >
                <ul>
                    <li>
                        <NavLinkk to="/Meals" >Browse Meals</NavLinkk>
                    </li>
                    <li>
                        <NavLinkk to="/community" >Foodies Community</NavLinkk>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
};

export default MainHeader;