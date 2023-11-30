import './App.css';
import MoneyForm from './MoneyForm';
import Athlete from './Athlete';
import Roster from './Roster';
import { TeamStoreProvider } from './TeamStore';
import TeamInfo from './TeamInfo';

const lebronJames = new Athlete('Lebron James', 37, 9);
const stephCurry = new Athlete('Steph Curry', 33, 5);

function getPlayersFromBackend(): Athlete[] {
	return [lebronJames, stephCurry];
}

function App() {
	const players = getPlayersFromBackend();

	return (
		<div className="App">
			<header className="App-header">
				<TeamStoreProvider players={players}>
					<TeamInfo />
					<Roster />
					<MoneyForm />
				</TeamStoreProvider>
			</header>
		</div>
	);
}

export default App;
