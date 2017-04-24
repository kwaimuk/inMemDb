/*jshint esversion: 6 */
const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};
let employee;
const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

function byId(id) {
employee = users[id];
console.log(employee);
}
byId(2);

function youngest() {
let youngestNumber = 99;
let youngest;
for(let i =1; i<13; i++){
  if(youngestNumber >= users[i].age)
    {youngestNumber = users[i].age;
    youngest = users[i];
    }
}
    console.log("Youngest: ",youngest.name, youngest.age);

}
youngest("test");


function oldest() {
let oldestNumber = 0;
let oldest;
for(let i =1; i<13; i++){
  if(oldestNumber <= users[i].age)
    {oldestNumber = users[i].age;
    oldest = users[i];
    }
}
    console.log("Oldest: ",oldest.name, oldest.age);

}
oldest();


function males () {
let males = [];
for(let i =1; i<13; i++){
  if(users[i].gender === "m" )
    {males.push(users[i].name);

    }
}
    console.log("Males: ",males);

}

males();


function females () {
let females = [];
for(let i =1; i<13; i++){
  if(users[i].gender === "f" )
    {females.push(users[i].name);

    }
}
    console.log("Females: ",females);

}

females();

function employees(employer) {
let organization = [];
for(let i =1; i<13; i++){
  if(users[i].jobType === employer )
    {organization.push(users[i].name);

    }
}
    console.log(`${employer} Organization: `,organization);
}
employees("dv");

canDrink = () =>{
let legalAge = 21;
let party = [];
for(let i =1; i<13; i++){
  if(users[i].age >= 21)
    {
    party.push(users[i].name);
    }
}
console.log("Can Drink",party);
};

canDrink();

function employees() {
let dv = [];
let st = [];
let na = [];
for(let i =1; i<13; i++){
  if(users[i].jobType === "dv" )
    {dv.push(users[i].name);

    }
    if(users[i].jobType === "st" )
    {st.push(users[i].name);

    }
    if(users[i].jobType === "na" )
    {na.push(users[i].name);

    }
}
    console.log(`DV Organization: `,dv);
    console.log(`ST Organization: `,st);
    console.log(`NA Organization: `,na);
}
employees("dv");

const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  employees: employees
};

module.exports = functions;
