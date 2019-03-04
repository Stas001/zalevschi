//==============================================================Insarcin 1
class Worker {
	constructor(nume, surname, hourRate, hours){
		this.nume = nume;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
	

	getSalary() {
		return this.hourRate*this.hours;
	}
}
// var Worker = function(name, surname, hourRate, hours){
// 	this.name = name;
// 	this.surname = surname;
// 	this.hourRate = hourRate;
// 	this.hours = hours;
// };
// Worker.prototype.getSalary = function(){
// 	return this.hourRate*this.hours;
// }
let worker = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker.nume); //afișează 'Ion' 
console.log(worker.surname); //afișează 'Creangă' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 31 
console.log(worker.getSalary()); 
//==============================================================Insarcin 2

let worker1 = new Worker('Mihai', 'Emenescu', 12, 192);

console.log(worker1.nume); //afișează 'Ion' 
console.log(worker1.surname); //afișează 'Creangă' 
console.log(worker1.hourRate); //afișează 10 
console.log(worker1.hours); //afișează 31 
console.log(worker1.getSalary()); 

//==============================================================Insarcin 3

if(worker.getSalary() > worker1.getSalary()){
	console.log(worker.nume + " are mai mare salariu. El are = " + worker.getSalary());
}	else if(worker.getSalary() < worker1.getSalary()){
	console.log(worker1.nume + " are mai mare salariu. El are = " + worker1.getSalary());
}	else {
	console.log("Ele doi  sre salariu egual");
}
