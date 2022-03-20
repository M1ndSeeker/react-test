import {Switch, Route, Redirect} from 'react-router-dom';
import Users from './components/Users/Users';
import HomePage from './components/HomePage/HomePage';
import UserLayout from './layouts/UserLayout';

export default function(){
	return(
		<>
		<Switch>
		      <Route path="/" exact component={HomePage}/>
		      {<Route path="/users/:username" component={UserLayout}/>}
		      <Route path="/users" component={Users}/>
		      {<Redirect to={"/"}/>}
		</Switch>
		</>
	)
}