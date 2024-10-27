// Method chaining = Calling one method after another in one continous line of code.


// ------------- No method chaining -----------------------
// let username = window.prompt("Enter your username");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// alert(username);

// -------------- Method Chaining -------------------------
let username = window.prompt("Enter your username");
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
alert(username);