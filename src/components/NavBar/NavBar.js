import './navbarstyle.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';



export const NavBar = () => {
    return (
        <nav className='menu-navbar'>
            <h1 className='navbar-title'>Zeta Store</h1>
            <ul className='navbar-list'>
                <li className='navbar-list-title'><NavLink to='/'
                    className={({ isActive }) => isActive ? 'anchor-act' : 'navbar-list-anchor'}>Catálogo Completo</NavLink></li>
                <li className='navbar-list-title'><NavLink to='/category/pistolas'
                    className={({ isActive }) => isActive ? 'anchor-act' : 'navbar-list-anchor'}>Pistolas</NavLink></li>
                <li className='navbar-list-title'><NavLink to='/category/rifles'
                    className={({ isActive }) => isActive ? 'anchor-act' : 'navbar-list-anchor'}>Rifles</NavLink></li>
                <li className='navbar-list-title'><Link to='/cart'><CartWidget /></Link></li>
            </ul>
        </nav>
    )
};
