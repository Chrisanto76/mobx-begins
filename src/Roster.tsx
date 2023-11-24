import { observer } from 'mobx-react';
import Athlete from './Athlete';
import './App.css';

const lebronJames = new Athlete('Lebron James', 37);
const stephCurry = new Athlete('Steph Curry', 33);

function Roster() {
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Age</th>
			</tr>
			{[lebronJames, stephCurry].map((Athlete) => {
				return (
					<tr key={Athlete.name}>
						<td>{Athlete.name}</td>
						<td>{Athlete.age}</td>
					</tr>
				);
			})}
		</table>
	);
}

export default observer(Roster);
