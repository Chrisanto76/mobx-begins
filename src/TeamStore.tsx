import { makeAutoObservable } from 'mobx';
import Athlete from './Athlete';
import React from 'react';

export default class TeamStore {
	constructor() {
		makeAutoObservable(this);
	}

	state: string = '';
	setState = (state: string) => {
		this.state = state;
	};

	mascot: string = '';
	setMascot = (mascot: string) => {
		this.mascot = mascot;
	};

	players: Athlete[] = [];

	get teamName(): string {
		return this.state + this.mascot;
	}

	get totalYearlyCost(): number {
		return this.players.reduce(
			(totalSalary, currentAthlete) => totalSalary + currentAthlete.salary,
			0
		);
	}

	addPlayer(player: Athlete) {
		this.players.push(player);
	}
}

const TeamStoreContext = React.createContext<TeamStore>(
	null as unknown as TeamStore
);

export const useTeamStore = () => React.useContext(TeamStoreContext);

type Props = {
	children: React.ReactNode;
	players: Athlete[];
};

export function TeamStoreProvider({ children, players }: Props) {
	const store = new TeamStore();
	store.players = players;
	return (
		<TeamStoreContext.Provider value={store}>
			{children}
		</TeamStoreContext.Provider>
	);
}
