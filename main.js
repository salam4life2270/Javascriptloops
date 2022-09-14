/* Transforming randomized data into an array */

let data = [
    {
      name: "Frasco Arnoll",
      birthdate: "10/22/1977",
      children: 2,
      country: "France",
      can_program	: false

    },
    {
    name: "Cass Hincham",
    birthdate: "3/11/1969",
    children: 5,
    country: "Pakistan",
    can_program: false

    },
    {
    name: "Frank Drennan",
    birthdate: "7/3/2002",
    children: 1,
    country: "Philippines",
    can_program: true

    },
    {
    name: "Madlen Albrooke", 
    birthdate: "6/30/1962",
    children: 2,
    country: "Albania",
    can_program: true

    },
    {
    name: "Honor Danhel",
    birthdate: "9/7/1987",
    children: 2,
    country: "Nepal",
    can_program: true

    },
    {
    name: "Ellary Macauley",
    birthdate: "6/12/1961",
    children: 5,
    country: "Netherlands",
    can_program: true

    },
    {
    name: "Constanta Kennaird",
    birthdate: "8/21/1963",
    children: 5,
    country: "Indonesia",
    can_program: true

    },
    {
    name:  "Cammi Pinckney",
    birthdate: "5/17/2003",
    children: 4,
    country: "Sweden",
    can_program: false

    },
    {
    name: "Darcey Holton",
    birthdate: "8/11/1980",
    children: 5,
    country: "China",
    can_program: true

    },
    {
    name: "Audrie Boatright",
    birthdate: "7/8/1989",
    children: 0,
    country: "Brazil",
    can_program: true

    }


]

/* Create a Javascript file that, using console.log() that outputs the total number of children */


let total = 0
for (let i = 0; i < data.length; i++) {
  total += data[i].children;
console.log(total); // The total number of children of 10 is printed
}

/*Outputs one string per person formatted as such:
Name: Age*/

for (let i = 0; i < data.length; i++) {
  const NameAge = data[i].name+":"+ data[i].birthdate
console.log(NameAge); // The total number of children of 10 is printed
}



/*Output all properties of all people using for…in*/

for (properties of data) {
  console.log (properties);
}