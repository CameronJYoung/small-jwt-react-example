import {Link} from 'react-router-dom'

import './Nav.css';

function Nav() {
	return (
		<nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
				<li>
                    <Link to="/products">
                        products
                    </Link>
                </li>
            </ul>
		</nav>
	);
}

export default Nav;
