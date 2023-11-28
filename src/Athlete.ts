import { action, makeObservable, observable } from 'mobx';

class Athlete {
	name: string;
	age: number;
	teamHistory: string[];
	salary: number;

	constructor(name: string, age: number, salary: number) {
		this.name = name;
		this.age = age;
		this.teamHistory = [];
		this.salary = salary;

		makeObservable(this, {
			salary: true,
			wishHappyBirthday: true,
			tradePlayer: action,
			name: observable,
			age: observable,
			teamHistory: true,
		});
	}

	wishHappyBirthday = () => {
		this.age++;
	};

	tradePlayer = (newTeam: string) => {
		this.teamHistory.push(newTeam);
	};
}

export default Athlete;
