//DOM = Document Object Model
// Object{} that represent the page you see in the web browser and provides you with an API to interact with it
// Web browser construct the DOM when it loads an HTML documents,
//and structures all the elements in a tree like representation

// document.title = "My Site"
document.body.style.backgroundColor = "Yellow";
const username = "";
const welcome_msg = document.getElementById("welcome-msg");
welcome_msg.textContent += username === "" ? " Guest" : ` ${username}`;