import {withRouter} from 'react-router-dom';

function User(props) {

	return(
		<div>
			<h2>{props.name}</h2>
			<h3>{props.username}</h3>
			<p>{props.email}</p>
			<p>{props.phone}</p>
			<button onClick={() => props.history.push('/users/' + props.username.toLowerCase(), props.user)}>open profile</button>
		</div>
	)
}

export default withRouter(User);