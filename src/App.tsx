import './App.css';
import MoneyForm from './MoneyForm';
import Roster from './Roster';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Roster />
				<MoneyForm />
			</header>
		</div>
	);
}

export default App;
