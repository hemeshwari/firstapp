import React from "react";
import bg from "./app.css";

// let el = <h1>hEllo World!</h1>
// let el = <h1>{70+30}</h1>

// const name="Nisha!";
// let el = <h1>Hello {name}</h1>

// function greet(){
//   return 'Vishwakarma Ji!'
// };
// let el = <h1>Hello {greet()}</h1>


// const User={
//   name:"nisha",
//   surname:"vishwakarma"
// }
// let el=<h1 className="bg">name: {User.name}  surname: {User.surname}</h1>

let el = React.createElement("h1",{className:"bg"},"Hello Nisha!");



export default el;