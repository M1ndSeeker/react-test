import Navigation from '../components/Navigation/Navigation';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import MyRoutes from '../MyRoutes';

export default function(){
	return(
		<>
			<Header titlePage='Head'/>
			<Navigation/>
			<Main>
				<MyRoutes/>
			</Main>
		</>
	)
}