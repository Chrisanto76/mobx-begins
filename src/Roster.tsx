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
				<th>Teams</th>
				<th>Is it their birthday ?</th>
			</tr>
			{[lebronJames, stephCurry].map((athlete) => {
				return (
					<tr key={athlete.name}>
						<td>{athlete.name}</td>
						<td>{athlete.age}</td>
						<td>{athlete.teamHistory}</td>
						<td>
							<button
								type="button"
								style={{ width: '100%' }}
								onClick={() => athlete.wishHappyBirthday()}
							>
								whish happy birthday
							</button>
						</td>
					</tr>
				);
			})}
		</table>
	);
}

export default observer(Roster);
