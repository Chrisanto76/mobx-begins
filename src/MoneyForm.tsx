import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

type FormState = {
	total: number;
	years: number;
	salary: number;
};

const formState: FormState = observable({
	total: 0,
	years: 0,
	salary: 0,
});

function MoneyForm() {
	const CalculateTotal = action((formState: FormState) => {
		formState.total = formState.years * formState.salary;
	});

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginTop: '40px',
			}}
		>
			<h1 style={{ marginBottom: 0 }}>Money Talks</h1>
			<p className="total-p">Total: {formState.total}</p>
			<input
				type="number"
				placeholder="Years"
				style={{ height: '40px' }}
				onChange={action((e) => {
					formState.years = Number(e.target.value);
				})}
			/>
			<input
				type="number"
				placeholder="yearly salary"
				style={{ height: '40px' }}
				onChange={action((e) => {
					formState.salary = Number(e.target.value);
				})}
			/>
			<button type="button" onClick={() => CalculateTotal(formState)}>
				Calculate Total
			</button>
		</div>
	);
}

export default observer(MoneyForm);
