import { useState } from 'react';
import { observer } from 'mobx-react';
import Athlete from './Athlete';

type TradeFormProps = {
	athlete: Athlete;
};

function TradeForm({ athlete }: TradeFormProps) {
	const [teamName, setTeamName] = useState<string>('');

	return (
		<>
			<input
				type="text"
				placeholder="team name"
				onChange={(e) => setTeamName(e.target.value)}
			/>
			<span>
				<button type="button" onClick={() => athlete.tradePlayer(teamName)}>
					Trade
				</button>
			</span>
		</>
	);
}

export default observer(TradeForm);
