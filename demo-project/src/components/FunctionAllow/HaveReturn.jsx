import React from 'react'

function person(){
  let age = 20;
  let new_age = age + 1;
  return {new_age, age};
}

// console.log(person().new_age + 1);
function person_two(age, name, gender){
    let username = `${name}`;
    let use_age = `${age}`;
    let use_gender = `${gender}`;
    return [{username, use_age, use_gender}, {username, use_age, use_gender},];
}
// const test = [
//   { name: "new Person", age: 20 },
//   { name: "new Person1", age: 20 },
//   { name: "new Person2", age: 20 },
// ]
// let Call_Person = function person_two(test)
let restore = person_two(21, "Lika", "Female"); 

console.log(restore)

const HaveReturn = () => {
  return (
    <div>HaveReturn</div>
  )
}

export default HaveReturn