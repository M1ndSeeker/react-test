import React, {Component} from 'react';
import User from './User/User';

class Users extends Component{

	state = {
		users: [
			{
		    "id": 1,
		    "name": "Leanne Graham",
		    "username": "Bret",
		    "email": "Sincere@april.biz",
		    "phone": "1-770-736-8031 x56442",
		  },
		  {
		    "id": 2,
		    "name": "Ervin Howell",
		    "username": "Antonette",
		    "email": "Shanna@melissa.tv",
		    "phone": "010-692-6593 x09125",
		  }
		]
	}

	render(){
		return(
			<>
			<h2>This is Users page</h2>
			{
				this.state.users.map((item, index) => (
					<User
					key={index}
					user={item}
					name={item.name}
					username={item.username}
					email={item.email}
					phone={item.phone}
					/>
				))
			}
			</>
		)
	}
}

export default Users;