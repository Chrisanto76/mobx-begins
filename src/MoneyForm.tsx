import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { useTeamStore } from './TeamStore';
import Athlete from './Athlete';

type FormState = {
	name: string;
	years: number;
	salary: number;
};

const initialState: FormState = {
	name: '',
	years: 0,
	salary: 0,
};

let formState: FormState = observable({
	name: '',
	years: 0,
	salary: 0,
});

function MoneyForm() {
	const { totalYearlyCost, addPlayer } = useTeamStore();

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginTop: '40px',
			}}
		>
			<h1 style={{ marginBottom: 0 }}>Money Talks</h1>
			<p className="total-p">Total: {totalYearlyCost} Millions</p>
			<input
				type="text"
				placeholder="Player name..."
				style={{ height: '40px' }}
				value={formState.name}
				onChange={action((e) => {
					formState.name = e.target.value;
				})}
			/>
			<input
				type="number"
				placeholder="Player age..."
				style={{ height: '40px' }}
				value={formState.years}
				onChange={action((e) => {
					formState.years = Number(e.target.value);
				})}
			/>
			<input
				type="number"
				placeholder="yearly salary..."
				style={{ height: '40px' }}
				value={formState.salary}
				onChange={action((e) => {
					formState.salary = Number(e.target.value);
				})}
			/>
			<button
				type="button"
				onClick={action((e) => {
					addPlayer(
						new Athlete(formState.name, formState.years, formState.salary)
					);
					formState = initialState;
				})}
			>
				Add Player
			</button>
		</div>
	);
}

export default observer(MoneyForm);
