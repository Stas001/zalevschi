//===================================================1.	Creați clasa Worker (lucrător), cu următoarea structură:



class Worker {
	constructor(nume, surname, hourRate, hours){
		this.nume = nume;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
		getNume(){
		return this.nume;
		}
		getSurname(){
		return this.surname;
		}

		getHourRate(){
		return this.hourRate;
		}
		getHours(){
		return this.hours;
		}
	
	
	

	getSalary() {
		return this.hourRate*this.hours;
	}

	increaseSalary( n) {
		
		this.hourRate = n + this.getHourRate();
	} 

	setTax(k){
		this.k = this.getSalary()*(k/100);
	}   
	getSalaryNetto(){
		return (this.getSalary() - this.k); 
	} 
}

console.log('\nSarcina 1');
let worker = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker.nume); //afișează 'Ion' 
console.log(worker.surname); //afișează 'Creangă' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 176 
console.log(worker.getSalary()); 


//=============================================2.	De creat 2 lucrători și de afișat informația despre fiecare.


console.log('\nSarcina 2');
let worker1 = new Worker('Mihai', 'Emenescu', 12, 192);
let worker12 = new Worker('Mihail', 'Volontir', 15, 125);
console.log(worker1.nume); //afișează 'Ion' 
console.log(worker1.surname); //afișează 'Creangă' 
console.log(worker1.hourRate); //afișează 10 
console.log(worker1.hours); //afișează 192 
console.log(worker1.getSalary()); 
console.log(worker12.nume); //afișează 'Ion' 
console.log(worker12.surname); //afișează 'Creangă' 
console.log(worker12.hourRate); //afișează 10 
console.log(worker12.hours); //afișează 192 
console.log(worker12.getSalary()); 


//==================================================3.	De afișat lucrătorul care are salariul mai mare primul și cu cît.                  

console.log('\nSarcina 3');

if(worker.getSalary() > worker1.getSalary() && worker.getSalary() > worker12.getSalary() ){
	console.log(worker.nume + " " + worker.surname + " are mai mare salariu. El are = " + worker.getSalary());
}	else if(worker1.getSalary() > worker.getSalary() && worker1.getSalary() > worker12.getSalary()){
	console.log(worker1.nume + " " + worker1.surname + " are mai mare salariu. El are = " + worker1.getSalary());
}	else {
	console.log(worker12.nume + " " + worker12.surname + " are mai mare salariu. El are = " + worker12.getSalary());
}





//=================================================4.	Modificați clasa Worker cu getter-ilor (getName, getSurname, getRate, getHours)


console.log('\nSarcina 4');
let worker3 = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker3.getNume()); //afișează 'Ion' 
console.log(worker3.getSurname()); //afișează 'Creangă' 
console.log(worker3.getHourRate()); //afișează 10
console.log(worker3.getHours()); //afișează 176 
console.log(worker3.getSalary()); 



//=================================================================5.	De creat metoda increaseSalary                                                                       
console.log('\nSarcina 5');
let worker4 = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker4.getNume()); //afișează 'Ion' 
console.log(worker4.getSurname()); //afișează 'Creangă' 
console.log(worker4.getHourRate()); //afișează 10
console.log(worker4.getHours()); //afișează 176 
console.log(worker4.getSalary()); 
worker4.increaseSalary(2);
console.log(worker4.getSalary()); 

//=======================================================6.De creat metoda setTax, care setează procentul impozitului la salariu și metoda getSalartyNetto, 

console.log('\nSarcina 6');
let worker5 = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker5.getNume()); //afișează 'Ion' 
console.log(worker5.getSurname()); //afișează 'Creangă' 
console.log(worker5.getHourRate()); //afișează 10
console.log(worker5.getHours()); //afișează 176 
console.log(worker5.getSalary()); 
worker5.increaseSalary(2);
console.log(worker5.getSalary()); 
worker5.setTax(18);
console.log(worker5.getSalaryNetto().toFixed(2));


//=======================================================7.	De creat un masiv cu 3 angajați. De realizat afișarea în ciclu a informației despre toți angajații

console.log('\nSarcina 7');
var a = [['Nicolai', 'Munteanu', 9, 163], ['Maria', 'Ursu', 11, 198], ['Boris', 'Spinu', 15, 175]];

for(var i = 0; i < 3; i++){
	
	var vector = [];
	for(var j = 0; j < 4; j++){
		vector.push(a[i][j]);
	}
	
	let worker6 = new Worker(vector[0], vector[1], vector[2], vector[3]);
	console.log(worker6.getNume()); //afișează 'Ion' 
	console.log(worker6.getSurname()); //afișează 'Creangă' 
	console.log(worker6.getHourRate()); //afișează 10
	console.log(worker6.getHours()); //afișează 176 
	console.log(worker6.getSalary()); 
	worker6.increaseSalary(2);
	console.log(worker6.getSalary()); 
	worker6.setTax(18);
	console.log(worker6.getSalaryNetto().toFixed(2));

}

