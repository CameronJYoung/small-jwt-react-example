import {NavLink} from 'react-router-dom'

import './Nav.css';

function Nav() {
	return (
		<nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
				<li>
                    <NavLink to="/products">
                        products
                    </NavLink>
                </li>
            </ul>
		</nav>
	);
}

export default Nav;
