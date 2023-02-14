
// Objects in Array

const Students = [
    {stud1_ID: 01, stud1Name: "Student 1"},
    {stud2_ID: 02, stud2Name: "Student 2 "},
    {stud3_ID: 03, stud3Name: "Studemt 3"},
];


// for(let student of Students){
//     console.log(student);
// }

const [ {stud1_ID: s1_id } ,  , {stud3Name: s3_name} ] = Students;

console.log(s1_id);
console.log(s3_name);
