import { observer } from 'mobx-react';
import './App.css';
import TradeForm from './TradeForm';
import { useTeamStore } from './TeamStore';

function Roster() {
	const { players } = useTeamStore();
	return (
		<table>
			<tbody>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>Teams</th>
					<th>Trade form</th>
					<th>Is it their birthday ?</th>
				</tr>
				{players.map((athlete) => {
					return (
						<tr key={athlete.name}>
							<td>{athlete.name}</td>
							<td>{athlete.age}</td>
							<td>{athlete.teamHistory}</td>
							<td>
								<TradeForm athlete={athlete} />
							</td>
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
			</tbody>
		</table>
	);
}

export default observer(Roster);
