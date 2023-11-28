import { action, computed, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';

type FormState = {
	years: number;
	salary: number;
};

const formState: FormState = observable({
	years: 0,
	salary: 0,
});

function MoneyForm() {
	const totalValue = computed(() => formState.years * formState.salary).get();
	console.log(toJS(totalValue));
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginTop: '40px',
			}}
		>
			<h1 style={{ marginBottom: 0 }}>Money Talks</h1>
			<p className="total-p">Total: {toJS(totalValue)}</p>
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
		</div>
	);
}

export default observer(MoneyForm);
