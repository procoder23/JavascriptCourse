let name = "Prathamesh Mestry";

const first_name = name.slice(0, 10);
const last_name = name.slice(11, 17);
// console.log(first_name);
// console.log(last_name);
const fname = name.slice(0, name.indexOf(""));
const lname = name.slice(name.indexOf("")+1);