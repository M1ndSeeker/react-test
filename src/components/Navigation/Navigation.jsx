import {NavLink} from 'react-router-dom';

export default function() {
	return(
		<>
		    <nav>
		      <ul>
		        <li>
		          <NavLink to="/">Home</NavLink>
		        </li>
		        <li>
		          <NavLink to="/users">Users</NavLink>
		        </li>
		      </ul>
		    </nav>
    	</>
	)
}