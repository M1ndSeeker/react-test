import User from '../components/Users/User/User';
import {withRouter} from 'react-router-dom';

function UserLayout(props) {
	console.log(props)
	return(
		<div>
{/*			<h2>{props.name}</h2>
			<h3>{props.username}</h3>
			<p>{props.email}</p>
			<p>{props.phone}</p>*/}
			<h2>{props.match.params.username}</h2>
			{props.user.id}
			<button onClick={() => props.history.push('/users/')}>back</button>
		</div>
	)
}

export default withRouter(UserLayout);