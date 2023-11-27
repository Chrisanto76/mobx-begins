import { action, makeObservable, observable } from 'mobx';

class Athlete {
	name: string;
	age: number;
	teamHistory: string[];

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.teamHistory = [];

		makeObservable(this, {
			wishHappyBirthday: true,
			tradePlayer: action,
			name: observable,
			age: observable,
			teamHistory: true,
		});
	}

	wishHappyBirthday = () => {
		//console.log(`Happy Birthday ${this.name}!`);
		this.age++;
	};

	tradePlayer = (newTeam: string) => {
		this.teamHistory.push(newTeam);
	};
}

export default Athlete;
